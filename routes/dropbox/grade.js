const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const steel_type = decodeURI(req.query.steel_type);
    const pff_type = decodeURI(req.query.pff_type);
    res.status(200).json(require('../../constants/grades.json')
    .filter(e => e.steelType === steel_type && e.pffTypes.includes(pff_type))
    .reduce(function (acc, cur) {
        acc.push(cur.name);
        return acc;
    }, []));
});

module.exports = router;