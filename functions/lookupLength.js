module.exports = function lookupLength(length) {
    const found = require("../constants/lengths.json").find(element => element.name === length);
    if (found === undefined) {
        return {
            "lunar": "FFF", 
            "name": length,
        };
    } else {
        return {
            "lunar": found.lunar,
            "name": length,
        };
    }
}