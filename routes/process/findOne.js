const express = require("express");
const router = express.Router();
const _ = require("lodash");

router.get('/', (req, res) => {
    const processId = decodeURI(req.query.processId);
    console.log("processId:", processId);
    require('../../models/Process').findById(processId, function(err, process) {
        if (!!err) {
            console.log(err);
            res.status(400).json({ "message": "could not retreive progress."});
        } else {
            console.log("process:", process);
            res.status(200).json({ "process": process });
        };
    });
});

module.exports = router;