
// let constants = 
let ends = require('../constants/ends');

function lookupEnd(end) {
    const found = ends.find(element => element.name === end);
    if (found === undefined) {
        return {
            'lunar': 'FF', 
            'name': end,
        };
    } else {
        return {
            'lunar': found.lunar,
            'name': found.name,
        };
    }     
}