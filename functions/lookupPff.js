module.exports = function lookupPff(type) {
    const found = require('../constants/types.json').find(element => element.name === type);
    if (found === undefined) {
        return 'OTHER';
    } else {
        return found.pffType;
    }
}