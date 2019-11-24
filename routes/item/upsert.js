const express = require('express');
const router = express.Router();
const Item = require('../../models/item');
const fault = require('../../utilities/errors');

router.post('/', (req, res) => {
    Item.findOne({
        $and: [ 
            {
                opcoRef: req.body.opcoRef 
            }, 
            {
                sup_name: req.body.sup_name
            },
            {
                sup_ref: req.body.sup_ref 
            },
            {
                line: req.body.line
            }
        ] 
    })
    .then(item => {
        if (item) {
            //if Item exists: update
            Item.findByIdAndUpdate(item.id, { 
                $set: {
                    opco: req.body.opco,
                    opcoRef: req.body.opcoRef,
                    line: req.body.line,
                    lunar: req.body.lunar,
                    qty: req.body.qty,
                    desc: req.body.desc,
                    price: req.body.price,
                    currency: req.body.currency,
                    sup_name: req.body.sup_name,
                    lead_time: req.body.lead_time,
                    incoterm: req.body.incoterm,
                    del_point: req.body.del_point,
                    sup_ref: req.body.sup_ref,
                    date: req.body.date,
                    validity: req.body.validity
                }, function(err, doc) {
                    if (!doc) {
                        return res.status(400).json({
                            message: fault(1001).message
                            //"1001": "Could not update Item",
                        });
                    }
                    else {
                        return res.status(200).json({
                            message: fault(1002).message
                            //"1002": "Item successfully updated",
                        });
                    }
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
                sup_name: req.body.sup_name,
                lead_time: req.body.lead_time,
                incoterm: req.body.incoterm,
                del_point: req.body.del_point,
                sup_ref: req.body.sup_ref,
                date: req.body.date,
                validity: req.body.validity
            });

            newItem
            .save()
            .then( () => res.status(200).json({
                message: fault(11111).message
                //"11111": "Item successfully created"
            }))
            .catch( () => res.status(400).json({
                message: fault(1000).message
                //"1000": "Item could not be created"
            }));
        }

    });
});