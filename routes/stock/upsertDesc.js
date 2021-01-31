const express = require('express');
const router = express.Router();
const Process = require("../../models/Process");

const erps = ["SBO", "US", "HANA"];

router.post('/', function(req, res) {

    const artNrs = JSON.parse(req.body.artNrs);
    const itemDescs = JSON.parse(req.body.itemDescs);
    const sizeOnes = JSON.parse(req.body.sizeOnes);
    const sizeTwos = JSON.parse(req.body.sizeTwos);
    const sizeThrees = JSON.parse(req.body.sizeThrees);
    const wallOnes = JSON.parse(req.body.wallOnes);
    const wallTwos = JSON.parse(req.body.wallTwos);
    const types = JSON.parse(req.body.types);
    const grades = JSON.parse(req.body.grades);
    const lengths = JSON.parse(req.body.lengths);
    const ends = JSON.parse(req.body.ends);
    const surfaces = JSON.parse(req.body.surfaces);
    const { erp } = req.body;

    let myPromises = [];
    let nRejected = 0;
    let nUpserted = 0;
    let rejections = [];

    if (!erps.includes(erp)) {
        res.status(400).json({message: "erp system not recognized."});
    } else {

        let newProcess = new Process({
            "user": req.user.name, 
            "process_type": `updating desc ${erp}`, 
            "status": 0 
        });

        newProcess
        .save()
        .then(resProcess => {
            res.status(200).json({ "data": resProcess._id });
            
            for (let i = 0; i < artNrs.length; i++) {
                let artNr = !!artNrs[i] ? artNrs[i] : "";
                let itemDesc = !!itemDescs[i] ? itemDescs[i] : "";
                let sizeOne = !!sizeOnes[i] ? sizeOnes[i] : "";
                let sizeTwo = !!sizeTwos[i] ? sizeTwos[i] : "";
                let sizeThree = !!sizeThrees[i] ? sizeThrees[i] : "";
                let wallOne = !!wallOnes[i] ? wallOnes[i] : "";
                let wallTwo = !!wallTwos[i] ? wallTwos[i] : "";
                let type = !!types[i] ? types[i] : "";
                let grade = !!grades[i] ? grades[i] : "";
                let length = !!lengths[i] ? lengths[i] : "";
                let end = !!ends[i] ? ends[i] : "";
                let surface = !!surfaces[i] ? surfaces[i] : "";

                let myObject = require("../../functions/generateDesc")(sizeOne, sizeTwo, sizeThree, wallOne, wallTwo, type, grade, length, end, surface);
                
                myObject.artNr = artNr;
                
                if (!!itemDesc) {
                    myObject.description.name = itemDesc;
                }
                myPromises.push(upsertDesc(myObject, erp, resProcess._id, i, artNrs.length));
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
                require("../../models/Process").findByIdAndUpdate(resProcess._id, { status: 1, message: message, rejections: rejections }, dumyCallBack);
            })
            .catch( () => {
                require("../../models/Process").findByIdAndUpdate(resProcess._id, {  status: 1, message: "promise has been rejected."  }, dumyCallBack);
            });
        })
        .catch( () => {
            res.status(400).json({"message": "could not generate Process log."});
        });
    }
});

module.exports = router;

function dumyCallBack(err, res) {
    if (!!err || !res) {
        console.log("Proccess could not be updated.");
    } else {
        console.log("Proccess successfully updated.");
    }
}

function upsertDesc(myObject, erp, processId, index, length) {
    return new Promise(function(resolve) {
        
        let ProcessConditions = { "_id" : processId }
        let ProcessUpdate = { "status": index = 0 ? 0 : Math.min(Math.max(index / (length -1), 0), 1) }
        let ProcessOptions = { "new": true, "upsert": true }

        require("../../models/Process").findOneAndUpdate(ProcessConditions, ProcessUpdate, ProcessOptions, function (errProcess, resProcess) {
            if (!erps.includes(erp)) {
                resolve({
                    "isRejected": true,
                    "row": index + 1,
                    "reason": "erp system not recognized."
                });
            } else if (!myObject.artNr) {
                resolve({
                    "isRejected": true,
                    "row": index + 1,
                    "reason": "article number is missing."
                });
            } else if (!myObject.description.parameters.sizeOne.name) {
                resolve({
                    "isRejected": true,
                    "row": index + 1,
                    "reason": "item description is missing."
                });
            } else if (!myObject.description.parameters.type.name) {
                resolve({
                    "isRejected": true,
                    "row": index + 1,
                    "reason": "item type is missing."
                });
            } else if (!myObject.description.parameters.grade.name) {
                resolve({
                    "isRejected": true,
                    "row": index + 1,
                    "reason": "material grade is missing."
                });
            }else {
                let stockConditions = { "_id": myObject.artNr }
                let stockUpdate = { "description": myObject.description }
                let stockOptions = { "new": true, "upsert": true }
                
                require(`../../models/Stock_${erp}.js`).findOneAndUpdate(stockConditions, stockUpdate, stockOptions, function(errStock, resStock) {
                    if (!!errStock || !resStock) {
                        resolve({
                            "isRejected": true,
                            "row": index + 1,
                            "reason": "an error has occured."
                        });
                    } else {
                        resolve({"isRejected": false});
                    }
                });
            }
        });
    });
}