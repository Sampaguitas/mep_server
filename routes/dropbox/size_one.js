const express = require('express');
const router = express.Router();

let regNps = /^(\d| |\/)*"$/
let regDn = /^DN \d*$/
let regMm = /^(\d|\.)* mm$/

router.get('/', (req, res) => {
    const pff_type = decodeURI(req.query.pff_type);
    let temp = require('../../constants/sizes.json')
    .filter(e => e.pffTypes.includes(pff_type))
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
    res.status(200).json([...temp.nps, ...temp.dn, ...temp.mm, ...temp.other]);
});

module.exports = router;