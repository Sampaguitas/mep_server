module.exports = function lookupSize(size, pffType) {
    const found = require("../constants/sizes.json").find(element => element.tags.indexOf(size) > -1 && element.pffTypes.includes(pffType));
    if (found === undefined) {
        return {
            "lunar": "FFF", 
            "name": size,
            "tags": size ? [size] : [],
            "mm": ""
        };
    } else {
        return {
            "lunar": found.lunar,
            "name": size,
            "tags": found.tags,
            "mm": found.mm
        };
    }
}