const express = require('express');
const router = express.Router();
const _ = require("lodash");

router.get('/', (req, res) => {
    const pff_type = decodeURI(req.query.pff_type);
    res.status(200).json(require('../../constants/lengths.json')
    .filter(e => !_.isUndefined(req.query.pff_type) ? e.pffTypes.includes(pff_type) : true)
    .reduce(function (acc, cur) {
        acc.push(cur.name);
        return acc;
    }, [])
    .filter((value, index, self) => self.indexOf(value) === index));
});

module.exports = router;