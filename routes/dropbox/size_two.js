const express = require('express');
const router = express.Router();

let regNps = /^(\d| |\/)*"$/
let regDn = /^DN \d*$/
let regMm = /^(\d|\.)* mm$/

router.get('/', (req, res) => {
    const pff_type = decodeURI(req.query.pff_type);
    const size_one = decodeURI(req.query.size_one);
    let noPffTwo = [
        "PIPES",
        "PIPE_NIPPLES", 
        "LINE_BLANKS",
        "FASTENERS",
        "RING_GASKETS",
        "SW_GASKETS",
    ]
    
    if (noPffTwo.includes(pff_type) || !size_one) {
        res.status(200).json([]);
    } else {
        let temp_one = require('../../constants/sizes.json')
        .find(e => e.pffTypes.includes(pff_type) && e.tags.includes(size_one));
        if (!temp_one || !temp_one.mm) {
            res.status(200).json([]);
        } else {
            let temp_two = require('../../constants/sizes.json')
            .filter(e => e.pffTypes.includes(pff_type) && (pff_type === "FORGED_OLETS" ? e.mm >= temp_one.mm : e.mm < temp_one.mm))
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
            res.status(200).json([...temp_two.nps, ...temp_two.dn, ...temp_two.mm, ...temp_two.other]);
        }
    }
});

module.exports = router;