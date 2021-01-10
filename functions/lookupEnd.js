module.exports = function lookupEnd(type, end) {
    if (type.pffType === "PIPE_FITTINGS") {
        return {
            "lunar": "01",
            "name": "BW",
        }
    } else if (type.pffType === "FORGED_OLETS") {
        switch(type.name) {
            case "WELDOL":
                return {
                    "lunar": "01",
                    "name": "BW"
                }
            case "SOCKOL 3000":
            case "SOCKOL 6000":
                return {
                    "lunar": "11",
                    "name": "SW"
                }
            case "THREADOL 3000":
            case "THREADOL 6000":
                return {
                    "lunar": "17",
                    "name": "NPT"
                }
            default:
                const found = require("../constants/ends.json").find(element => element.name === end);
                if (found === undefined) {
                    return {
                        "lunar": "FF", 
                        "name": end,
                    };
                } else {
                    return {
                        "lunar": found.lunar,
                        "name": end,
                    };
                }
        }
    } else {
        const found = require("../constants/ends.json").find(element => element.name === end);
        if (found === undefined) {
            return {
                "lunar": "FF", 
                "name": end,
            };
        } else {
            return {
                "lunar": found.lunar,
                "name": end,
            };
        }
    }
}