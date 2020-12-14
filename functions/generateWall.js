module.exports = function lookupType(sizeId, wall) {
    const found = require('../constants/walls.json').find(element => element.sizeId === sizeId && element.tags.indexOf(wall) > -1);;
    if (found === undefined) {
        return {
            "lunar": "FFF",
            "name": wall,
            "tags": wall ? [wall] : [],
            "mm": ""
        };
    } else {
        return {
            "lunar": found.lunar,
            "name": wall,
            "tags": found.tags,
            "mm": found.mm
        };
    }
}