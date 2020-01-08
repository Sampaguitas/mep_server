const sizes = [
    {
        'nps': '1/8"',
        'dn': 'DN 6',
        'mm': 10.3,
        'in': 0.405,
        'lunar': '082',
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
    },
    {
        'nps': '1/4"',
        'dn': 'DN 8',
        'mm': 13.7,
        'in': 0.54,
        'lunar': '09A',
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
    },
    {
        'nps': '3/8"',
        'dn': 'DN 10',
        'mm': 17.1,
        'in': 0.675,
        'lunar': '0C0',
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
    },
    {
        'nps': '1/2"',
        'dn': 'DN 15',
        'mm': 21.3,
        'in': 0.84,
        'lunar': '0E4',
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
    },
    {
        'nps': '3/4"',
        'dn': 'DN 20',
        'mm': 26.7,
        'in': 1.05,
        'lunar': '10F',
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
    },
    {
        'nps': '1"',
        'dn': 'DN 25',
        'mm': 33.4,
        'in': 1.315,
        'lunar': '139',
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
    },
    {
        'nps': '1 1/4"',
        'dn': 'DN 32',
        'mm': 42.2,
        'in': 1.66,
        'lunar': '163',
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
    },
    {
        'nps': '1 1/2"',
        'dn': 'DN 40',
        'mm': 48.3,
        'in': 1.9,
        'lunar': '176',
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
    },
    {
        'nps': '2"',
        'dn': 'DN 50',
        'mm': 60.3,
        'in': 2.375,
        'lunar': '18E',
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
    },
    {
        'nps': '2 1/2"',
        'dn': 'DN 65',
        'mm': 73,
        'in': 2.875,
        'lunar': '1A1',
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
    },
    {
        'nps': '3"',
        'dn': 'DN 80',
        'mm': 88.9,
        'in': 3.5,
        'lunar': '1B8',
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
    },
    {
        'nps': '3 1/2"',
        'dn': 'DN 90',
        'mm': 101.6,
        'in': 4,
        'lunar': '1C8',
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
    },
    {
        'nps': '4"',
        'dn': 'DN 100',
        'mm': 114.3,
        'in': 4.5,
        'lunar': '1D4',
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
    },
    {
        'nps': '5"',
        'dn': 'DN 125',
        'mm': 141.3,
        'in': 5.563,
        'lunar': '1F0',
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
    },
    {
        'nps': '6"',
        'dn': 'DN 150',
        'mm': 168.3,
        'in': 6.625,
        'lunar': '204',
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
    },
    {
        'nps': '8"',
        'dn': 'DN 200',
        'mm': 219.1,
        'in': 8.625,
        'lunar': '222',
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
    },
    {
        'nps': '10"',
        'dn': 'DN 250',
        'mm': 273,
        'in': 10.75,
        'lunar': '23E',
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
    },
    {
        'nps': '12"',
        'dn': 'DN 300',
        'mm': 323.9,
        'in': 12.75,
        'lunar': '24A',
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
    },
    {
        'nps': '14"',
        'dn': 'DN 350',
        'mm': 355.6,
        'in': 14,
        'lunar': '250',
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
    },
    {
        'nps': '16"',
        'dn': 'DN 400',
        'mm': 406.4,
        'in': 16,
        'lunar': '257',
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
    },
    {
        'nps': '18"',
        'dn': 'DN 450',
        'mm': 457,
        'in': 18,
        'lunar': '25C',
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
    },
    {
        'nps': '20"',
        'dn': 'DN 500',
        'mm': 508,
        'in': 20,
        'lunar': '261',
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
    },
    {
        'nps': '22"',
        'dn': 'DN 550',
        'mm': 559,
        'in': 22,
        'lunar': '265',
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
    },
    {
        'nps': '24"',
        'dn': 'DN 600',
        'mm': 610,
        'in': 24,
        'lunar': '268',
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
    },
    {
        'nps': '26"',
        'dn': 'DN 650',
        'mm': 660,
        'in': 26,
        'lunar': '26B',
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
    },
    {
        'nps': '28"',
        'dn': 'DN 700',
        'mm': 711,
        'in': 28,
        'lunar': '26E',
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
    },
    {
        'nps': '30"',
        'dn': 'DN 750',
        'mm': 762,
        'in': 30,
        'lunar': '26F',
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
    },
    {
        'nps': '32"',
        'dn': 'DN 800',
        'mm': 813,
        'in': 32,
        'lunar': '271',
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
    },
    {
        'nps': '34"',
        'dn': 'DN 850',
        'mm': 864,
        'in': 34,
        'lunar': '55B',
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
    },
    {
        'nps': '36"',
        'dn': 'DN 900',
        'mm': 914,
        'in': 36,
        'lunar': '275',
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
    },
    {
        'nps': '38"',
        'dn': 'DN 950',
        'mm': 965,
        'in': 38,
        'lunar': '557',
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
    },
    {
        'nps': '40"',
        'dn': 'DN 1000',
        'mm': 1016,
        'in': 40,
        'lunar': '278',
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
    },
    {
        'nps': '42"',
        'dn': 'DN 1050',
        'mm': 1067,
        'in': 42,
        'lunar': '279',
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
    },
    {
        'nps': '44"',
        'dn': 'DN 1100',
        'mm': 1118,
        'in': 44,
        'lunar': '27B',
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
    },
    {
        'nps': '46"',
        'dn': 'DN 1150',
        'mm': 1168,
        'in': 46,
        'lunar': '560',
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
    },
    {
        'nps': '48"',
        'dn': 'DN 1200',
        'mm': 1219,
        'in': 48,
        'lunar': '27E',
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
    },
    {
        'nps': '52"',
        'dn': 'DN 1300',
        'mm': 1321,
        'in': 52,
        'lunar': '55A',
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
    },
    {
        'nps': '56"',
        'dn': 'DN 1400',
        'mm': 1422,
        'in': 56,
        'lunar': '2E9',
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
    },
    {
        'nps': '60"',
        'dn': 'DN 1500',
        'mm': 1524,
        'in': 60,
        'lunar': '282',
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
    },
    {
        'nps': '64"',
        'dn': 'DN 1600',
        'mm': 1626,
        'in': 64,
        'lunar': '558',
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
    },
    {
        'nps': '68"',
        'dn': 'DN 1700',
        'mm': 1727,
        'in': 68,
        'lunar': '55C',
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
    },
    {
        'nps': '72"',
        'dn': 'DN 1800',
        'mm': 1829,
        'in': 72,
        'lunar': '565',
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
    },
    {
        'nps': '76"',
        'dn': 'DN 1900',
        'mm': 1930,
        'in': 76,
        'lunar': '566',
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
    },
    {
        'nps': '80"',
        'dn': 'DN 2000',
        'mm': 2032,
        'in': 80,
        'lunar': '4CC',
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
    },
    {
        'nps': '3/8"',
        'dn': '3/8"',
        'mm': 9.5,
        'in': 0.375,
        'lunar': '079',
        'pffTypes': ['FASTENERS']
    },
    {
        'nps': '7/16"',
        'dn': '7/16"',
        'mm': 11.1,
        'in': 0.438,
        'lunar': '086',
        'pffTypes': ['FASTENERS']
    },
    {
        'nps': '1/2"',
        'dn': '1/2"',
        'mm': 12.7,
        'in': 0.5,
        'lunar': '08F',
        'pffTypes': ['FASTENERS']
    },
    {
        'nps': '9/16"',
        'dn': '9/16"',
        'mm': 14.3,
        'in': 0.563,
        'lunar': '0A1',
        'pffTypes': ['FASTENERS']
    },
    {
        'nps': '5/8"',
        'dn': '5/8"',
        'mm': 15.9,
        'in': 0.625,
        'lunar': '0B7',
        'pffTypes': ['FASTENERS']
    },
    {
        'nps': '3/4"',
        'dn': '3/4"',
        'mm': 19.1,
        'in': 0.75,
        'lunar': '0D2',
        'pffTypes': ['FASTENERS']
    },
    {
        'nps': '7/8"',
        'dn': '7/8"',
        'mm': 22.2,
        'in': 0.875,
        'lunar': '0EF',
        'pffTypes': ['FASTENERS']
    },
    {
        'nps': '1"',
        'dn': '1"',
        'mm': 25.4,
        'in': 1,
        'lunar': '109',
        'pffTypes': ['FASTENERS']
    },
    {
        'nps': '1 1/8"',
        'dn': '1 1/8"',
        'mm': 28.6,
        'in': 1.125,
        'lunar': '11F',
        'pffTypes': ['FASTENERS']
    },
    {
        'nps': '1 1/4"',
        'dn': '1 1/4"',
        'mm': 31.8,
        'in': 1.25,
        'lunar': '131',
        'pffTypes': ['FASTENERS']
    },
    {
        'nps': '1 3/8"',
        'dn': '1 3/8"',
        'mm': 34.9,
        'in': 1.375,
        'lunar': '140',
        'pffTypes': ['FASTENERS']
    },
    {
        'nps': '1 1/2"',
        'dn': '1 1/2"',
        'mm': 38.1,
        'in': 1.5,
        'lunar': '152',
        'pffTypes': ['FASTENERS']
    },
    {
        'nps': '1 3/4"',
        'dn': '1 3/4"',
        'mm': 44.5,
        'in': 1.75,
        'lunar': '16A',
        'pffTypes': ['FASTENERS']
    },
    {
        'nps': '1 7/8"',
        'dn': '1 7/8"',
        'mm': 47.6,
        'in': 1.875,
        'lunar': '174',
        'pffTypes': ['FASTENERS']
    },
    {
        'nps': '2"',
        'dn': '2"',
        'mm': 50.8,
        'in': 2,
        'lunar': '17A',
        'pffTypes': ['FASTENERS']
    },
    {
        'nps': '2 1/4"',
        'dn': '2 1/4"',
        'mm': 57.2,
        'in': 2.25,
        'lunar': '189',
        'pffTypes': ['FASTENERS']
    },
    {
        'nps': '2 1/2"',
        'dn': '2 1/2"',
        'mm': 63.5,
        'in': 2.5,
        'lunar': '195',
        'pffTypes': ['FASTENERS']
    },
    {
        'nps': 'M10',
        'dn': 'M10',
        'mm': 10,
        'in': 0.394,
        'lunar': '080',
        'pffTypes': ['FASTENERS']
    },
    {
        'nps': 'M12',
        'dn': 'M12',
        'mm': 12,
        'in': 0.472,
        'lunar': '08B',
        'pffTypes': ['FASTENERS']
    },
    {
        'nps': 'M14',
        'dn': 'M14',
        'mm': 14,
        'in': 0.551,
        'lunar': '09D',
        'pffTypes': ['FASTENERS']
    },
    {
        'nps': 'M16',
        'dn': 'M16',
        'mm': 16,
        'in': 0.63,
        'lunar': '0B8',
        'pffTypes': ['FASTENERS']
    },
    {
        'nps': 'M18',
        'dn': 'M18',
        'mm': 18,
        'in': 0.709,
        'lunar': '0CA',
        'pffTypes': ['FASTENERS']
    },
    {
        'nps': 'M20',
        'dn': 'M20',
        'mm': 20,
        'in': 0.787,
        'lunar': '0D9',
        'pffTypes': ['FASTENERS']
    },
    {
        'nps': 'M22',
        'dn': 'M22',
        'mm': 22,
        'in': 0.866,
        'lunar': '0EE',
        'pffTypes': ['FASTENERS']
    },
    {
        'nps': 'M24',
        'dn': 'M24',
        'mm': 24,
        'in': 0.945,
        'lunar': '0FF',
        'pffTypes': ['FASTENERS']
    },
    {
        'nps': 'M27',
        'dn': 'M27',
        'mm': 27,
        'in': 1.063,
        'lunar': '112',
        'pffTypes': ['FASTENERS']
    },
    {
        'nps': 'M30',
        'dn': 'M30',
        'mm': 30,
        'in': 1.181,
        'lunar': '125',
        'pffTypes': ['FASTENERS']
    },
    {
        'nps': 'M33',
        'dn': 'M33',
        'mm': 33,
        'in': 1.299,
        'lunar': '135',
        'pffTypes': ['FASTENERS']
    },
    {
        'nps': 'M36',
        'dn': 'M36',
        'mm': 36,
        'in': 1.417,
        'lunar': '149',
        'pffTypes': ['FASTENERS']
    },
    {
        'nps': 'M39',
        'dn': 'M39',
        'mm': 39,
        'in': 1.535,
        'lunar': '156',
        'pffTypes': ['FASTENERS']
    },
    {
        'nps': 'M42',
        'dn': 'M42',
        'mm': 42,
        'in': 1.654,
        'lunar': '161',
        'pffTypes': ['FASTENERS']
    },
    {
        'nps': 'M45',
        'dn': 'M45',
        'mm': 45,
        'in': 1.772,
        'lunar': '16B',
        'pffTypes': ['FASTENERS']
    },
    {
        'nps': 'M48',
        'dn': 'M48',
        'mm': 48,
        'in': 1.89,
        'lunar': '175',
        'pffTypes': ['FASTENERS']
    },
    {
        'nps': 'M52',
        'dn': 'M52',
        'mm': 52,
        'in': 2.047,
        'lunar': '17E',
        'pffTypes': ['FASTENERS']
    },
    {
        'nps': 'M56',
        'dn': 'M56',
        'mm': 56,
        'in': 2.205,
        'lunar': '185',
        'pffTypes': ['FASTENERS']
    },
    {
        'nps': 'M60',
        'dn': 'M60',
        'mm': 60,
        'in': 2.362,
        'lunar': '18D',
        'pffTypes': ['FASTENERS']
    },
    {
        'nps': 'M64',
        'dn': 'M64',
        'mm': 64,
        'in': 2.52,
        'lunar': '46E',
        'pffTypes': ['FASTENERS']
    },
    {
        'nps': 'M68',
        'dn': 'M68',
        'mm': 68,
        'in': 2.677,
        'lunar': '2B9',
        'pffTypes': ['FASTENERS']
    },
    {
        'nps': 'M72',
        'dn': 'M72',
        'mm': 72,
        'in': 2.834,
        'lunar': '29E',
        'pffTypes': ['FASTENERS']
    },
    {
        'nps': 'M76',
        'dn': 'M76',
        'mm': 76,
        'in': 2.992,
        'lunar': '1A4',
        'pffTypes': ['FASTENERS']
    },
    {
        'nps': 'M80',
        'dn': 'M80',
        'mm': 80,
        'in': 3.15,
        'lunar': '1AA',
        'pffTypes': ['FASTENERS']
    },
    {
        'nps':'R-11',
        'dn':'R-11',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-12',
        'dn':'R-12',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-13',
        'dn':'R-13',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-14',
        'dn':'R-14',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-15',
        'dn':'R-15',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-16',
        'dn':'R-16',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-17',
        'dn':'R-17',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-18',
        'dn':'R-18',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-19',
        'dn':'R-19',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-20',
        'dn':'R-20',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-21',
        'dn':'R-21',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-22',
        'dn':'R-22',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-23',
        'dn':'R-23',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-24',
        'dn':'R-24',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-25',
        'dn':'R-25',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-26',
        'dn':'R-26',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-27',
        'dn':'R-27',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-28',
        'dn':'R-28',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-29',
        'dn':'R-29',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-30',
        'dn':'R-30',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-31',
        'dn':'R-31',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-32',
        'dn':'R-32',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-33',
        'dn':'R-33',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-34',
        'dn':'R-34',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-35',
        'dn':'R-35',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-36',
        'dn':'R-36',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-37',
        'dn':'R-37',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-38',
        'dn':'R-38',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-39',
        'dn':'R-39',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-40',
        'dn':'R-40',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-41',
        'dn':'R-41',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-42',
        'dn':'R-42',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-43',
        'dn':'R-43',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-44',
        'dn':'R-44',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-45',
        'dn':'R-45',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-46',
        'dn':'R-46',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-47',
        'dn':'R-47',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-48',
        'dn':'R-48',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-49',
        'dn':'R-49',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-50',
        'dn':'R-50',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-51',
        'dn':'R-51',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-52',
        'dn':'R-52',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-53',
        'dn':'R-53',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-54',
        'dn':'R-54',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-55',
        'dn':'R-55',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-56',
        'dn':'R-56',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-57',
        'dn':'R-57',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-58',
        'dn':'R-58',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-59',
        'dn':'R-59',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-60',
        'dn':'R-60',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-61',
        'dn':'R-61',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-62',
        'dn':'R-62',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-63',
        'dn':'R-63',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-64',
        'dn':'R-64',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-65',
        'dn':'R-65',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-66',
        'dn':'R-66',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-67',
        'dn':'R-67',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-68',
        'dn':'R-68',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-69',
        'dn':'R-69',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-70',
        'dn':'R-70',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-71',
        'dn':'R-71',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-72',
        'dn':'R-72',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-73',
        'dn':'R-73',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-74',
        'dn':'R-74',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-75',
        'dn':'R-75',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-76',
        'dn':'R-76',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-77',
        'dn':'R-77',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-78',
        'dn':'R-78',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-79',
        'dn':'R-79',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-80',
        'dn':'R-80',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-81',
        'dn':'R-81',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-82',
        'dn':'R-82',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-84',
        'dn':'R-84',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-85',
        'dn':'R-85',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-86',
        'dn':'R-86',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-87',
        'dn':'R-87',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-88',
        'dn':'R-88',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-89',
        'dn':'R-89',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-90',
        'dn':'R-90',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-91',
        'dn':'R-91',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-92',
        'dn':'R-92',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-93',
        'dn':'R-93',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-94',
        'dn':'R-94',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-95',
        'dn':'R-95',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-96',
        'dn':'R-96',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-97',
        'dn':'R-97',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-98',
        'dn':'R-98',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-99',
        'dn':'R-99',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-100',
        'dn':'R-100',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-101',
        'dn':'R-101',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-102',
        'dn':'R-102',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-103',
        'dn':'R-103',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-104',
        'dn':'R-104',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'R-105',
        'dn':'R-105',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'RX-20',
        'dn':'RX-20',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'RX-23',
        'dn':'RX-23',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'RX-24',
        'dn':'RX-24',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'RX-25',
        'dn':'RX-25',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'RX-26',
        'dn':'RX-26',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'RX-27',
        'dn':'RX-27',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'RX-31',
        'dn':'RX-31',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'RX-35',
        'dn':'RX-35',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'RX-37',
        'dn':'RX-37',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'RX-39',
        'dn':'RX-39',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'RX-41',
        'dn':'RX-41',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'RX-44',
        'dn':'RX-44',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'RX-45',
        'dn':'RX-45',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'RX-46',
        'dn':'RX-46',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'RX-47',
        'dn':'RX-47',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'RX-49',
        'dn':'RX-49',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'RX-50',
        'dn':'RX-50',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'RX-53',
        'dn':'RX-53',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'RX-54',
        'dn':'RX-54',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'RX-57',
        'dn':'RX-57',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'RX-63',
        'dn':'RX-63',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'RX-65',
        'dn':'RX-65',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'RX-66',
        'dn':'RX-66',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'RX-69',
        'dn':'RX-69',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'RX-70',
        'dn':'RX-70',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'RX-73',
        'dn':'RX-73',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'RX-74',
        'dn':'RX-74',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'RX-82',
        'dn':'RX-82',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'RX-84',
        'dn':'RX-84',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'RX-85',
        'dn':'RX-85',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'RX-86',
        'dn':'RX-86',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'RX-87',
        'dn':'RX-87',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'RX-88',
        'dn':'RX-88',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'RX-89',
        'dn':'RX-89',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'RX-90',
        'dn':'RX-90',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'RX-91',
        'dn':'RX-91',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'RX-99',
        'dn':'RX-99',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'RX-201',
        'dn':'RX-201',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'RX-205',
        'dn':'RX-205',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'RX-210',
        'dn':'RX-210',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'RX-215',
        'dn':'RX-215',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'BX-150',
        'dn':'BX-150',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'BX-151',
        'dn':'BX-151',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'BX-152',
        'dn':'BX-152',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'BX-153',
        'dn':'BX-153',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'BX-154',
        'dn':'BX-154',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'BX-155',
        'dn':'BX-155',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'BX-156',
        'dn':'BX-156',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'BX-157',
        'dn':'BX-157',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'BX-158',
        'dn':'BX-158',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'BX-159',
        'dn':'BX-159',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'BX-160',
        'dn':'BX-160',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'BX-161',
        'dn':'BX-161',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'BX-162',
        'dn':'BX-162',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'BX-163',
        'dn':'BX-163',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'BX-164',
        'dn':'BX-164',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'BX-165',
        'dn':'BX-165',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'BX-166',
        'dn':'BX-166',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'BX-167',
        'dn':'BX-167',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'BX-168',
        'dn':'BX-168',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'BX-169',
        'dn':'BX-169',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'BX-170',
        'dn':'BX-170',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'BX-171',
        'dn':'BX-171',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'BX-172',
        'dn':'BX-172',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    },
    {
        'nps':'BX-303',
        'dn':'BX-303',
        'mm':'',
        'in':'',
        'Lunar':'FFF', // Size to be created
        'pffTypes': ['RING_GASKETS']
    }
]