const express = require('express');
const router = express.Router();
const DocCountSm = require('../../models/DocCountSm');
const fault = require('../../utilities/Errors');

router.put('/', (req, res) => {
    var data = {};
    Object.keys(req.body).forEach(function (k) {
        data[k] = decodeURI(req.body[k]);
    });
    const id = req.query.id
    DocCountSm.findByIdAndUpdate(id, { $set: data }, function (err, doccountsm) {
        if (!doccountsm) {
            return res.status(400).json({
                message: fault(1801).message
                //"1801": "DocCountSm does not exist",
            });
        }
        else {
            return res.status(200).json({
                message: fault(1802).message
                //"1802": "DocCountSm has been updated",
            });
        }
    });
});

module.exports = router;
