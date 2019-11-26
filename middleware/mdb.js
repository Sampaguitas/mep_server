const Item = require('../models/Item');
const _ = require('lodash');
const moment = require('moment');

function returnType(something) {
    if (_.isNumber(something)) {
        return 'number'
    } else if (_.isString(something)) {
        return 'string'
    } else if (_.isBoolean(something)) {
        return 'boolean'
    } else if (_.isArray(something)) {
        return 'array';
    } else if (_.isObject(something)) {
        return 'object'
    } else if (_.isNaN(something)) {
        return 'undefined'
    }
}

function upsertOne(obj) {
    return new Promise(
        function (resolve, reject) {
            Item.findOne({
                $and: [ 
                    {
                        opcoRef: obj.opcoRef 
                    }, 
                    {
                        supName: obj.supName
                    },
                    {
                        supRef: obj.supRef 
                    },
                    {
                        line: obj.line
                    }
                ] 
            })
            .then(item => {
                if (item) {
                    //if Item exists: update
                    Item.findByIdAndUpdate(item._id, { 
                        $set: {
                            opco: obj.opco,
                            opcoRef: obj.opcoRef,
                            line: obj.line,
                            lunar: obj.lunar,
                            qty: obj.qty,
                            desc: obj.desc,
                            price: obj.price,
                            currency: obj.currency,
                            supName: obj.supName,
                            leadTime: obj.leadTime,
                            incoterm: obj.incoterm,
                            delPoint: obj.delPoint,
                            supRef: obj.supRef,
                            date: moment(obj.date, 'YYYY-MM-DD HH:mm:ss'),
                            validity: obj.validity
                        }
                    }, function(err, doc) {
                            if (err) {
                                reject("Item could not be updated")
                            } else if (doc) {
                                resolve("Item successfully updated")
                            }
                    });
                } else {
                    //if Item does not exist: create
                    const newItem = new Item({
                        opco: obj.opco,
                        opcoRef: obj.opcoRef,
                        line: obj.line,
                        lunar: obj.lunar,
                        qty: obj.qty,
                        desc: obj.desc,
                        price: obj.price,
                        currency: obj.currency,
                        supName: obj.supName,
                        leadTime: obj.leadTime,
                        incoterm: obj.incoterm,
                        delPoint: obj.delPoint,
                        supRef: obj.supRef,
                        date: moment(obj.date, 'YYYY-MM-DD HH:mm:ss'),
                        validity: obj.validity
                    });
        
                    newItem
                    .save()
                    .then( () => resolve("Item successfully created"))
                    .catch( () => reject("Item could not be created"));
                }
            });
        }
    )
}

function upsertMany(arr) {
    return new Promise(
        function (resolve, reject) {
            if (_.isEmpty(arr)){
                reject("Empty request");
            } else {
                Promise.all(
                    arr.map(async obj => {
                        await new Promise(
                            async function (resolve, reject) {
                                await upsertOne(obj)
                                .then( () => resolve('success'))
                                .catch( () => reject('failiure'))
                            }
                        )
                    })
                ).then( () => resolve('done'));
            }
        }
    );
}

module.exports = {
    returnType,
    upsertOne,
    upsertMany
};