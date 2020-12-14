const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(200).json([
        "PIPES",
        "PIPE_NIPPLES", 
        "SWAGE_NIPPLES",
        "PIPE_FITTINGS",
        "FORGED_FITTINGS",
        "FORGED_OLETS",
        "EN_FLANGES",
        "LINE_BLANKS",
        "MI_FITTINGS",
        "VALVES",
        "FASTENERS",
        "RING_GASKETS",
        "SW_GASKETS",
        "OTHERS"
    ]);
});

module.exports = router;
