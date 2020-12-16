const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    
    const steel_type = decodeURI(req.query.steel_type);
    const pff_type = decodeURI(req.query.pff_type);
    const size_two = decodeURI(req.query.size_two);

    let regMm = /^(\d|\.)* mm$/
    let regIn = /^(\d|\.)* in$/
    let regIdt = /^(STD|XS|XXS)$/
    let regSch = [
        "CARBON_STEEL",
        "LOW_TEMP",
        "LOW_ALLOY",
    ].includes(steel_type) ? /^S\d*$/ : /^S\d*S?$/

    let sizeObject = require('../../constants/sizes.json')
    .find(e => e.pffTypes.includes(pff_type) && e.tags.includes(size_two))
    if (pff_type == "FORGED_OLETS" || !sizeObject || !sizeObject.mm) {
        res.status(200).json([])
    } else {
        let temp = require('../../constants/walls.json')
        .filter(e => e.sizeId === sizeObject.mm)
        .reduce(function (acc, cur) {
            cur.tags.map(tag => {
                if(regMm.test(tag)) {
                    acc.mm.push(tag);
                } else if(regIn.test(tag)) {
                    acc.in.push(tag);
                } else if(regIdt.test(tag)) {
                    acc.idt.push(tag);
                } else if(regSch.test(tag)) {
                    acc.sch.push(tag);
                }
            });
            return acc;
        }, {
            "mm": [],
            "in": [],
            "idt": [],
            "sch": [],
        });

        res.status(200).json([...temp.idt, ...temp.sch, ...temp.mm, ...temp.in]);
    }
});

module.exports = router;