const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const pff_type = decodeURI(req.query.pff_type);
    const is_multiple = decodeURI(req.query.isMultiple)
    res.status(200).json(require('../../constants/types.json')
    .filter(e => !_.isUndefined(req.query.pff_type) ? e.pffType === pff_type : true)
    .filter(e => !_.isUndefined(req.query.isMultiple) ? e.isMultiple === is_multiple : true)
    .reduce(function (acc, cur) {
        acc.push(cur.name);
        return acc;
    }, [])
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort((a, b) => a.localeCompare(b)));
});

module.exports = router;