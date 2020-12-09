module.exports = function lookupType(type) {
    const found = require('../constants/types').find(element => element.name === type);;
    if (found === undefined) {
        return {
            'lunar': 'FFF',
            'name': type,
            'tags': type ? [type] : [],
            'pffType': 'OTHER'
        };
    } else {
        return {
            'lunar': found.lunar,
            'name': found.name,
            'tags': found.tags,
            'pffType': found.pffType,
        };
    }
}