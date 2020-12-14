const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    res.status(200).json([
        "CARBON_STEEL",
        "LOW_TEMP",
        "LOW_ALLOY",
        "AUSTENITIC",
        "DUPLEX",
        "NICKEL_ALLOY",
        "OTHERS"
    ]);
});

module.exports = router;
