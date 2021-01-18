const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    
    const rate_from = decodeURI(req.query.rate_from);
    const rate_to = decodeURI(req.query.rate_to);
    
    require("../../functions/getRate")(rate_from, rate_to)
    .then(data => res.status(200).send({data: data}))
    .catch(message => res.status(400).send({ message: message }));

});

module.exports = router;