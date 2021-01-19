const express = require("express");
const router = express.Router();
const _ = require("lodash");

router.get('/', (req, res) => {
    console.log("toto");
    const processId = decodeURI(req.query.processId);
    console.log("req.query:", req.query);
    require('../../models/Process').findById(processId, function(err, process) {
        if (!!err) {
            console.log(err);
            res.status(400).json({ "message": "Could not retreive process status"});
        } else {
            console.log(process);
            res.status(200).json({ "process": process });
        };
    });
});

module.exports = router;