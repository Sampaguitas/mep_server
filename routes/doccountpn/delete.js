const express = require('express');
const router = express.Router();
const DocCountPn = require('../../models/DocCountPn');
const fault = require('../../utilities/Errors');

router.delete('/', (req, res) => {
    const id = req.query.id
    DocCountPn.findByIdAndRemove(id, function (err, doccountpn) {
        if (!doccountpn) {
            return res.status(400).json({
                message: fault(1801).message
                //"1801": "DocCountPn does not exist",
            });
        }
        else {
            return res.status(200).json({
                message: fault(1803).message
                //"1803": "DocCountPn has been deleted",
            });
        }
    });
});

module.exports = router;