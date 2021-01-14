const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const data = JSON.parse(req.body.data);
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
            myObject.desc.name = itemDesc;
        }

        console.log(myObject.desc);
    });

    res.status(200).json({message: "passed the test"});
});

module.exports = router;