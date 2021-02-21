const express = require("express");
const router = express.Router();
var multer = require("multer");
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

router.post("/", upload.single("file"), function(req, res) {
    
    const file = req.file;
    const { pwd, loc } = req.body;
    
    let myPromises = [];
    let nRejected = 0;
    let nUpserted = 0;
    // let rejections = [];
    
    if (pwd !== require("../../config/keys").curlPwd) {
        res.status(401).send("Unauthorized");
    } else if (!loc) {
        res.status(400).json({ message: "Location not specified." });
    } else if (!file) {
        res.status(400).json({ message: "Upload file is missing." });
    } else {
        require("../../functions/updateStalled")()
        .then( () => {
            require("../../models/Process").findOne({
                "process_type": `update ${loc}`,
                "progress": { $ne: 1 },
                "isStalled": false,
            }, function (errProcessFound, resProcessFound) {
                if (!!errProcessFound) {
                    res.status(400).json({ "message": "an error has occured." });
                } else if (!!resProcessFound){
                    res.status(400).json({ "message": "Another process is currently running try again later." });
                } else {
                    const rows = file.buffer.toString().replace("\r","").split("\n");
                    let rowsLength = rows.length;
                    if (rowsLenght < 3) {
                        res.status(400).json({ "message": "the file seems to be empty." });
                    } else {
                        let newProcess = new Process({
                            "user": "system",
                            "process_type": `update ${loc}`, 
                            "progress": 0,
                            "isStalled": false,
                            "message": "process started",
                            // "rejections": rejections
                        });
                    
                        newProcess
                        .save()
                        .then(resProcess => {
                            res.status(200).json({ "processId": resProcess._id });
                            
                            // const rows = file.buffer.toString().replace("\r","").split("\n");
                            // let rowsLength = rows.length;
                            for (var i = 1; i < rowsLength - 1; i++) {
                                let row = rows[i].split("\t");
                                if (row.length != 21) {
                                    myPromises.push({
                                        isRejected: true,
                                        isUpserted: false,
                                        row: i + 1,
                                        // reason: "line does not contain 21 fields."
                                    });
                                } else if (!String(row[0]).trim()) {
                                    myPromises.push({
                                        isRejected: true,
                                        isUpserted: false,
                                        row: i + 1,
                                        // reason: "opco is not defined."
                                    });
                                } else if (!["LB", "FT", "ST", "KG", "M"].includes(String(row[10]).trim())) {
                                    myPromises.push({
                                        isRejected: true,
                                        isUpserted: false,
                                        row: i + 1,
                                        // reason: "unknown unit of mesurement."
                                    });
                                } else {
                                    myPromises.push(upsertParam(row));
                                    if (!Number(row[5]) && !Number(row[6])) {
                                        myPromises.push(deleteStock(row, resProcess._id, i, rowsLength));
                                    }  else {
                                        myPromises.push(upsertStock(row, resProcess._id, i, rowsLength));
                                    }
                                }
                            }
    
                            Promise.all(myPromises).then(myResults => {
                                myResults.map(result => {
                                    if (!!result.isRejected) {
                                        nRejected++;
                                        // rejections.push({
                                        //     "row": result.row,
                                        //     "reason": result.reason
                                        // });
                                    } else if (!!result.isUpserted) {
                                        nUpserted++;
                                    }
                                });
    
                                let message = `${nRejected + nUpserted} processed, ${nRejected} rejected, ${nUpserted} upserted.`;
                                require("../../models/Process").findByIdAndUpdate(resProcess._id, {
                                    "progress": 1,
                                    "isStalled": false,
                                    "message": message,
                                    // "rejections": rejections
                                }, (errCallback, resCallback) => console.log(!!errCallback || !resCallback ? "errCallback" : "resCallback"));
                            }).catch( () => {
                                require("../../models/Process").findByIdAndUpdate(resProcess._id, {
                                    "progress": 1,
                                    "isStalled": false,
                                    "message": "promise has been rejected."
                                }, (errCallback, resCallback) => console.log(!!errCallback || !resCallback ? "errCallback" : "resCallback"));
                            });
                        }).catch( () => {
                            res.status(400).json({ "message": "could not generate Process log."});
                        });
                    }
                }
            });
        });
    }
});

function upsertStock(row, processId, index, length) {
    return new Promise(function(resolve) {
        let progress = Math.min(Math.max(index / (length - 2), 0), 1);
        let options = { "new": true, "upsert": true  }
        let update = {
            "progress": progress,
            "isStalled": false,
            "message": `${Math.round(progress * 100)}% complete`,
            // "rejections": []
        }
        require("../../models/Process").findByIdAndUpdate(processId, update, options, () => {
            let uom = String(row[10]).trim();
            let filter = { artNr: String(row[2]).trim(), opco: String(row[0]).trim() }
            let options = { new: true, upsert: true }
            let update = {
                $set: {
                    "qty": require("../../functions/generateQty")(uom, Number(row[4])),
                    "price": {
                        "gip": require("../../functions/generatePrice")(uom, Number(row[5]), 1),
                        "rv": require("../../functions/generatePrice")(uom, Number(row[6]), 1)
                    },
                    "purchase": {
                        "supplier": String(row[11]).trim(),
                        "qty": require("../../functions/generateQty")(uom, Number(row[4])),
                        "firstInStock": require("../../functions/generateQty")(uom, Number(row[9])),
                        "deliveryDate": toDate(row[12])
                    },
                    "supplier": {
                        "names": [String(row[13]).trim(), String(row[14]).trim(), String(row[15]).trim(), String(row[16]).trim()],
                        "qtys": [Number(row[17]), Number(row[18]), Number(row[19]), Number(row[20])]
                    }
                }
            }
            require("../../models/Stock").findOneAndUpdate(filter, update, options, function(err, res) {
                if (!!err || !res) {
                    resolve({
                        isRejected: true,
                        isUpserted: false,
                        row: index + 1,
                        // reason: "an error has occured."
                    });
                } else {
                    resolve({
                        isRejected: false,
                        isUpserted: true 
                    });
                }
            });
        });
    });
}

function deleteStock(row, processId, index, length) {
    return new Promise(function(resolve) {
        let progress = Math.min(Math.max(index / (length - 2), 0), 1);
        let options = { "new": true, "upsert": true  }
        let update = {
            "progress": progress,
            "isStalled": false,
            "message": `${Math.round(progress * 100)}% complete`,
            // "rejections": []
        }
        require("../../models/Process").findByIdAndUpdate(processId, update, options, () => {
            let filter = { artNr: String(row[2]).trim(), opco: String(row[0]).trim() }
            require("../../models/Stock").findOneAndDelete(filter, function(err, res) {
                if (!!err) {
                    resolve({
                        isRejected: true,
                        isUpserted: false,
                        row: index + 1,
                        // reason: "an error has occured."
                    });
                } else {
                    resolve({
                        isRejected: false,
                        isUpserted: true 
                    });
                }
            });
        });
    });
}

function upsertParam(row) {
    return new Promise(function(resolve) {
        let uom = String(row[10]).trim();
        let filter = { artNr: String(row[2]).trim() }
        let options = { new: true, upsert: true }
        let update = {
            $set: {
                "description": String(row[3]).trim(),
                "weight": require("../../functions/generateWeight")(uom, Number(row[8])),
                "uom": require("../../functions/generateUom")(uom),
            }
        }
        require("../../models/Param").findOneAndUpdate(filter, update, options, function(err, res) {
            resolve({
                isRejected: false,
                isUpserted: false
            })
        });
    });
}

function toDate(excelDate) {
    let parced = Number(String(excelDate).trim());
    let temp = new Date((Number(parced) - (25567 + 1))*86400*1000);
    if ([ 2958463, 0 ].includes(parced) || temp == "Invalid Date") {
        return "";
    } else {
        return temp;
    }
}

module.exports = router;