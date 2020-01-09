let generateSize = require('./generateSize');
let generateType = require('./generateType');

function generateDesc(sizeOne, sizeTwo, sizeThree, wallOne, wallTwo, type, grade, end){
    tempObject = {}
    tempObject.sizeOne = generateSize(sizeOne, type);
    tempObject.sizeTwo = generateSize(sizeTwo, type);
    tempObject.sizeThree = generateSize(sizeThree, type);
    // console.log()
    tempObject.type = generateType(tempObject.sizeOne.mm, type);
    // tempObject.grade = lookupGrade(grade);
    return tempObject;
}

console.log(JSON.stringify(generateDesc('1/2"', '1 1/4"', '36"', 'STD', '', 'WELDOL', 'A105', 'BW')));