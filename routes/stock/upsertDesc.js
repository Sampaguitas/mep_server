const express = require('express');
const router = express.Router();
const Import = require("../../models/Import");
router.post('/', function(req, res) {

    const data = JSON.parse(req.body.data);
    const { location } = req.body;

    let myPromises = [];
    let nRejected = 0;
    let nUpserted = 0;

    if (!location) {
        res.status(400).json({message: "Stock Location has not been specified."});
    } else {
        
        let newImport = new Import({"user": req.user.name, "import_type": "Description", "location": location, status: 0 });

        newImport
        .save()
        .then(resImport => {
            res.status(200).json({ data: resImport._id });

            data.forEach(function (element, index, array) {

                let artNr = !!element[0] ? element[0] : "";
                let itemDesc = !!element[1] ? element[1] : "";
                let sizeOne = !!element[2] ? element[2] : "";
                let sizeTwo = !!element[3] ? element[3] : "";
                let sizeThree = !!element[4] ? element[4] : "";
                let wallOne = !!element[5] ? element[5] : "";
                let wallTwo = !!element[6] ? element[6] : "";
                let type = !!element[7] ? element[7] : "";
                let grade = !!element[8] ? element[8] : "";
                let length = !!element[9] ? element[9] : "";
                let end = !!element[10] ? element[10] : "";
                let surface = !!element[11] ? element[11] : "";
                
                let myObject = require('../../functions/generateDesc')(sizeOne, sizeTwo, sizeThree, wallOne, wallTwo, type, grade, length, end, surface);
                
                myObject.artNr = artNr;
                
                if (!!itemDesc) {
                    myObject.description.name = itemDesc;
                }
    
                myPromises.push(upsertDesc(myObject, location, resImport._id, index, array.length));
            });
    
            Promise.all(myPromises).then(myResults => {
                myResults.map(result => {
                    if (result.isRejected) {
                        nRejected++;
                    } else {
                        nUpserted++;
                    }
                });
                let message = `${nRejected + nUpserted} processed, ${nRejected} rejected, ${nUpserted} upserted`;
                require("../../models/Import").findByIdAndUpdate(resImport._id, { message: message, status: 1 }, function (errUpdate, resUpdate) {
                    if (!!errUpdate || resUpdate) {
                        console.log("error1", message);
                    } else {
                        console.log("success1", message);
                    }
                });
            })
            .catch( () => {
                let message = `${nRejected + nUpserted} processed, ${nRejected} rejected, ${nUpserted} upserted`;
                require("../../models/Import").findByIdAndUpdate(resImport._id, { message: message, status: 1 }, function (errUpdate, resUpdate) {
                    if (!!errUpdate || !resUpdate) {
                        console.log("error2", message);
                    } else {
                        console.log("success2", message);
                    }
                });
            });
        })
        .catch( () => {
            res.status(400).json({message: "Could not generate Import Log."});
        });
    }
});

module.exports = router;

function upsertDesc(myObject, location, importId, index, length) {
    return new Promise(function(resolve) {
        
        let ImportConditions = { _id : importId }
        let ImportUpdate = { status: Math.min(Math.max(index / (length -1), 0), 1) }
        let ImportOptions = { new: true, upsert: true }

        require("../../models/Import").findOneAndUpdate(ImportConditions, ImportUpdate, ImportOptions, function (errImport, resImport) {
            if (!myObject.artNr || !location) {
                resolve({isRejected: true});
            } else {
                let stockConditions = { artNr: myObject.artNr, location: location }
                let stockUpdate = { description: myObject.description }
                let stockOptions = { new: true, upsert: true }
                
                require("../../models/Stock.js").findOneAndUpdate(stockConditions, stockUpdate, stockOptions, function(errStock, resStock) {
                    if (!!errStock || !resStock) {
                        resolve({isRejected: true});
                    } else {
                        resolve({isRejected: false});
                    }
                });
            }
        });
    });
}