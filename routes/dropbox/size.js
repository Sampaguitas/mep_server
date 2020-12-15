const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const pff_type = decodeURI(req.query.pff_type);
    let temp = require('../../constants/sizes.json')
    .filter(e => e.pffTypes.includes(pff_type))
    .reduce(function (acc, cur) {
        if(!!cur.nps) {
            acc.nps.push(cur.nps);
        }
        if(!!cur.dn && cur.dn !== cur.nps) {
            acc.dn.push(cur.dn);
        }
        if(!!cur.mm) {
            acc.mm.push(`${cur.dn} mm`);
        }
        return acc;
    }, {
        "nps": [],
        "dn": [],
        "mm": []
    });
    res.status(200).json([...temp.nps, ...temp.dn, ...temp.mm]);
});

module.exports = router;