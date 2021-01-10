const fetch = require('node-fetch');
const { JSDOM } = require("jsdom");
const _ = require('lodash');
const Currency = require('../models/Currency');

module.exports = function updateRates() {

    return new Promise(function(resolve) {
        
        let rates = [];
        let myPromises = [];
        let nRejected = 0;
        let nUpdated = 0;

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'text/html; charset=UTF-8' },
        };

        fetch(`https://www.xe.com/en/currencytables/?from=USD`, requestOptions)
        .then(res => res.text())
        .then(async body => {
            const { document } = (new JSDOM(body, {contentType: "text/html"})).window;
            const tbody = document.getElementById("historicalRateTbl").children[1];
            const dates = document.getElementsByClassName("historicalRateTable-date");
            if (!_.isUndefined(tbody) && !_.isUndefined(dates[0])) {
                for (var i = 0; i < tbody.children.length; i++) {
                    if (tbody.children[i].children.length === 4) {
                        rates.push({
                            "_id": tbody.children[i].children[0].querySelector("a").textContent,
                            "name": tbody.children[i].children[1].textContent,
                            "unitPerUsd": Number(tbody.children[i].children[2].textContent),
                            "usdPerUnit": Number(tbody.children[i].children[3].textContent),
                            "updatedAt": Date(dates[0].textContent)
                        });
                    }
                }
            }
            
            if (rates.length === 0) {
                resolve({message: `${nUpdated} currency updated, ${nRejected} currencies rejected.`});
            } else {
                rates.map(rate => myPromises.push(upsertRate(rate)));
                await Promise.all(myPromises).then(resMyPromises => {
                    resMyPromises.map(r => {
                        if (r.isRejected) {
                            nRejected++;
                        } else {
                            nUpdated++;
                        }
                    });
                    resolve({message: `${nUpdated} currency updated, ${nRejected} currencies rejected.`});
                }).catch( () => {
                    resolve({message: `${nUpdated} currency updated, ${nRejected} currencies rejected.`});
                });
            }
            
        });
    });  
}

function upsertRate(rate) {
    return new Promise(function(resolve) {
        Currency.findByIdAndUpdate(rate._id, rate, { new: true, upsert: true }, function(err, res) {
            if (!!err || !res) {
                resolve({ isRejected: true });
            } else {
                resolve({ isRejected: false });
            }
        })
    });
}