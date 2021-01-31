let tubings = [
    "PIPES",
    "PIPE_NIPPLES",
    "PIPE_FITTINGS",
    "SWAGE_NIPPLES",
    "FORGED_FITTINGS",
    "FORGED_OLETS",
    "VALVES",
    "FORGED_FLANGES",
    "EN_FLANGES",
    "LINE_BLANKS",
    "MI_FITTINGS",
    "SW_GASKETS"
]

module.exports = function lookupSize(size, pffType) {
    const found = require("../constants/sizes.json").find(element => element.tags.indexOf(size) > -1 && tubings.includes(pffType) ? element.pffTypes.includes("PIPES") : element.pffTypes.includes(pffType));
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