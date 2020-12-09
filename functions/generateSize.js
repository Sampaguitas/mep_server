module.exports = function generateSize(size, type){
    switch(size) {
        case "3/8\"":
            if (type === "STUDB/NTS" || type ==="BOLT/NUT") {
                return {
                    "lunar": "079",
                    "name": "3/8\"",
                    "tags": ["3/8\""],
                    "mm": 9.5
                };
            } else {
                return {
                    "lunar": "0C0",
                    "name": "3/8\"",
                    "tags": ["3/8\"", "DN 10", "17.1 mm", "17.2 mm", "0.675 in"],
                    "mm": 17.1
                };
            }
        case "1/2\"":
            if (type === "STUDB/NTS" || type ==="BOLT/NUT") {
                return {
                    "lunar": "08F",
                    "name": "1/2\"",
                    "tags": ["1/2\""],
                    "mm": 12.7
                };
            } else {
                return {
                    "lunar": "0E4",
                    "name": "1/2\"",
                    "tags": ["1/2\"", "DN 15", "21.3 mm", "20 mm", "0.84 in"],
                    "mm": 21.3
                };
            }
        case "3/4\"":
            if (type === "STUDB/NTS" || type ==="BOLT/NUT") {
                return {
                    "lunar": "0D2",
                    "name": "3/4\"",
                    "tags": ["3/4\""],
                    "mm": 19.1
                };
            } else {
                return {
                    "lunar": "10F",
                    "name": "3/4\"",
                    "tags": ["3/4\"", "DN 20", "26.7 mm", "26.9 mm", "25 mm", "1.05 in"],
                    "mm": 26.7
                };
            }
        case "1\"":
            if (type === "STUDB/NTS" || type ==="BOLT/NUT") {
                return {
                    "lunar": "109",
                    "name": "1\"",
                    "tags": ["1\""],
                    "mm": 25.4
                };
            } else {
                return {
                    "lunar": "139",
                    "name": "1\"",
                    "tags": ["1\"", "DN 25", "33.4 mm", "33.7 mm", "30 mm", "1.315 in"],
                    "mm": 33.4,
                };
            }
        case "1 1/4\"":
            if (type === "STUDB/NTS" || type ==="BOLT/NUT") {
                return {
                    "lunar": "131",
                    "name": "1 1/4\"",
                    "tags": ["1 1/4\""],
                    "mm": 31.8
                };
            } else {
                return {
                    "lunar": "163",
                    "name": "1 1/4\"",
                    "tags": ["1 1/4\"", "DN 32", "42.2 mm", "42.4 mm", "38 mm", "1.66 in"],
                    "mm": 42.2
                };
            }
        case "1 1/2\"":
            if (type === "STUDB/NTS" || type ==="BOLT/NUT") {
                return {
                    "lunar": "152",
                    "name": "1 1/2\"",
                    "tags": ["1 1/2\""],
                    "mm": 38.1
                };
            } else {
                return {
                    "lunar": "176",
                    "name": "1 1/2\"",
                    "tags": ["1 1/2\"", "DN 40", "48.3 mm", "44.5 mm", "1.9 in"],
                    "mm": 48.3
                };
            }
        case "2\"":
            if (type === "STUDB/NTS" || type ==="BOLT/NUT") {
                return {
                    "lunar": "17A",
                    "name": "2\"",
                    "tags": ["2\""],
                    "mm": 50.8
                };
            } else {
                return {
                    "lunar": "18E",
                    "name": "2\"",
                    "tags": ["2\"", "DN 50", "60.3 mm", "57 mm", "2.375 in"],
                    "mm": 60.3
                }; 
            }
        case "2 1/2\"":
            if (type === "STUDB/NTS" || type ==="BOLT/NUT") {
                return {
                    "lunar": "195",
                    "name": "2 1/2\"",
                    "tags": ["2 1/2\""],
                    "mm": 63.5
                };
            } else {
                return {
                    "lunar": "1A1",
                    "name": "2 1/2\"",
                    "tags": ["2 1/2\"", "DN 65", "73 mm", "76.1 mm", "2.875 in"],
                    "mm": 73
                }; 
            }
        case "3\"":
            if (type === "STUDB/NTS" || type ==="BOLT/NUT") {
                return {
                    "lunar": "1A6",
                    "name": "3\"",
                    "tags": ["3\""],
                    "mm": 76.2
                };
            } else {
                return {
                    "lunar": "1B8",
                    "name": "3\"",
                    "tags": ["3\"", "DN 80", "88.9 mm", "3.5 in"],
                    "mm": 88.9
                }; 
            }
        default: return require("./lookupSize")(size);
    }
}
