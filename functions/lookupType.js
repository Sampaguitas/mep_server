let types = require('../constants/types');

module.exports = function lookupType(type) {
    const temp = types.find(element => element.name === type);;
    if (temp === undefined) {
        return {
            'lunar': 'FFF', 
            'name': type,
            'tags': [type],
            'pffType': 'OTHER'
        };
    } else {
        return {
            'lunar': temp.lunar,
            'name': temp.name,
            'tags': temp.tags,
            'pffType': temp.pffType,
        };
    }
}

// console.log(JSON.stringify(lookupType('PIPE SMLS')));