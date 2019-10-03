const fault = require('../utilities/Errors'); //../utilities/Errors
const Po = require('../models/Po');
const moment = require('moment');
fs = require('fs');
const _ = require('lodash');

function getLine(projectId, unit, firstDate, lastDate, period, clPos, clPoRevs, lines) {
    return new Promise(
        function (resolve, reject) {
            Po.find({ projectId })
            .populate('subs')
            .exec(function(errPos, resPos) {
              if(errPos) {
                reject('an error has occured');
              } else if (!resPos) {
                reject('the project is empty');
              } else {
                let filteredLines = resPos.filterLines(clPos, clPoRevs);
                let allDates = filteredLines.returnAllDates();
                if (_.isEmpty(allDates)) {
                    reject('the project does not contain any dates');
                } else {
                  let earliest = firstDate || allDates.returnEarliest();
                  let latest = lastDate || allDates.returnLatest();
                  let dates = populateDates(earliest, latest, period);
                  Promise.all(promeses(filteredLines, dates, unit)).then( function(fields) {
                    resolve(fields);
                  });
                  // let array = [];
                  // dates.map(date => {
                  //   array.push({
                  //     date: date,
                  //     contractual: filteredLines.populateValue(date, 'po', 'vlContDelDate', 'qty', unit).toFixed(2),
                  //     rfiExp: filteredLines.populateValue(date, 'sub', 'rfiDateExp', 'rfiQty', unit).toFixed(2),
                  //     rfiAct: filteredLines.populateValue(date, 'sub', 'rfiDateAct', 'rfiQty', unit).toFixed(2),
                  //     released: filteredLines.populateValue(date, 'sub', 'inspRelDate', 'relQty', unit).toFixed(2),
                  //     shipExp: filteredLines.populateValue(date, 'sub', 'shipDateExp', 'shippedQty', unit).toFixed(2),
                  //     shipAct: filteredLines.populateValue(date, 'sub', 'shipDateAct', 'shippedQty', unit).toFixed(2),
                  //     delExp: filteredLines.populateValue(date, 'sub', 'vlDelDateExp', 'splitQty', unit).toFixed(2),
                  //     delAct: filteredLines.populateValue(date, 'sub', 'vlDelDateAct', 'splitQty', unit).toFixed(2)
                  //   });
                  // });
                  // resolve(array);
                }
              }
            });
        }
    );
}

function promeses(filteredLines, dates, unit) {
  return dates.map(async date => {
    // var obj = {
    //   contractual: await filteredLines.populateValue(date, 'po', 'vlContDelDate', 'qty', unit).toFixed(2),
    //   rfiExp: await filteredLines.populateValue(date, 'sub', 'rfiDateExp', 'rfiQty', unit).toFixed(2),
    //   rfiAct: await filteredLines.populateValue(date, 'sub', 'rfiDateAct', 'rfiQty', unit).toFixed(2),
    //   released: await filteredLines.populateValue(date, 'sub', 'inspRelDate', 'relQty', unit).toFixed(2),
    //   shipExp: await filteredLines.populateValue(date, 'sub', 'shipDateExp', 'shippedQty', unit).toFixed(2),
    //   shipAct: await filteredLines.populateValue(date, 'sub', 'shipDateAct', 'shippedQty', unit).toFixed(2),
    //   delExp: await filteredLines.populateValue(date, 'sub', 'vlDelDateExp', 'splitQty', unit).toFixed(2),
    //   delAct: delAct = await filteredLines.populateValue(date, 'sub', 'vlDelDateAct', 'splitQty', unit).toFixed(2),
    // };
    return {
      date: date,
      contractual: await filteredLines.populateValue(date, 'po', 'vlContDelDate', 'qty', unit).toFixed(2),
      rfiExp: await filteredLines.populateValue(date, 'sub', 'rfiDateExp', 'rfiQty', unit).toFixed(2),
      rfiAct: await filteredLines.populateValue(date, 'sub', 'rfiDateAct', 'rfiQty', unit).toFixed(2),
      released: await filteredLines.populateValue(date, 'sub', 'inspRelDate', 'relQty', unit).toFixed(2),
      shipExp: await filteredLines.populateValue(date, 'sub', 'shipDateExp', 'shippedQty', unit).toFixed(2),
      shipAct: await filteredLines.populateValue(date, 'sub', 'shipDateAct', 'shippedQty', unit).toFixed(2),
      delExp: await filteredLines.populateValue(date, 'sub', 'vlDelDateExp', 'splitQty', unit).toFixed(2),
      delAct: delAct = await filteredLines.populateValue(date, 'sub', 'vlDelDateAct', 'splitQty', unit).toFixed(2),      
    };
  });
}



function populateDates(earliest, latest, period) {
  let array = [];
  switch(period) {
    case 'day':
      for (var i = 0; moment(earliest).add(i, 'days') < moment(latest).add(1, 'days'); i++ ) {
        array.push(moment(earliest).add(i, 'days'));
      }
      break;
    case 'week':
        for (var i = 0; moment(earliest).add(i, 'weeks') < moment(latest).add(1, 'weeks'); i++ ) {
          array.push(moment(earliest).add(i, 'weeks'));
        }
      break;
    case 'fortnight':
        for (var i = 0; moment(earliest).add(i * 2, 'weeks') < moment(latest).add(2, 'weeks'); i++ ) {
          array.push(moment(earliest).add(i * 2, 'weeks'));
        }
      break;
    case 'month':
        for (var i = 0; moment(earliest).add(i, 'months') < moment(latest).add(1, 'months'); i++ ) {
          array.push(moment(earliest).add(i, 'months'));
        }
      break;
    case 'quarter':
        for (var i = 0; moment(earliest).add(i * 3, 'months') < moment(latest).add(3, 'months'); i++ ) {
          array.push(moment(earliest).add(i * 3, 'months'));
        }      
      break;
    default:
      for (var i = 0; moment(earliest).add(i, 'weeks') < moment(latest).add(1, 'weeks'); i++ ) {
        array.push(moment(earliest).add(i, 'weeks'));
      }
  }
  return array;
}

Array.prototype.filterLines = function(clPos, clPoRevs) {
  return this.filter(function(el) {
    if (_.isEmpty(clPos) && _.isEmpty(clPoRevs)) {
      return true;
    } else if (!_.isEmpty(clPos)) {
      return clPos.indexOf(el.clPo) !== -1;
    } else if (!_.isEmpty(clPoRevs)) {
      return clPoRevs.indexOf(el.clPoRev) !== -1;
    } else {
      return (clPos.indexOf(el.clPo) !== -1) && (clPoRevs.indexOf(el.clPoRev) !== -1);
    }
  })
}

Array.prototype.populateValue = function(date, collection, dateField, qtyField, unit) {
  return this.reduce(function (accumulator, currentValue){
    switch (unit) {
      case 'value':
        switch (collection) {
          case 'po':
            if (Date.parse(currentValue[dateField]) < Date.parse(date)) {
              accumulator += (currentValue[qtyField] * currentValue.unitPrice) || 0
            }
            break;
          default:
            currentValue.subs.map(sub => {
              if (Date.parse(sub[dateField]) < Date.parse(date)) {
                accumulator += (sub[qtyField] * currentValue.unitPrice) || 0
              }
            });
        } 
      default:
        switch (collection) {
          case 'po':
            if (Date.parse(currentValue[dateField]) < Date.parse(date)) {
              accumulator += currentValue[qtyField] || 0
            }
            break;
          default:
            currentValue.subs.map(sub => {
              if (Date.parse(sub[dateField]) < Date.parse(date)) {
                accumulator += sub[qtyField] || 0
              }
            });
        }
    }
    return accumulator;
  }, 0 );
}

Array.prototype.returnAllDates = function() {
  return this.reduce(function (accumulator, currentValue){
    currentValue.vlContDelDate && accumulator.push(currentValue.vlContDelDate);
    if (currentValue.subs) {
      currentValue.subs.map(sub => {
        sub.vlDelDateAct && accumulator.push(sub.vlDelDateAct);
        sub.rfiDateAct && accumulator.push(sub.rfiDateAct);
        sub.inspRelDate && accumulator.push(sub.inspRelDate);
        sub.rfsDateAct && accumulator.push(sub.rfsDateAct);
        sub.shipDateAct && accumulator.push(sub.shipDateAct);
      });
    }
    return accumulator;
  }, []);
}

Array.prototype.returnEarliest = function() {
  return this.reduce(function (accumulator, currentValue){
    return Date.parse(accumulator) > Date.parse(currentValue) ? currentValue : accumulator;
  });
}

Array.prototype.returnLatest = function() {
  return this.reduce(function (accumulator, currentValue){
    return Date.parse(accumulator) > Date.parse(currentValue) ? accumulator : currentValue;
  });
}

module.exports = {
  getLine
};