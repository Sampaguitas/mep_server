const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const pff_type = decodeURI(req.query.pff_type);
    res.status(200).json(require('../../constants/types.json')
    .filter(e => e.pffType === pff_type && !e.isMultiple)
    .reduce(function (acc, cur) {
        acc.push(cur.name);
        return acc;
    }, []));
});

module.exports = router;