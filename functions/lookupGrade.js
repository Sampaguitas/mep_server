let grades = require('../constants/grades');

module.exports = function lookupGrade(grade) {
    const found = grades.find(element => element.name === grade);
    // const temp = grade[item];
    if (found === undefined) {
        return {
            'lunar': 'FFF', 
            'name': item,
            'tags': [item],
            // 'steelType': 'OTHER',
            // 'pffTypes': ['OTHER']
        };
    } else {
        return {
            'lunar': found.lunar,
            'name': found.name,
            'tags': found.tags,
            // 'steelType': temp.steelType,
            // 'pffTypes': temp.pffTypes,
        };
    }
}

// console.log(JSON.stringify(lookupGrade('A105')));