function generateDesc(sizeOne, sizeTwo, sizeThree, wallOne, wallTwo, type, grade, end){
    let tempObject = {}
    tempObject.sizeOne = require("./generateSize")(sizeOne, type);
    tempObject.sizeTwo = require("./generateSize")(sizeTwo, type);
    tempObject.sizeThree = require("./generateSize")(sizeThree, type);
    tempObject.wallOne = require("./generateWall")(tempObject.sizeOne.mm, wallOne);
    tempObject.wallTwo = require("./generateWall")(tempObject.sizeTwo.mm, !!wallTwo ? wallTwo : !!sizeTwo ? wallOne : "");
    tempObject.wallThree = require("./generateWall")(tempObject.sizeThree.mm, wallOne);
    tempObject.type = require("./generateType")(tempObject.sizeOne.mm, type);
    tempObject.grade = require("./lookupGrade")(grade);
    tempObject.end = require("./lookupEnd")(tempObject.type, end);

    if (tempObject.type.pffType === "FORGED_OLETS") {
        
        let sizeBefore = [[tempObject.sizeOne, tempObject.wallOne], [tempObject.sizeTwo, tempObject.wallTwo], [tempObject.sizeThree, tempObject.wallThree]]
        let sizeSorted = sizeBefore.sort(function(a,b) {
            if (a[0].mm === '') {
                return a[0].mm + b[0].mm
            } else {
                return a[0].mm - b[0].mm
            }
        });

        tempObject.sizeOne = sizeSorted[0][0];
        tempObject.sizeTwo = sizeSorted[1][0].mm === "" ? tempObject.sizeOne : sizeSorted[1][0];
        tempObject.sizeThree = sizeSorted[2][0].mm === "" ? tempObject.sizeTwo : sizeSorted[2][0];

        tempObject.wallOne = sizeSorted[0][1];
        tempObject.wallTwo = {"lunar":"FFF","name":"","tags":[],"mm":"" }
    } else {

        let sizeBefore = [[tempObject.sizeOne, tempObject.wallOne], [tempObject.sizeTwo, tempObject.wallTwo], [tempObject.sizeThree, tempObject.wallThree]]
        let sizeSorted = sizeBefore.sort(function(a,b) {
            return a[0].mm + b[0].mm
        });

        tempObject.sizeOne = sizeSorted[0][0];
        tempObject.sizeTwo = sizeSorted[1][0];
        tempObject.sizeThree = sizeSorted[2][0];

        tempObject.wallOne = sizeSorted[0][1];
        tempObject.wallTwo = sizeSorted[1][1];
    }
    delete tempObject.wallThree //remove the temp wall

    resObject = {
        "desc":{
            "lunar": Object.keys(tempObject).reduce(function (acc, cur) {
                switch(cur) {
                    case "end": return `${acc}FFFFF${tempObject[cur].lunar}FFFFFFFF1`;
                    default: return `${acc}${tempObject[cur].lunar}`;
                }
            }, ""),
            "name": Object.keys(tempObject).reduce(function (acc, cur) {
                switch(cur) {
                    case "sizeOne":
                        if (tempObject[cur].name != "") {
                            acc = tempObject[cur].name;
                        }
                        break;
                    case "sizeTwo": 
                        if (tempObject[cur].name != "") {
                            acc = `${acc} X ${tempObject[cur].name}`;
                        }
                        break;
                    case "sizeThree":
                        if (tempObject[cur].name != "") {
                            acc = tempObject.type.pffType === "FORGED_OLETS" ? `${acc} - ${tempObject[cur].name}` : `${acc} X ${tempObject[cur].name}`;
                        }
                        break;
                    case "wallTwo":
                        if (tempObject[cur].name != "") {
                            acc = `${acc} X ${tempObject[cur].name}`;
                        }
                        break;
                    default:
                        if (tempObject[cur].name != "") {
                            acc = `${acc} ${tempObject[cur].name}`;
                        }
                }
                return acc;
            },""),
            "tags": {
                "sizeOne": tempObject.sizeOne.tags,
                "sizeTwo": tempObject.sizeTwo.tags,
                "sizeThree": tempObject.sizeThree.tags,
                "wallOne": tempObject.wallOne.tags,
                "wallTwo": tempObject.wallTwo.tags,
                "type": tempObject.type.tags,
                "grade": tempObject.grade.tags,
                "end": !!tempObject.end.name ? [tempObject.end.name] : [],
            }
        }
        
    }
    
    return resObject;
}

console.log(generateDesc("36\"", "3\"", "1/2\"", "STD", "", "WELDOL", "A105", ""));