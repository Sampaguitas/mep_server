const express = require('express');
const router = express.Router();
const {returnType, upsertOne, upsertMany} = require('../../middleware/upsert')

router.post('/', (req, res) => {
    switch (returnType(req.body)){
        case 'object':
                upsertOne(req.body)
                .then( oneSuccess => res.status(200).json({message: oneSuccess}))
                .catch( oneErr => res.status(400).json({message: oneErr}));
            break;
        case 'array':
                upsertMany(req.body)
                .then( manySuccess => res.status(200).json({message: manySuccess}))
                .catch( manyErr => res.status(400).json({message: manyErr}));
            break;
        default: 
            res.status(400).json({message: 'wrong format'})
    }
});

module.exports = router;