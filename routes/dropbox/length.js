const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const pff_type = decodeURI(req.query.pff_type);
    res.status(200).json(require('../../constants/lengths.json')
    .filter(e => e.pffTypes.includes(pff_type))
    .reduce(function (acc, cur) {
        acc.push(cur.name);
        return acc;
    }, []));
});

module.exports = router;