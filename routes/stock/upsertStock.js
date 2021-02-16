const express = require("express");
const router = express.Router();
var multer = require("multer");
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

router.post("/", upload.single("file"), function(req, res) {
    const file = req.file;
    const { pwd } = req.body;
    
    let myPromises = [];
    let nRejected = 0;
    let nUpserted = 0;
    let rejections = [];
    
    if (pwd !== require("../../config/keys").curlPwd) {
        res.status(401).send("Unauthorized");
    } else if (!file) {
        res.status(400).json({message: "Upload file is missing."});
    } else {
        const rows = file.buffer.toString().split("\r\n");
        for (var i = 1; i < rows.length; i++) myPromises.push(updateChild(rows[i].split("\t"), i));
        Promise.all(myPromises).then( (results) => {
            results.map(result => {
                if (result.isRejected) {
                    nRejected++;
                    rejections.push({
                        row: result.row,
                        reason: result.reason
                    });
                    // console.log("reason:", result.reason);
                } else {
                    nUpserted++;
                }
            });
            let message = `${nRejected + nUpserted} processed, ${nRejected} rejected, ${nUpserted} upserted.`;
            res.status(200).json({message});
        });
    }
});

function updateChild(row, index) {
    return new Promise(function(resolve) {
        if (row.length != 21) {
            resolve({ isRejected: true, row: index + 1, reason: "line does not contain 21 fields." });
        } else if (!String(row[0])) {
            resolve({ isRejected: true, row: index + 1, reason: "opco is not defined." });
        } else if (!["LB", "FT", "ST", "KG", "M"].includes(String(row[10]))) {
            resolve({ isRejected: true, row: index + 1, reason: "unknown unit of mesurement." });
        } else {
            let filter = { "_id": String(row[2]), "opcos._id": String(row[0]) }
            let options = { }
            let update = {
                $set: {
                    "description": String(row[3].trim()),
                    "weight": require("../../functions/generateWeight")(String(row[10]), Number(row[8])),
                    "uom": require("../../functions/generateUom")(String(row[10])),
                    "opcos.$.qty": require("../../functions/generateQty")(String(row[10]), Number(row[4])),
                    "opcos.$.price": {
                        "gip": require("../../functions/generatePrice")(String(row[10]), Number(row[5]), 1),
                        "rv": require("../../functions/generatePrice")(String(row[10]), Number(row[6]), 1)
                    },
                    "opcos.$.purchase": {
                        "supplier": String(row[11]),
                        "qty": require("../../functions/generateQty")(String(row[10]), Number(row[7])),
                        "firstInStock": require("../../functions/generateQty")(String(row[10]), Number(row[9])),
                        "deliveryDate": getJsDateFromExcel(row[12])
                    },
                    "opcos.$.supplier": {
                        "names": [String(row[13]), String(row[14]), String(row[15]), String(row[16])],
                        "qtys": [Number(row[17]), Number(row[18]), Number(row[19]), Number(row[20])]
                    }
                }
            }
            require("../../models/Stock").updateOne(filter, update, options, function(err, res) {
                if (!!err) {
                    resolve({ isRejected: true, row: index + 1, reason: err });
                } else if (!!res.nModified) {
                    resolve({ isRejected: false });
                } else {
                    upsertParent(row, index).then( (log) => resolve(log));
                }
            });
        }
    });
}

function upsertParent(row, index) {
    return new Promise(function(resolve) {
        let filter = { "_id": String(row[2])}
        let options = { "new": true, "upsert": true }
        let update = {
            $set: {
                "description": String(row[3].trim()),
                "weight": require("../../functions/generateWeight")(String(row[10]), Number(row[8])),
                "uom": require("../../functions/generateUom")(String(row[10])),
            },
            $push: { 
                "opcos": {
                    "_id": String(row[0]),
                    "qty": require("../../functions/generateQty")(String(row[10]), Number(row[4])),
                    "price": {
                        "gip": require("../../functions/generatePrice")(String(row[10]), Number(row[5]), 1),
                        "rv": require("../../functions/generatePrice")(String(row[10]), Number(row[6]), 1),
                    },
                    "purchase": {
                        "supplier": String(row[11]),
                        "qty": require("../../functions/generateQty")(String(row[10]), Number(row[7])),
                        "firstInStock": require("../../functions/generateQty")(String(row[10]), Number(row[9])),
                        "deliveryDate": getJsDateFromExcel(row[12])
                    },
                    "supplier": {
                        "names": [String(row[13]), String(row[14]), String(row[15]), String(row[16])],
                        "qtys": [Number(row[17]), Number(row[18]), Number(row[19]), Number(row[20])]
                    }
                }
            }
        }
        require("../../models/Stock").findOneAndUpdate(filter, update, options, function(err, res) {
            if (!!err) {
                resolve({ isRejected: true, row: index + 1, reason: "could not upsert the document" });
            } else {
                resolve({ isRejected: false });
            }
        });
    });
}

function getJsDateFromExcel(excelDate) {
    let wrong = ["02958463", "00000000"];
    if (wrong.includes(excelDate)) {
        return "";
    } else {
        return new Date((Number(excelDate) - (25567 + 1))*86400*1000)
    }
}

module.exports = router;