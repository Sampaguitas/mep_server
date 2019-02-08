const express = require('express');
const router = express.Router();
const Currency = require('../../models/Currency');
const fault = require('../../utilities/Errors');

router.get('/', (req, res) => {
    const id = req.query.id
    Currency.findById(id, function (err, currency) {
        if (!currency) {
            return res.status(404).json({
                message: fault(401).message
                //"401": "Currency does not exist",
            });
        }
        else {
            return res.json(currency);
        }
    });
});


module.exports = router;
