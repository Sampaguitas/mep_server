module.exports = function lookupGrade(grade) {
    const found = require('../constants/grades.json').find(element => element.name === grade);
    if (found === undefined) {
        return {
            'lunar': 'FFF', 
            'name': grade,
            'tags': grade ? [grade] : [],
            'steelType': 'OTHER',
        };
    } else {
        return {
            'lunar': found.lunar,
            'name': grade,
            'tags': found.tags,
            'steelType': found.steelType,
        };
    }
}