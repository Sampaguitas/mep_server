let lookupSize = require('./lookupSize');

module.exports = function generateSize(size, type){
    switch(size) {
        case '3/8"':
            if (type === 'STUDB/NTS' || type ==='BOLT/NUT') {
                return {
                    'lunar': '079',
                    'nps': '3/8"',
                    'dn': '3/8"',
                    'mm': 9.5,
                    'in': 0.375,
                    'tags': ['3/8"'],
                    'pffTypes': ['FASTENERS']
                };
            } else {
                return {
                    'lunar': '0C0',
                    'nps': '3/8"',
                    'dn': 'DN 10',
                    'mm': 17.1,
                    'in': 0.675,
                    'tags': ['3/8"', 'DN 10', '17.1 mm', '0.675 in'],
                    'pffTypes:': [
                        'PIPES', 
                        'PIPE_NIPPLES', 
                        'PIPE_FITTINGS', 
                        'FORGED_FITTINGS', 
                        'FORGED_OLETS', 
                        'VALVES', 
                        'FORGED_FLANGES', 
                        'EN_FLANGES', 
                        'LINE_BLANKS', 
                        'MI_FITTINGS'
                    ]
                };
            }
            break;
        case '1/2"':
            if (type === 'STUDB/NTS' || type ==='BOLT/NUT') {
                return {
                    'lunar': '08F',
                    'nps': '1/2"',
                    'dn': '1/2"',
                    'mm': 12.7,
                    'in': 0.5,
                    'tags': ['1/2"'],
                    'pffTypes': ['FASTENERS']
                };
            } else {
                return {
                    'lunar': '0E4',
                    'nps': '1/2"',
                    'dn': 'DN 15',
                    'mm': 21.3,
                    'in': 0.84,
                    'tags': ['1/2"', 'DN 15', '21.3 mm', '0.84 in'],
                    'pffTypes:': [
                        'PIPES', 
                        'PIPE_NIPPLES', 
                        'PIPE_FITTINGS', 
                        'FORGED_FITTINGS', 
                        'FORGED_OLETS', 
                        'VALVES', 
                        'FORGED_FLANGES', 
                        'EN_FLANGES', 
                        'LINE_BLANKS', 
                        'MI_FITTINGS'
                    ]
                };
            }
            break;
        case '3/4"':
            if (type === 'STUDB/NTS' || type ==='BOLT/NUT') {
                return {
                    'lunar': '0D2',
                    'nps': '3/4"',
                    'dn': '3/4"',
                    'mm': 19.1,
                    'in': 0.75,
                    'tags': ['3/4"'],
                    'pffTypes': ['FASTENERS']
                };
            } else {
                return {
                    'lunar': '10F',
                    'nps': '3/4"',
                    'dn': 'DN 20',
                    'mm': 26.7,
                    'in': 1.05,
                    'tags': ['3/4"', 'DN 20', '26.7 mm', '1.05 in'],
                    'pffTypes:': [
                        'PIPES', 
                        'PIPE_NIPPLES', 
                        'PIPE_FITTINGS', 
                        'FORGED_FITTINGS', 
                        'FORGED_OLETS', 
                        'VALVES', 
                        'FORGED_FLANGES', 
                        'EN_FLANGES', 
                        'LINE_BLANKS', 
                        'MI_FITTINGS'
                    ]
                };
            }
            break;
        case '1"':
            if (type === 'STUDB/NTS' || type ==='BOLT/NUT') {
                return {
                    'nps': '1"',
                    'dn': '1"',
                    'mm': 25.4,
                    'in': 1,
                    'lunar': '109',
                    'tags': ['1"'],
                    'pffTypes': ['FASTENERS']
                };
            } else {
                return {
                    'lunar': '139',
                    'nps': '1"',
                    'dn': 'DN 25',
                    'mm': 33.4,
                    'in': 1.315,
                    'tags': ['1"', 'DN 25', '33.4 mm', '1.315 in'],
                    'pffTypes:': [
                        'PIPES', 
                        'PIPE_NIPPLES', 
                        'PIPE_FITTINGS', 
                        'FORGED_FITTINGS', 
                        'FORGED_OLETS', 
                        'VALVES', 
                        'FORGED_FLANGES', 
                        'EN_FLANGES', 
                        'LINE_BLANKS', 
                        'MI_FITTINGS'
                    ]
                };
            }
            break;
        case '1 1/4"':
            if (type === 'STUDB/NTS' || type ==='BOLT/NUT') {
                return {
                    'lunar': '131',
                    'nps': '1 1/4"',
                    'dn': '1 1/4"',
                    'mm': 31.8,
                    'in': 1.25,
                    'tags': ['1 1/4"'],
                    'pffTypes': ['FASTENERS']
                };
            } else {
                return {
                    'lunar': '163',
                    'nps': '1 1/4"',
                    'dn': 'DN 32',
                    'mm': 42.2,
                    'in': 1.66,
                    'tags': ['1 1/4"', 'DN 32', '42.2 mm', '1.66 in'],
                    'pffTypes:': [
                        'PIPES', 
                        'PIPE_NIPPLES', 
                        'PIPE_FITTINGS', 
                        'FORGED_FITTINGS', 
                        'FORGED_OLETS', 
                        'VALVES', 
                        'FORGED_FLANGES', 
                        'EN_FLANGES', 
                        'LINE_BLANKS', 
                        'MI_FITTINGS'
                    ]
                }; 
            }
            break;
        case '1 1/2"':
            if (type === 'STUDB/NTS' || type ==='BOLT/NUT') {
                return {
                    'lunar': '152',
                    'nps': '1 1/2"',
                    'dn': '1 1/2"',
                    'mm': 38.1,
                    'in': 1.5,
                    'tags': ['1 1/2"'],
                    'pffTypes': ['FASTENERS']
                };
            } else {
                return {
                    'lunar': '176',
                    'nps': '1 1/2"',
                    'dn': 'DN 40',
                    'mm': 48.3,
                    'in': 1.9,
                    'tags': ['1 1/2"', 'DN 40', '48.3 mm', '1.9 in'],
                    'pffTypes:': [
                        'PIPES', 
                        'PIPE_NIPPLES', 
                        'PIPE_FITTINGS', 
                        'FORGED_FITTINGS', 
                        'FORGED_OLETS', 
                        'VALVES', 
                        'FORGED_FLANGES', 
                        'EN_FLANGES', 
                        'LINE_BLANKS', 
                        'MI_FITTINGS'
                    ]
                }; 
            }
            break;
        case '2"':
            if (type === 'STUDB/NTS' || type ==='BOLT/NUT') {
                return {
                    'lunar': '17A',
                    'nps': '2"',
                    'dn': '2"',
                    'mm': 50.8,
                    'in': 2,
                    'tags': ['2"'],
                    'pffTypes': ['FASTENERS']
                };
            } else {
                return {
                    'lunar': '18E',
                    'nps': '2"',
                    'dn': 'DN 50',
                    'mm': 60.3,
                    'in': 2.375,
                    'tags': ['2"', 'DN 50', '60.3 mm', '2.375 in'],
                    'pffTypes:': [
                        'PIPES', 
                        'PIPE_NIPPLES', 
                        'PIPE_FITTINGS', 
                        'FORGED_FITTINGS', 
                        'FORGED_OLETS', 
                        'VALVES', 
                        'FORGED_FLANGES', 
                        'EN_FLANGES', 
                        'LINE_BLANKS', 
                        'MI_FITTINGS'
                    ]
                }; 
            }
            break;
        case '2 1/2"':
            if (type === 'STUDB/NTS' || type ==='BOLT/NUT') {
                return {
                    'lunar': '195',
                    'nps': '2 1/2"',
                    'dn': '2 1/2"',
                    'mm': 63.5,
                    'in': 2.5,
                    'tags': ['2 1/2"'],
                    'pffTypes': ['FASTENERS']
                };
            } else {
                return {
                    'lunar': '1A1',
                    'nps': '2 1/2"',
                    'dn': 'DN 65',
                    'mm': 73,
                    'in': 2.875,
                    'tags': ['2 1/2"', 'DN 65', '73 mm', '2.875 in'],
                    'pffTypes:': [
                        'PIPES', 
                        'PIPE_NIPPLES', 
                        'PIPE_FITTINGS', 
                        'FORGED_FITTINGS', 
                        'FORGED_OLETS', 
                        'VALVES', 
                        'FORGED_FLANGES', 
                        'EN_FLANGES', 
                        'LINE_BLANKS', 
                        'MI_FITTINGS'
                    ]
                }; 
            }
            break;
        case '3"':
            if (type === 'STUDB/NTS' || type ==='BOLT/NUT') {
                return {
                    'lunar': '1A6',
                    'nps': '3"',
                    'dn': '3"',
                    'mm': 76.2,
                    'in': 3,
                    'tags': ['3"'],
                    'pffTypes': ['FASTENERS']
                };
            } else {
                return {
                    'lunar': '1B8',
                    'nps': '3"',
                    'dn': 'DN 80',
                    'mm': 88.9,
                    'in': 3.5,
                    'tags': ['3"', 'DN 80', '88.9 mm', '3.5 in'],
                    'pffTypes:': [
                        'PIPES', 
                        'PIPE_NIPPLES', 
                        'PIPE_FITTINGS', 
                        'FORGED_FITTINGS', 
                        'FORGED_OLETS', 
                        'VALVES', 
                        'FORGED_FLANGES', 
                        'EN_FLANGES', 
                        'LINE_BLANKS', 
                        'MI_FITTINGS'
                    ]
                }; 
            }
            break
        default: return lookupSize(size);
    }
}

// console.log(JSON.stringify(generateSize('2"', 'STUDB/NTS')));
