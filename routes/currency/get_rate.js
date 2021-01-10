const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    
    const rate_from = decodeURI(req.query.rate_from);
    const rate_to = decodeURI(req.query.rate_to);

    if (!rate_from || !rate_to) {
        res.status(400).json({ message: "argument is missing." });
    } else {
        require('../../models/Currency').findById(rate_from, function (errRateFrom, resRateFrom) {
            if (!!errRateFrom || !resRateFrom || !resRateFrom.usdPerUnit) {
                res.status(400).json({ message: "could not find rate from"});
            } else {
                require('../../models/Currency').findById(rate_to, function (errRateTo, resRateTo) {
                    if (!!errRateTo || !resRateTo || !resRateTo.unitPerUsd) {
                        res.status(400).json({ message: "could not find rate to"});
                    } else {
                        res.status(200).send({ data: resRateFrom.usdPerUnit * resRateTo.unitPerUsd });
                    }
                });
            }
        });
    }
});

module.exports = router;