let sizes = require('../constants/sizes');

module.exports = function lookupSize(size) {
    const found = sizes.find(element => element.tags.indexOf(size) > -1);
    if (found === undefined) {
        return {
            'lunar': 'FFF', 
            'nps': item,
            'dn': item,
            'mm': '',
            'in': '',
            'pffTypes': []
        };
    } else {
        return {
            'lunar': found.lunar, 
            'nps': found.nps,
            'dn': found.dn,
            'mm': found.mm,
            'in': found.in,
            'tags': found.tags,
            'pffTypes': found.pffTypes
        };
    }
}

// console.log(JSON.stringify(lookupSize('2"')));