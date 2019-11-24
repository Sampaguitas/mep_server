const express = require('express');
const router = express.Router();
const Item = require('../../models/Item');
const fault = require('../../utilities/Errors');
const moment = require('moment');

router.post('/', (req, res) => {
    Item.findOne({
        $and: [ 
            {
                opcoRef: req.body.opcoRef 
            }, 
            {
                supName: req.body.supName
            },
            {
                supRef: req.body.supRef 
            },
            {
                line: req.body.line
            }
        ] 
    })
    .then(item => {
        console.log('toto:', item._id);
        if (item) {
            //if Item exists: update
            Item.findByIdAndUpdate(item._id, { 
                $set: {
                    opco: req.body.opco,
                    opcoRef: req.body.opcoRef,
                    line: req.body.line,
                    lunar: req.body.lunar,
                    qty: req.body.qty,
                    desc: req.body.desc,
                    price: req.body.price,
                    currency: req.body.currency,
                    supName: req.body.supName,
                    leadTime: req.body.leadTime,
                    incoterm: req.body.incoterm,
                    delPoint: req.body.delPoint,
                    supRef: req.body.supRef,
                    date: moment(req.body.date, 'DD/MM/YYYY'),
                    validity: req.body.validity
                }
            }, function(err, doc) {
                    if (err) {
                        return res.status(400).json({
                            message: "Item could not be updated"
                            //"0105": "Item could not be updated",
                        });
                    } else if (doc) {
                        return res.status(200).json({
                            message: "Item successfully updated"
                            //"0104": "Item successfully updated",
                        });
                    }
            });
        } else {
            //if Item does not exist: create
            const newItem = new Item({
                opco: req.body.opco,
                opcoRef: req.body.opcoRef,
                line: req.body.line,
                lunar: req.body.lunar,
                qty: req.body.qty,
                desc: req.body.desc,
                price: req.body.price,
                currency: req.body.currency,
                supName: req.body.supName,
                leadTime: req.body.leadTime,
                incoterm: req.body.incoterm,
                delPoint: req.body.delPoint,
                supRef: req.body.supRef,
                date: moment(req.body.date, 'DD/MM/YYYY'),
                validity: req.body.validity
            });

            newItem
            .save()
            .then( () => res.status(200).json({
                message: "Item successfully created"
                //"0102": "Item successfully created",
            }))
            .catch( (error) => res.status(400).json({
                message: "Item could not be created"
                //"0103": "Item could not be created",
            }));
        }

    });
});

module.exports = router;