module.exports = function generatePrice(uom, price, currency){

    return new Promise(function(resolve) {
        if (!uom || !currency) {
            resolve({
                "isRejected": true,
            });
        } else {
            require("../functions/getRate")(currency, "EUR")
            .then(rate => {
                switch(uom) {
                    case "KG": resolve({
                        "isRejected": false,
                        "price": {
                            "metric": {
                                "value": price,
                                "toEur": price * rate,
                                "uom": "KG",
                            },
                            "imperial": {
                                "value": price * 2.204623,
                                "toEur": price * rate * 2.204623,
                                "uom": "LB"
                            },
                            "currency": currency,
                            "rate": rate,
                            "updatedAt": new Date()
                        }
                    });
                    break;
                    case "LB": resolve({
                        "isRejected": false,
                        "price": {
                            "metric": {
                                "value": price * 0.4535924,
                                "toEur": price * rate * 0.4535924,
                                "uom": "KG",
                            },
                            "imperial": {
                                "value": price,
                                "toEur": price * rate,
                                "uom": "LB"
                            },
                            "currency": currency,
                            "rate": rate,
                            "updatedAt": new Date()
                        }
                    });
                    break;
                    case "M": resolve({
                        "isRejected": false,
                        "price": {
                            "metric": {
                                "value": price,
                                "toEur": price * rate,
                                "uom": "M",
                            },
                            "imperial": {
                                "value": price * 3.28084,
                                "toEur": price * rate * 3.28084,
                                "uom": "FT"
                            },
                            "currency": currency,
                            "rate": rate,
                            "updatedAt": new Date()
                        }
                    });
                    break;
                    case "FT": resolve({
                        "isRejected": false,
                        "price": {
                            "metric": {
                                "value": price * 0.3048,
                                "toEur": price * rate * 0.3048,
                                "uom": "M",
                            },
                            "imperial": {
                                "value": price,
                                "toEur": price * rate,
                                "uom": "FT"
                            },
                            "currency": currency,
                            "rate": rate,
                            "updatedAt": new Date()
                        }
                    });
                    break;
                    //case "ST":
                    default: resolve({
                        "isRejected": false,
                        "price": {
                            "metric": {
                                "value": price,
                                "toEur": price * rate,
                                "uom": "ST",
                            },
                            "imperial": {
                                "value": price,
                                "toEur": price * rate,
                                "uom": "ST"
                            },
                            "currency": currency,
                            "rate": rate,
                            "updatedAt": new Date()
                        }
                    });
                }
            })
            .catch( () => resolve({
                "isRejected": true,
            })); 
        }
    });
}