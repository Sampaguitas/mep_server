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
    let rejections = [];
    
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
                    let newProcess = new Process({
                        "user": "system",
                        "process_type": `update ${loc}`, 
                        "progress": 0,
                        "isStalled": false,
                        "message": "process started",
                        "rejections": rejections
                    });
                
                    newProcess
                    .save()
                    .then(resProcess => {
                        res.status(200).json({ "processId": resProcess._id });
                        
                        const rows = file.buffer.toString().split("\r\n");
                        const rowsLength = rows.length;
                        console.log(rowsLength);
                        for (var i = 1; i < rowsLength; i++) {
                            myPromises.push(updateChild(rows[i].split("\t"), resProcess._id, i, rowsLength));
                        }

                        Promise.all(myPromises).then(myResults => {
                            myResults.map(result => {
                                if (result.isRejected) {
                                    nRejected++;
                                    rejections.push({
                                        "row": result.row,
                                        "reason": result.reason
                                    });
                                } else {
                                    nUpserted++;
                                }
                            });

                            let message = `${nRejected + nUpserted} processed, ${nRejected} rejected, ${nUpserted} upserted.`;
                            require("../../models/Process").findByIdAndUpdate(resProcess._id, {
                                "progress": 1,
                                "isStalled": false,
                                "message": message,
                                "rejections": rejections
                            }, function(errProcessUpdate, resProcessUpdate) {
                                if (!!errProcessUpdate || !resProcessUpdate) {
                                    console.log("errProcessUpdate")
                                } else {
                                    console.log("resProcessUpdate")
                                }
                            });
                        }).catch( () => {
                            require("../../models/Process").findByIdAndUpdate(resProcess._id, {
                                "progress": 1,
                                "isStalled": false,
                                "message": "promise has been rejected."
                            }, function(errProcessUpdate, resProcessUpdate) {
                                if (!!errProcessUpdate || !resProcessUpdate) {
                                    console.log("errProcessUpdate")
                                } else {
                                    console.log("resProcessUpdate")
                                }
                            });
                        });
                    }).catch( () => {
                        res.status(400).json({ "message": "could not generate Process log."});
                    });
                }
            });
        });
        
    }
});

function updateChild(row, processId, index, length) {
    return new Promise(function(resolve) {
        
        let progress = Math.min(Math.max(index / (length -1), 0), 1);
        let options = { "new": true, "upsert": true  }
        let update = {
            "progress": progress,
            "isStalled": false,
            "message": `${Math.round(progress * 100)}% complete`,
            "rejections": []
        }

        require("../../models/Process").findByIdAndUpdate(processId, update, options, () => {
            if (row.length != 21) {
                resolve({ isRejected: true, row: index + 1, reason: "line does not contain 21 fields." });
            } else if (!String(row[0]).trim()) {
                resolve({ isRejected: true, row: index + 1, reason: "opco is not defined." });
            } else if (!["LB", "FT", "ST", "KG", "M"].includes(String(row[10]).trim())) {
                resolve({ isRejected: true, row: index + 1, reason: "unknown unit of mesurement." });
            } else {
                let data = {
                    "artNr": String(row[2]).trim(),
                    "name": String(row[0]).trim(),
                    "description": String(row[3]).trim(),
                    "uom": String(row[10]).trim(),
                    "weight": Number(row[8]),
                    "qty": Number(row[4]),
                    "gip": Number(row[5]),
                    "rv": Number(row[6]),
                    "supplier": String(row[11]).trim(),
                    "purchaseQty": Number(row[7]),
                    "firstInStock": Number(row[9]),
                    "deliveryDate": toDate(row[12]),
                    "supOneName": String(row[13]).trim(),
                    "supTwoName": String(row[14]).trim(),
                    "supThreeName": String(row[15]).trim(),
                    "supFourName": String(row[16]).trim(),
                    "supOneQty": Number(row[17]),
                    "supTwoQty": Number(row[18]),
                    "supThreeQty": Number(row[19]),
                    "supFourQty": Number(row[20])
                }

                let filter = { "artNr": data.artNr, "opcos.name": data.name }
                let update = {
                    $set: {
                        "description": data.description,
                        "weight": require("../../functions/generateWeight")(data.uom, data.weight),
                        "uom": require("../../functions/generateUom")(data.uom),
                        "opcos.$": {
                            "name": data.name,
                            "qty": require("../../functions/generateQty")(data.uom, data.qty),
                            "price": {
                                "gip": require("../../functions/generatePrice")(data.uom, data.gip, 1),
                                "rv": require("../../functions/generatePrice")(data.uom, data.rv, 1)
                            },
                            "purchase": {
                                "supplier": data.supplier,
                                "qty": require("../../functions/generateQty")(data.uom, data.purchaseQty),
                                "firstInStock": require("../../functions/generateQty")(data.uom, data.firstInStock),
                                "deliveryDate": data.date
                            },
                            "supplier": {
                                "names": [data.supOneName, data.supTwoName, data.supThreeName, data.supFourName],
                                "qtys": [data.supOneQty, data.supTwoQty, data.supThreeQty, data.supFourQty]
                            }
                        }
                    }
                }
                require("../../models/Stock").updateOne(filter, update, function(err, res) {
                    if (!!err) {
                        resolve({ isRejected: true, row: index + 1, reason: "an error has occured." });
                    } else if (!!res.nModified) {
                        resolve({ isRejected: false });
                    } else {
                        upsertParent(data, index).then(parentResponce => {
                            resolve({
                                "isRejected": parentResponce.isRejected,
                                "row": parentResponce.row,
                                "reason": parentResponce.reason
                            });
                        });
                    }
                });
            }
        });
    });
}

function upsertParent(data, index) {
    return new Promise(function(resolve) {
        let filter = { "artNr": data.artNr}
        let options = { "new": true, "upsert": true }
        let update = {
            $set: {
                "description": data.description,
                "weight": require("../../functions/generateWeight")(data.uom, data.weight),
                "uom": require("../../functions/generateUom")(data.uom),
            },
            $push: { 
                "opcos": {
                    "name": data.name,
                    "qty": require("../../functions/generateQty")(data.uom, data.qty),
                    "price": {
                        "gip": require("../../functions/generatePrice")(data.uom, data.gip, 1),
                        "rv": require("../../functions/generatePrice")(data.uom, data.rv, 1)
                    },
                    "purchase": {
                        "supplier": data.supplier,
                        "qty": require("../../functions/generateQty")(data.uom, data.purchaseQty),
                        "firstInStock": require("../../functions/generateQty")(data.uom, data.firstInStock),
                        "deliveryDate": data.date
                    },
                    "supplier": {
                        "names": [data.supOneName, data.supTwoName, data.supThreeName, data.supFourName],
                        "qtys": [data.supOneQty, data.supTwoQty, data.supThreeQty, data.supFourQty]
                    }
                }
            }
        }
        require("../../models/Stock").findOneAndUpdate(filter, update, options, function(err, res) {
            if (!!err || !res) {
                resolve({ "isRejected": true, "row": index + 1, "reason": "could not upsert the document" });
            } else {
                resolve({ "isRejected": false });
            }
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