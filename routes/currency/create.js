const express = require('express');
const router = express.Router();
const Currency = require('../../models/Currency');
const fault = require('../../utilities/Errors');

router.post('/', (req, res) => {
    Currency.findOne({ code: req.body.code }).then(currency => {
        if (currency) {
            return res.status(400).json({
                message: fault(400).message
                //"400": "Currency already exists",
            });
        } else {

            const newCurrency = new Currency({
                code: req.body.code,
                name: req.body.name
            });

            newCurrency
                .save()
                .then(currency => res.json(currency))
                .catch(err => res.json(err));
        }
    });
});
module.exports = router;