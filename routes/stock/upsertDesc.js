const express = require('express');
const router = express.Router();
const Stock = require("../../models/Stock")

router.post('/', async function(req, res) {
    
    const data = JSON.parse(req.body.data);
    
    let myPromises = [];
    let nRejected = 0;
    let nUpserted = 0;

    data.forEach(element => {

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
        
        let myObject = require('../../functions/generateDesc')(sizeOne, sizeTwo, sizeThree, wallOne, wallTwo, type, grade, length, end);
        
        myObject.artNr = artNr;
        
        if (!!itemDesc) {
            myObject.description.name = itemDesc;
        }

        myPromises.push(upsertDesc(myObject));
    });

    await Promise.all(myPromises).then(r => {
        if (r.isRejected) {
            nRejected++;
        } else {
            nUpserted++;
        }
    })

    res.status(200).json({message: `${nRejected + nUpserted} processed, ${nRejected} rejected, ${nUpserted} upserted`});
});

module.exports = router;

function upsertDesc(myObject) {
    return new Promise(function(resolve) {
        if (!myObject.artNr || !myObject.location) {
            resolve({isRejected: true});
        } else {

            let conditions = { artNr: myObject.artNr, location: myObject.location }
            let update = { description: myObject.description }
            let options = { new: true, upsert: true }
            
            require("../../models/Stock").findOneAndUpdate(conditions, update, options, function(err, res) {
                if (!!err || !res) {
                    resolve({isRejected: true});
                } else {
                    resolve({isRejected: false});
                }
            });
        }
    });
}