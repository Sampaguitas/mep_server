const express = require('express');
const router = express.Router();
const Project = require('../../models/Project');
const fault = require('../../utilities/Errors')


router.get('/', (req, res) => {
    var data = {};
    Object.keys(req.body).forEach(function (k) {
        data[k] = req.body[k];
    });

    Project.find(data).populate("customer")
    .exec(function (err, project) {
        if (!project) {
            return res.status(400).json({
                res_no: 504,
                res_message: fault(504).message
                //"504": "No Project match",
            });
        }
        else {
            return res.json(project);
        }
    });
});


module.exports = router;