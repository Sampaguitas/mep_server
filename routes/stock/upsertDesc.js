const express = require('express');
const router = express.Router();
const Process = require("../../models/Process");

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

    let myPromises = [];
    let nRejected = 0;
    let nUpserted = 0;
    let rejections = [];
    
    require("../../functions/updateStalled")()
    .then( () => {
        require("../../models/Process").findOne({
            "process_type": "update params",
            "progress": { $ne: 1 },
            "isStalled": false,
        }, function (errProcessFound, resProcessFound) {
            if (!!errProcessFound) {
                res.status(400).json({ "message": "an error has occured." });
            } else if (!!resProcessFound){
                res.status(400).json({ "message": "Another process is currently running try again later." });
            } else {
                let newProcess = new Process({
                    "user": req.user.name,
                    "process_type": "update params", 
                    "progress": 0,
                    "isStalled": false,
                    "message": "process started",
                });
            
                newProcess
                .save()
                .then(resProcess => {
                    res.status(200).json({ "processId": resProcess._id });
                    
                    for (let index = 0; index < artNrs.length; index++) {
                        let artNr = !!artNrs[index] ? artNrs[index] : "";
                        let itemDesc = !!itemDescs[index] ? itemDescs[index] : "";
                        let sizeOne = !!sizeOnes[index] ? sizeOnes[index] : "";
                        let sizeTwo = !!sizeTwos[index] ? sizeTwos[index] : "";
                        let sizeThree = !!sizeThrees[index] ? sizeThrees[index] : "";
                        let wallOne = !!wallOnes[index] ? wallOnes[index] : "";
                        let wallTwo = !!wallTwos[index] ? wallTwos[index] : "";
                        let type = !!types[index] ? types[index] : "";
                        let grade = !!grades[index] ? grades[index] : "";
                        let length = !!lengths[index] ? lengths[index] : "";
                        let end = !!ends[index] ? ends[index] : "";
                        let surface = !!surfaces[index] ? surfaces[index] : "";
            
                        let myObject = require("../../functions/generateDesc")(sizeOne, sizeTwo, sizeThree, wallOne, wallTwo, type, grade, length, end, surface);
                        
                        myObject.artNr = artNr;
                        
                        if (!!itemDesc) {
                            myObject.description.name = itemDesc;
                        }
                        myPromises.push(upsertDesc(myObject, resProcess._id, index, artNrs.length));
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
                            rejections: rejections
                        });
                    })
                    .catch( () => {
                        require("../../models/Process").findByIdAndUpdate(resProcess._id, {
                            "progress": 1,
                            "isStalled": false,
                            "message": "promise has been rejected." 
                        });
                    });
                })
                .catch( () => {
                    res.status(400).json({ "message": "could not generate Process log."});
                });
            }
        });
    })
    .catch( () => {
        res.status(400).json({ "message": "could not update stalled Processes."});
    });
});

module.exports = router;

function upsertDesc(myObject, processId, index, length) {
    return new Promise(function(resolve) {
        let progress = index = 0 ? 0 : Math.min(Math.max(index / (length -1), 0), 1);
        let ProcessConditions = { "_id" : processId }
        let ProcessUpdate = { 
            "progress": progress,
            "isStalled": false,
            "message": `${Math.round(progress * 100)}% complete`
        }
        
        let ProcessOptions = { "new": true, "upsert": true }

        require("../../models/Process").findOneAndUpdate(ProcessConditions, ProcessUpdate, ProcessOptions, function (errProcess, resProcess) {
            if (!myObject.artNr) {
                resolve({
                    "isRejected": true,
                    "row": index + 1,
                    "reason": "article number is missing."
                });
            } else if (!myObject.parameters.sizeOne.name) {
                resolve({
                    "isRejected": true,
                    "row": index + 1,
                    "reason": "item description is missing."
                });
            } else if (!myObject.parameters.type.name) {
                resolve({
                    "isRejected": true,
                    "row": index + 1,
                    "reason": "item type is missing."
                });
            } else if (!myObject.parameters.grade.name) {
                resolve({
                    "isRejected": true,
                    "row": index + 1,
                    "reason": "material grade is missing."
                });
            } else {
                let stockConditions = { "artNr": myObject.artNr }
                let stockUpdate = {
                    "description": myObject.description,
                    "vlunar": myObject.vlunar,
                    "parameters": myObject.parameters
                }
                let stockOptions = { "new": true, "upsert": true }
                
                require(`../../models/Stock.js`).findOneAndUpdate(stockConditions, stockUpdate, stockOptions, function(errStock, resStock) {
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