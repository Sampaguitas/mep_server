const express = require('express');
const router = express.Router();

let regNps = /^(\d| |\/)*"$/
let regDn = /^DN \d*$/
let regMm = /^(\d|\.)* mm$/

router.get('/', (req, res) => {
    const pff_type = decodeURI(req.query.pff_type);
    const size_two = decodeURI(req.query.size_two);
    
    if (pff_type !== "FORGED_OLETS" || !size_two) {
        res.status(200).json([]);
    } else {
        let temp_two = require('../../constants/sizes.json')
        .find(e => e.pffTypes.includes(pff_type) && e.tags.includes(size_two));
        if (!temp_two || !temp_two.mm) {
            res.status(200).json([]);
        } else {
            let temp_three = require('../../constants/sizes.json')
            .filter(e => e.pffTypes.includes(pff_type) && e.mm >= temp_two.mm)
            .reduce(function (acc, cur) {
                cur.tags.map(tag => {
                    if(regNps.test(tag)) {
                        acc.nps.push(tag);
                    } else if(regDn.test(tag)) {
                        acc.dn.push(tag);
                    } else if(regMm.test(tag)) {
                        acc.mm.push(tag);
                    } else {
                        acc.other.push(tag);
                    }
                });
                return acc;
            }, {
                "nps": [],
                "dn": [],
                "mm": [],
                "other": []
            });
            res.status(200).json([...temp_three.nps, ...temp_three.dn, ...temp_three.mm, ...temp_three.other]);
        }
    }
});

module.exports = router;