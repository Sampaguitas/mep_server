const types = [
    {
        'lunar': 'FFF', //to be created
        'name': 'PIPE',
        'tags': ['PIPE'],
        'pffType': 'PIPES',
        'specs': ['ASME B36.10', 'ASME B36.19', 'API 5L']
    },
    {
        'lunar': '03B',
        'name': 'PIPE SMLS',
        'tags': ['PIPE', 'PIPE SMLS'],
        'pffType': 'PIPES',
        'specs': ['ASME B36.10', 'ASME B36.19', 'API 5L']
    },
    {
        'lunar': '02C',
        'name': 'PIPE WLD',
        'tags': ['PIPE', 'PIPE WLD'],
        'pffType': 'PIPES',
        'specs': ['ASME B36.10', 'ASME B36.19', 'API 5L']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'PIPE EFW',
        'tags': ['PIPE', 'PIPE WLD', 'PIPE EFW'],
        'pffType': 'PIPES',
        'specs': ['ASME B36.10', 'ASME B36.19', 'API 5L']
    },
    {
        'lunar': '358',
        'name': 'PIPE ERW',
        'tags': ['PIPE', 'PIPE WLD', 'PIPE ERW'],
        'pffType': 'PIPES',
        'specs': ['ASME B36.10', 'ASME B36.19', 'API 5L']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'PIPE SAW',
        'tags': ['PIPE', 'PIPE WLD', 'PIPE SAW'],
        'pffType': 'PIPES',
        'specs': ['ASME B36.10', 'ASME B36.19', 'API 5L']

    },
    {
        'lunar': '041',
        'name': 'PIPENIPPLE',
        'tags': ['PIPENIPPLE'],
        'pffType': 'PIPE_NIPPLES'
    },
    {
        'lunar': '00C',
        'name': 'CAP',
        'tags': ['CAP'],
        'pffType': 'PIPE_FITTINGS',
        'specs': ['ASME B16.9', 'MSS SP-75']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'CRED',
        'tags': ['CRED'],
        'pffType': 'PIPE_FITTINGS',
        'specs': ['ASME B16.9', 'MSS SP-75']
    },
    {
        'lunar': '011',
        'name': 'CRED SMLS',
        'tags': ['CRED', 'CRED SMLS'],
        'pffType': 'PIPE_FITTINGS',
        'specs': ['ASME B16.9', 'MSS SP-75']
    },
    {
        'lunar': '027',
        'name': 'CRED WLD',
        'tags': ['CRED', 'CRED WLD'],
        'pffType': 'PIPE_FITTINGS',
        'specs': ['ASME B16.9', 'MSS SP-75']
    },
    {
        'lunar': '09C',
        'name': 'CROSS',
        'tags': ['CROSS'],
        'pffType': 'PIPE_FITTINGS',
        'specs': ['ASME B16.9']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'ELB LR 180',
        'tags': ['ELB LR 180'],
        'pffType': 'PIPE_FITTINGS',
        'specs': ['ASME B16.9']
    },
    {
        'lunar': '01F',
        'name': 'ELB LR 180 SMLS',
        'tags': ['ELB LR 180', 'ELB LR 180 SMLS'],
        'pffType': 'PIPE_FITTINGS',
        'specs': ['ASME B16.9']
    },
    {
        'lunar': '0C1',
        'name': 'ELB LR 180 WLD',
        'tags': ['ELB LR 180', 'ELB LR 180 WLD'],
        'pffType': 'PIPE_FITTINGS',
        'specs': ['ASME B16.9']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'ELB SR 180',
        'tags': ['ELB SR 180'],
        'pffType': 'PIPE_FITTINGS',
        'specs': ['ASME B16.9']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'ELB SR 180 SMLS',
        'tags': ['ELB SR 180', 'ELB SR 180 SMLS'],
        'pffType': 'PIPE_FITTINGS',
        'specs': ['ASME B16.9']
    },
    {
        'lunar': '0C2',
        'name': 'ELB SR 180 WLD',
        'tags': ['ELB SR 180', 'ELB SR 180 WLD'],
        'pffType': 'PIPE_FITTINGS',
        'specs': ['ASME B16.9']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'ELB LR 45',
        'tags': ['ELB LR 45'],
        'pffType': 'PIPE_FITTINGS',
        'specs': ['ASME B16.9', 'MSS SP-75']
    },
    {
        'lunar': '01D',
        'name': 'ELB LR 45 SMLS',
        'tags': ['ELB LR 45', 'ELB LR 45 SMLS'],
        'pffType': 'PIPE_FITTINGS',
        'specs': ['ASME B16.9', 'MSS SP-75']
    },
    {
        'lunar': '028',
        'name': 'ELB LR 45 WLD',
        'tags': ['ELB LR 45', 'ELB LR 45 WLD'],
        'pffType': 'PIPE_FITTINGS',
        'specs': ['ASME B16.9', 'MSS SP-75']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'ELB LR 90',
        'tags': ['ELB LR 90'],
        'pffType': 'PIPE_FITTINGS',
        'specs': ['ASME B16.9', 'MSS SP-75']
    },
    {
        'lunar': '01E',
        'name': 'ELB LR 90 SMLS',
        'tags': ['ELB LR 90', 'ELB LR 90 SMLS'],
        'pffType': 'PIPE_FITTINGS',
        'specs': ['ASME B16.9', 'MSS SP-75']
    },
    {
        'lunar': '029',
        'name': 'ELB LR 90 WLD',
        'tags': ['ELB LR 90', 'ELB LR 90 WLD'],
        'pffType': 'PIPE_FITTINGS',
        'specs': ['ASME B16.9', 'MSS SP-75']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'ELB SR 90',
        'tags': ['ELB SR 90'],
        'pffType': 'PIPE_FITTINGS',
        'specs': ['ASME B16.9']
    },
    {
        'lunar': '029',
        'name': 'ELB SR 90 SMLS',
        'tags': ['ELB SR 90', 'ELB SR 90 SMLS'],
        'pffType': 'PIPE_FITTINGS',
        'specs': ['ASME B16.9']
    },
    {
        'lunar': '0C0',
        'name': 'ELB SR 90 WLD',
        'tags': ['ELB SR 90', 'ELB SR 90 WLD'],
        'pffType': 'PIPE_FITTINGS',
        'specs': ['ASME B16.9']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'ERED',
        'tags': ['ERED'],
        'pffType': 'PIPE_FITTINGS',
        'specs': ['ASME B16.9', 'MSS SP-75']
    },
    {
        'lunar': '023',
        'name': 'ERED SMLS',
        'tags': ['ERED', 'ERED SMLS'],
        'pffType': 'PIPE_FITTINGS',
        'specs': ['ASME B16.9', 'MSS SP-75']
    },
    {
        'lunar': '014',
        'name': 'ERED WLD',
        'tags': ['ERED', 'ERED WLD'],
        'pffType': 'PIPE_FITTINGS',
        'specs': ['ASME B16.9', 'MSS SP-75']
    },
    {
        'lunar': '0A9',
        'name': 'STUB END',
        'tags': ['STUB END'],
        'pffType': 'PIPE_FITTINGS',
        'specs': ['ASME B16.9']
    },
    {
        'lunar': '303',
        'name': 'STUB END LP',
        'tags': ['STUB END', 'STUB END LP'],
        'pffType': 'PIPE_FITTINGS',
        'specs': ['ASME B16.9']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'STUB END SP',
        'tags': ['STUB END', 'STUB END SP'],
        'pffType': 'PIPE_FITTINGS',
        'specs': ['ASME B16.9']
    },
    {
        'lunar': '618',
        'name': 'TEE',
        'tags': ['TEE'],
        'pffType': 'PIPE_FITTINGS',
        'specs': ['ASME B16.9', 'MSS SP-75']
    },
    {
        'lunar': '05B',
        'name': 'TEE SMLS',
        'tags': ['TEE', 'TEE SMLS'],
        'pffType': 'PIPE_FITTINGS',
        'specs': ['ASME B16.9', 'MSS SP-75']
    },
    {
        'lunar': '02B',
        'name': 'TEE WLD',
        'tags': ['TEE', 'TEE WLD'],
        'pffType': 'PIPE_FITTINGS',
        'specs': ['ASME B16.9', 'MSS SP-75']
    },
    {
        'lunar': '024',
        'name': 'ESWNI',
        'tags': ['ESWNI'],
        'pffType': 'PIPE_FITTINGS',
        'specs': ['MSS SP-95']
    },
    {
        'lunar': '013',
        'name': 'CSWNI',
        'tags': ['CSWNI'],
        'pffType': 'PIPE_FITTINGS',
        'specs': ['ASME B16.9']
    },
    {
        'lunar': '6CB',
        'name': 'TEE BARRED',
        'tags': ['TEE BARRED'],
        'pffType': 'PIPE_FITTINGS',
        'specs': ['ASME B16.9']
    },
    {
        'lunar': '170',
        'name': 'LAT TEE',
        'tags': ['LAT TEE'],
        'pffType': 'PIPE_FITTINGS',
        'specs': ['ASME B16.9']
    },
    {
        'lunar': '0B4',
        'name': 'BOSS 3000',
        'tags': ['BOSS 3000'],
        'pffType': 'FORGED_FITTINGS',
        'specs': ['ASME B16.11']
    },
    {
        'lunar': '0B5',
        'name': 'BOSS 6000',
        'tags': ['BOSS 6000'],
        'pffType': 'FORGED_FITTINGS',
        'specs': ['ASME B16.11']
    },
    {
        'lunar': '0E2',
        'name': 'ELB 2000 90',
        'tags': ['ELB 2000 90'],
        'pffType': 'FORGED_FITTINGS',
        'specs': ['ASME B16.11']
    },
    {
        'lunar': '01A',
        'name': 'ELB 3000 90',
        'tags': ['ELB 3000 90'],
        'pffType': 'FORGED_FITTINGS',
        'specs': ['ASME B16.11']
    },
    {
        'lunar': '01C',
        'name': 'ELB 6000 90',
        'tags': ['ELB 6000 90'],
        'pffType': 'FORGED_FITTINGS',
        'specs': ['ASME B16.11']
    },
    {
        'lunar': '15E',
        'name': 'ELB 9000 90',
        'tags': ['ELB 9000 90'],
        'pffType': 'FORGED_FITTINGS',
        'specs': ['ASME B16.11']
    },
    {
        'lunar': '0E3',
        'name': 'TEE 2000',
        'tags': ['TEE 2000'],
        'pffType': 'FORGED_FITTINGS',
        'specs': ['ASME B16.11']
    },
    {
        'lunar': '05C',
        'name': 'TEE 3000',
        'tags': ['TEE 3000'],
        'pffType': 'FORGED_FITTINGS',
        'specs': ['ASME B16.11']
    },
    {
        'lunar': '05D',
        'name': 'TEE 6000',
        'tags': ['TEE 6000'],
        'pffType': 'FORGED_FITTINGS',
        'specs': ['ASME B16.11']
    },
    {
        'lunar': '0DE',
        'name': 'TEE 9000',
        'tags': ['TEE 9000'],
        'pffType': 'FORGED_FITTINGS',
        'specs': ['ASME B16.11']
    },
    {
        'lunar': '0E0',
        'name': 'CROSS 2000',
        'tags': ['CROSS 2000'],
        'pffType': 'FORGED_FITTINGS',
        'specs': ['ASME B16.11']
    },
    {
        'lunar': '012',
        'name': 'CROSS 3000',
        'tags': ['CROSS 3000'],
        'pffType': 'FORGED_FITTINGS',
        'specs': ['ASME B16.11']
    },
    {
        'lunar': '0DF',
        'name': 'CROSS 6000',
        'tags': ['CROSS 6000'],
        'pffType': 'FORGED_FITTINGS',
        'specs': ['ASME B16.11']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'CROSS 9000',
        'tags': ['CROSS 9000'],
        'pffType': 'FORGED_FITTINGS',
        'specs': ['ASME B16.11']
    },
    {
        'lunar': '0E1',
        'name': 'ELB 2000 45',
        'tags': ['ELB 2000 45'],
        'pffType': 'FORGED_FITTINGS',
        'specs': ['ASME B16.11']
    },
    {
        'lunar': '019',
        'name': 'ELB 3000 45',
        'tags': ['ELB 3000 45'],
        'pffType': 'FORGED_FITTINGS',
        'specs': ['ASME B16.11']
    },
    {
        'lunar': '01B',
        'name': 'ELB 6000 45',
        'tags': ['ELB 6000 45'],
        'pffType': 'FORGED_FITTINGS',
        'specs': ['ASME B16.11']
    },
    {
        'lunar': '15D',
        'name': 'ELB 9000 45',
        'tags': ['ELB 9000 45'],
        'pffType': 'FORGED_FITTINGS',
        'specs': ['ASME B16.11']
    },
    {
        'lunar': '00F',
        'name': 'CPL 3000',
        'tags': ['CPL 3000'],
        'pffType': 'FORGED_FITTINGS',
        'specs': ['ASME B16.11']
    },
    {
        'lunar': '010',
        'name': 'CPL 6000',
        'tags': ['CPL 6000'],
        'pffType': 'FORGED_FITTINGS',
        'specs': ['ASME B16.11']
    },
    {
        'lunar': '158',
        'name': 'CPL 9000',
        'tags': ['CPL 9000'],
        'pffType': 'FORGED_FITTINGS',
        'specs': ['ASME B16.11']
    },
    {
        'lunar': '030',
        'name': 'HCPL 3000',
        'tags': ['HCPL 3000'],
        'pffType': 'FORGED_FITTINGS',
        'specs': ['ASME B16.11']
    },
    {
        'lunar': '031',
        'name': 'HCPL 6000',
        'tags': ['HCPL 6000'],
        'pffType': 'FORGED_FITTINGS',
        'specs': ['ASME B16.11']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'HCPL 9000',
        'tags': ['HCPL 9000'],
        'pffType': 'FORGED_FITTINGS',
        'specs': ['ASME B16.11']
    },
    {
        'lunar': '00D',
        'name': 'CAP 3000',
        'tags': ['CAP 3000'],
        'pffType': 'FORGED_FITTINGS',
        'specs': ['ASME B16.11']
    },
    {
        'lunar': '00E',
        'name': 'CAP 6000',
        'tags': ['CAP 6000'],
        'pffType': 'FORGED_FITTINGS',
        'specs': ['ASME B16.11']
    },
    {
        'lunar': '157',
        'name': 'CAP 9000',
        'tags': ['CAP 9000'],
        'pffType': 'FORGED_FITTINGS',
        'specs': ['ASME B16.11']
    },
    {
        'lunar': '033',
        'name': 'PLUG HH',
        'tags': ['PLUG HH'],
        'pffType': 'FORGED_FITTINGS',
        'specs': ['ASME B16.11']
    },
    {
        'lunar': '04E',
        'name': 'PLUG RH',
        'tags': ['PLUG RH'],
        'pffType': 'FORGED_FITTINGS',
        'specs': ['ASME B16.11']
    },
    {
        'lunar': '055',
        'name': 'PLUG SH',
        'tags': ['PLUG SH'],
        'pffType': 'FORGED_FITTINGS',
        'specs': ['ASME B16.11']
    },
    {
        'lunar': '00B',
        'name': 'BUSH',
        'tags': ['BUSH'],
        'pffType': 'FORGED_FITTINGS',
        'specs': ['ASME B16.11']
    },
    {
        'lunar': '035',
        'name': 'INS 3000',
        'tags': ['INS 3000'],
        'pffType': 'FORGED_FITTINGS',
        'specs': ['MSS SP-79']
    },
    {
        'lunar': '0B3',
        'name': 'INS 6000',
        'tags': ['INS 6000'],
        'pffType': 'FORGED_FITTINGS',
        'specs': ['MSS SP-79']
    },
    {
        'lunar': '060',
        'name': 'UNI FF 3000',
        'tags': ['UNI FF 3000'],
        'pffType': 'FORGED_FITTINGS',
        'specs': ['MSS SP-83']
    },
    {
        'lunar': '061',
        'name': 'UNI FF 6000',
        'tags': ['UNI FF 6000'],
        'pffType': 'FORGED_FITTINGS',
        'specs': ['MSS SP-83']
    },
    {
        'lunar': '062',
        'name': 'UNI MF 3000',
        'tags': ['UNI MF 3000'],
        'pffType': 'FORGED_FITTINGS',
        'specs': ['MSS SP-83']
    },
    {
        'lunar': '349',
        'name': 'STUDB/NTS',
        'tags': ['STUDB/NTS'],
        'pffType': 'FASTENERS',
        'specs': ['BS 4882', 'DIN 976']
    },
    {
        'lunar': '312',
        'name': 'BOLT/NUT',
        'tags': ['BOLT/NUT'],
        'pffType': 'FASTENERS',
        'specs': ['ASME B18.2.1', 'DIN 931']
    },
    {
        'lunar': '10D',
        'name': 'VALVE CHECK PISTON 150',
        'tags': ['VALVE CHECK PISTON 150'],
        'pffType': 'VALVES',
        'specs': ['MSS SP-118', 'ASME B16.34', 'ASME B16.10', 'API 594','API 6D']
    },
    {
        'lunar': '110',
        'name': 'VALVE CHECK PISTON 300',
        'tags': ['VALVE CHECK PISTON 300'],
        'pffType': 'VALVES',
        'specs': ['MSS SP-118', 'ASME B16.34', 'ASME B16.10', 'API 594','API 6D']
    },
    {
        'lunar': '440',
        'name': 'VALVE CHECK PISTON 400',
        'tags': ['VALVE CHECK PISTON 400'],
        'pffType': 'VALVES',
        'specs': ['MSS SP-118', 'ASME B16.34', 'ASME B16.10', 'API 594','API 6D']
    },
    {
        'lunar': '111',
        'name': 'VALVE CHECK PISTON 600',
        'tags': ['VALVE CHECK PISTON 600'],
        'pffType': 'VALVES',
        'specs': ['MSS SP-118', 'ASME B16.34', 'ASME B16.10', 'API 594','API 6D']
    },
    {
        'lunar': '112',
        'name': 'VALVE CHECK PISTON 800',
        'tags': ['VALVE CHECK PISTON 800'],
        'pffType': 'VALVES',
        'specs': ['MSS SP-118', 'ASME B16.34', 'ASME B16.10', 'API 594','API 6D']
    },
    {
        'lunar': '43E',
        'name': 'VALVE CHECK PISTON 900',
        'tags': ['VALVE CHECK PISTON 900'],
        'pffType': 'VALVES',
        'specs': ['MSS SP-118', 'ASME B16.34', 'ASME B16.10', 'API 594','API 6D']
    },
    {
        'lunar': '10E',
        'name': 'VALVE CHECK PISTON 1500',
        'tags': ['VALVE CHECK PISTON 1500'],
        'pffType': 'VALVES',
        'specs': ['MSS SP-118', 'ASME B16.34', 'ASME B16.10', 'API 594','API 6D']
    },
    {
        'lunar': '10F',
        'name': 'VALVE CHECK PISTON 2500',
        'tags': ['VALVE CHECK PISTON 2500'],
        'pffType': 'VALVES',
        'specs': ['MSS SP-118', 'ASME B16.34', 'ASME B16.10', 'API 594','API 6D']
    },
    {
        'lunar': '118',
        'name': 'VALVE CHECK SWING 150',
        'tags': ['VALVE CHECK SWING 150'],
        'pffType': 'VALVES',
        'specs': ['MSS SP-118', 'ASME B16.34', 'ASME B16.10', 'API 594','API 6D']
    },
    {
        'lunar': '119',
        'name': 'VALVE CHECK SWING 300',
        'tags': ['VALVE CHECK SWING 300'],
        'pffType': 'VALVES',
        'specs': ['MSS SP-118', 'ASME B16.34', 'ASME B16.10', 'API 594','API 6D']
    },
    {
        'lunar': '445',
        'name': 'VALVE CHECK SWING 400',
        'tags': ['VALVE CHECK SWING 400'],
        'pffType': 'VALVES',
        'specs': ['MSS SP-118', 'ASME B16.34', 'ASME B16.10', 'API 594','API 6D']
    },
    {
        'lunar': '11A',
        'name': 'VALVE CHECK SWING 600',
        'tags': ['VALVE CHECK SWING 600'],
        'pffType': 'VALVES',
        'specs': ['MSS SP-118', 'ASME B16.34', 'ASME B16.10', 'API 594','API 6D']
    },
    {
        'lunar': '11A',
        'name': 'VALVE CHECK SWING 800',
        'tags': ['VALVE CHECK SWING 800'],
        'pffType': 'VALVES',
        'specs': ['MSS SP-118', 'ASME B16.34', 'ASME B16.10', 'API 594','API 6D']
    },
    {
        'lunar': '446',
        'name': 'VALVE CHECK SWING 900',
        'tags': ['VALVE CHECK SWING 900'],
        'pffType': 'VALVES',
        'specs': ['MSS SP-118', 'ASME B16.34', 'ASME B16.10', 'API 594','API 6D']
    },
    {
        'lunar': '443',
        'name': 'VALVE CHECK SWING 1500',
        'tags': ['VALVE CHECK SWING 1500'],
        'pffType': 'VALVES',
        'specs': ['MSS SP-118', 'ASME B16.34', 'ASME B16.10', 'API 594','API 6D']
    },
    {
        'lunar': '444',
        'name': 'VALVE CHECK SWING 2500',
        'tags': ['VALVE CHECK SWING 2500'],
        'pffType': 'VALVES',
        'specs': ['MSS SP-118', 'ASME B16.34', 'ASME B16.10', 'API 594','API 6D']
    },
    {
        'lunar': '11D',
        'name': 'VALVE GATE 150',
        'tags': ['VALVE GATE 150'],
        'pffType': 'VALVES',
        'specs': ['ASME B16.34', 'ASME B16.10', 'API 602','API 6D']
    },
    {
        'lunar': '120',
        'name': 'VALVE GATE 300',
        'tags': ['VALVE GATE 300'],
        'pffType': 'VALVES',
        'specs': ['ASME B16.34', 'ASME B16.10', 'API 602','API 6D']
    },
    {
        'lunar': '3F6',
        'name': 'VALVE GATE 400',
        'tags': ['VALVE GATE 400'],
        'pffType': 'VALVES',
        'specs': ['ASME B16.34', 'ASME B16.10', 'API 602','API 6D']
    },
    {
        'lunar': '121',
        'name': 'VALVE GATE 600',
        'tags': ['VALVE GATE 600'],
        'pffType': 'VALVES',
        'specs': ['ASME B16.34', 'ASME B16.10', 'API 602','API 6D']
    },
    {
        'lunar': '122',
        'name': 'VALVE GATE 800',
        'tags': ['VALVE GATE 800'],
        'pffType': 'VALVES',
        'specs': ['ASME B16.34', 'ASME B16.10', 'API 602','API 6D']
    },
    {
        'lunar': '3F7',
        'name': 'VALVE GATE 900',
        'tags': ['VALVE GATE 900'],
        'pffType': 'VALVES',
        'specs': ['ASME B16.34', 'ASME B16.10', 'API 602','API 6D']
    },
    {
        'lunar': '11E',
        'name': 'VALVE GATE 1500',
        'tags': ['VALVE GATE 1500'],
        'pffType': 'VALVES',
        'specs': ['ASME B16.34', 'ASME B16.10', 'API 602','API 6D']
    },
    {
        'lunar': '11F',
        'name': 'VALVE GATE 2500',
        'tags': ['VALVE GATE 2500'],
        'pffType': 'VALVES',
        'specs': ['ASME B16.34', 'ASME B16.10', 'API 602','API 6D']
    },
    {
        'lunar': '0FD',
        'name': 'VALVE GLOBE 150',
        'tags': ['VALVE GLOBE 150'],
        'pffType': 'VALVES',
        'specs': ['MSS SP-118', 'ASME B16.34', 'ASME B16.10', 'API 623']
    },
    {
        'lunar': '102',
        'name': 'VALVE GLOBE 300',
        'tags': ['VALVE GLOBE 300'],
        'pffType': 'VALVES',
        'specs': ['MSS SP-118', 'ASME B16.34', 'ASME B16.10', 'API 623']
    },
    {
        'lunar': '103',
        'name': 'VALVE GLOBE 400',
        'tags': ['VALVE GLOBE 400'],
        'pffType': 'VALVES',
        'specs': ['MSS SP-118', 'ASME B16.34', 'ASME B16.10', 'API 623']
    },
    {
        'lunar': '104',
        'name': 'VALVE GLOBE 600',
        'tags': ['VALVE GLOBE 600'],
        'pffType': 'VALVES',
        'specs': ['MSS SP-118', 'ASME B16.34', 'ASME B16.10', 'API 623']
    },
    {
        'lunar': '35C',
        'name': 'VALVE GLOBE 800',
        'tags': ['VALVE GLOBE 800'],
        'pffType': 'VALVES',
        'specs': ['MSS SP-118', 'ASME B16.34', 'ASME B16.10', 'API 623']
    },
    {
        'lunar': '105',
        'name': 'VALVE GLOBE 900',
        'tags': ['VALVE GLOBE 900'],
        'pffType': 'VALVES',
        'specs': ['MSS SP-118', 'ASME B16.34', 'ASME B16.10', 'API 623']
    },
    {
        'lunar': '0FE',
        'name': 'VALVE GLOBE 1500',
        'tags': ['VALVE GLOBE 1500'],
        'pffType': 'VALVES',
        'specs': ['MSS SP-118', 'ASME B16.34', 'ASME B16.10', 'API 623']
    },
    {
        'lunar': '101',
        'name': 'VALVE GLOBE 2500',
        'tags': ['VALVE GLOBE 2500'],
        'pffType': 'VALVES',
        'specs': ['MSS SP-118', 'ASME B16.34', 'ASME B16.10', 'API 623']
    },
    {
        'lunar': '0FD',
        'name': 'VALVE BALL 150',
        'tags': ['VALVE BALL 150'],
        'pffType': 'VALVES',
        'specs': ['ASME B16.34', 'ASME B16.10', 'API 6D']
    },
    {
        'lunar': '102',
        'name': 'VALVE BALL 300',
        'tags': ['VALVE BALL 300'],
        'pffType': 'VALVES',
        'specs': ['ASME B16.34', 'ASME B16.10', 'API 6D']
    },
    {
        'lunar': '103',
        'name': 'VALVE BALL 400',
        'tags': ['VALVE BALL 400'],
        'pffType': 'VALVES',
        'specs': ['ASME B16.34', 'ASME B16.10', 'API 6D']
    },
    {
        'lunar': '104',
        'name': 'VALVE BALL 600',
        'tags': ['VALVE BALL 600'],
        'pffType': 'VALVES',
        'specs': ['ASME B16.34', 'ASME B16.10', 'API 6D']
    },
    {
        'lunar': '105',
        'name': 'VALVE BALL 900',
        'tags': ['VALVE BALL 900'],
        'pffType': 'VALVES',
        'specs': ['ASME B16.34', 'ASME B16.10', 'API 6D']
    },
    {
        'lunar': '0FE',
        'name': 'VALVE BALL 1500',
        'tags': ['VALVE BALL 1500'],
        'pffType': 'VALVES',
        'specs': ['ASME B16.34', 'ASME B16.10', 'API 6D']
    },
    {
        'lunar': '101',
        'name': 'VALVE BALL 2500',
        'tags': ['VALVE BALL 2500'],
        'pffType': 'VALVES',
        'specs': ['ASME B16.34', 'ASME B16.10', 'API 6D']
    },
    {
        'lunar': '016',
        'name': 'THR FL 150',
        'tags': ['THR FL 150'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5']
    },
    {
        'lunar': '017',
        'name': 'THR FL 300',
        'tags': ['THR FL 300'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'THR FL 400',
        'tags': ['THR FL 400'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'THR FL 400/600',
        'tags': ['THR FL 400', 'THR FL 600'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5']
    },
    {
        'lunar': '018',
        'name': 'THR FL 600',
        'tags': ['THR FL 600'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'THR FL 900',
        'tags': ['THR FL 900'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5']
    },
    {
        'lunar': '6C3',
        'name': 'THR FL 900/1500',
        'tags': ['THR FL 900', 'THR FL 1500'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5']
    },
    {
        'lunar': '0B2', //to be created
        'name': 'THR FL 1500',
        'tags': ['THR FL 1500'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5']
    },
    {
        'lunar': '0B9', //to be created
        'name': 'THR FL 2500',
        'tags': ['THR FL 2500'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5']
    },
    {
        'lunar': '052',
        'name': 'SOF 150',
        'tags': ['SOF 150'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5']
    },
    {
        'lunar': '053',
        'name': 'SOF 300',
        'tags': ['SOF 300'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5']
    },
    {
        'lunar': '1DB',
        'name': 'SOF 400',
        'tags': ['SOF 400'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'SOF 400/600',
        'tags': ['SOF 400', 'SOF 600'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5']
    },
    {
        'lunar': '054',
        'name': 'SOF 600',
        'tags': ['SOF 600'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5']
    },
    {
        'lunar': '0E4',
        'name': 'SOF 900',
        'tags': ['SOF 900'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'SOF 900/1500',
        'tags': ['SOF 900', 'SOF 1500'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5']
    },
    {
        'lunar': '1DC',
        'name': 'SOF 1500',
        'tags': ['SOF 1500'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5']
    },
    {
        'lunar': '058',
        'name': 'SWF 150',
        'tags': ['SWF 150'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5']
    },
    {
        'lunar': '059',
        'name': 'SWF 300',
        'tags': ['SWF 300'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5']
    },
    {
        'lunar': '05A',
        'name': 'SWF 600',
        'tags': ['SWF 600'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5']
    },
    {
        'lunar': '0B1',
        'name': 'SWF 1500',
        'tags': ['SWF 1500'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5']
    },
    {
        'lunar': '036',
        'name': 'LAPJ 150',
        'tags': ['LAPJ 150'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5']
    },
    {
        'lunar': '037',
        'name': 'LAPJ 300',
        'tags': ['LAPJ 300'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5']
    },
    {
        'lunar': '417',
        'name': 'LAPJ 400',
        'tags': ['LAPJ 400'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'LAPJ 400/600',
        'tags': ['LAPJ 400', 'LAPJ 600'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5']
    },
    {
        'lunar': '0A3',
        'name': 'LAPJ 600',
        'tags': ['LAPJ 600'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'LAPJ 900',
        'tags': ['LAPJ 900'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'LAPJ 900/1500',
        'tags': ['LAPJ 900', 'LAPJ 1500'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5']
    },
    {
        'lunar': '2B3',
        'name': 'LAPJ 1500',
        'tags': ['LAPJ 1500'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'LAPJ 2500',
        'tags': ['LAPJ 2500'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5']
    },
    {
        'lunar': '002',
        'name': 'BLF 150',
        'tags': ['BLF 150'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5', 'MSS SP-44']
    },
    {
        'lunar': '003',
        'name': 'BLF 300',
        'tags': ['BLF 300'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5', 'MSS SP-44']
    },
    {
        'lunar': '2FC',
        'name': 'BLF 400',
        'tags': ['BLF 400'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5', 'MSS SP-44']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'BLF 400/600',
        'tags': ['BLF 400', 'BLF 600'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5']
    },
    {
        'lunar': '004',
        'name': 'BLF 600',
        'tags': ['BLF 600'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5', 'MSS SP-44']
    },
    {
        'lunar': '005',
        'name': 'BLF 900',
        'tags': ['BLF 900'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5', 'MSS SP-44']
    },
    {
        'lunar': '6C1',
        'name': 'BLF 900/1500',
        'tags': ['BLF 900', 'BLF 1500'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5']
    },
    {
        'lunar': '008',
        'name': 'BLF 1500',
        'tags': ['BLF 1500'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5']
    },
    {
        'lunar': '009',
        'name': 'BLF 2500',
        'tags': ['BLF 2500'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5']
    },
    {
        'lunar': '06B',
        'name': 'WNF 150',
        'tags': ['WNF 150'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5', 'MSS SP-44']
    },
    {
        'lunar': '06C',
        'name': 'WNF 300',
        'tags': ['WNF 300'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5', 'MSS SP-44']
    },
    {
        'lunar': '2B2',
        'name': 'WNF 400',
        'tags': ['WNF 400'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5', 'MSS SP-44']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'WNF 400/600',
        'tags': ['WNF 400', 'WNF 600'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5']
    },
    {
        'lunar': '06D',
        'name': 'WNF 600',
        'tags': ['WNF 600'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5', 'MSS SP-44']
    },
    {
        'lunar': '06E',
        'name': 'WNF 900',
        'tags': ['WNF 900'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5', 'MSS SP-44']
    },
    {
        'lunar': '6C0',
        'name': 'WNF 900/1500',
        'tags': ['WNF 900', 'WNF 1500'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5']
    },
    {
        'lunar': '06F',
        'name': 'WNF 1500',
        'tags': ['WNF 1500'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5']
    },
    {
        'lunar': '070',
        'name': 'WNF 2500',
        'tags': ['WNF 2500'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5']
    },
    {
        'lunar': '13E',
        'name': 'LWNF 150',
        'tags': ['WNF 150'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5']
    },
    {
        'lunar': '140',
        'name': 'LWNF 300',
        'tags': ['WNF 300'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'LWNF 400',
        'tags': ['LWNF 400'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'LWNF 400/600',
        'tags': ['LWNF 400', 'LWNF 600'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5']
    },
    {
        'lunar': '039',
        'name': 'LWNF 600',
        'tags': ['LWNF 600'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5']
    },
    {
        'lunar': '141',
        'name': 'LWNF 900',
        'tags': ['LWNF 900'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'LWNF 900/1500',
        'tags': ['LWNF 900', 'LWNF 1500'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5']
    },
    {
        'lunar': '13F',
        'name': 'LWNF 1500',
        'tags': ['LWNF 1500'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5']
    },
    {
        'lunar': '41E',
        'name': 'LWNF 2500',
        'tags': ['LWNF 2500'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.5']

    },
    {
        'lunar': 'FFF', //to be created
        'name': 'BLF 3000',
        'tags': ['BLF 3000'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['API 6A']
    },
    {
        'lunar': '0BA',
        'name': 'BLF 5000',
        'tags': ['BLF 3000'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['API 6A']
    },
    {
        'lunar': '0F6',
        'name': 'BLF 10000',
        'tags': ['BLF 10000'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['API 6A']
    },
    {
        'lunar': '4CB',
        'name': 'WNF 3000',
        'tags': ['WNF 3000'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['API 6A']
    },
    {
        'lunar': '0B8',
        'name': 'WNF 5000',
        'tags': ['WNF 3000'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['API 6A']
    },
    {
        'lunar': '0F8',
        'name': 'WNF 10000',
        'tags': ['WNF 10000'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['API 6A']
    },
    {
        'lunar': '143',
        'name': 'OWNF 300', 
        'tags': ['OWNF 2500'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.36']
    },
    {
        'lunar': '433',
        'name': 'OWNF 400',  
        'tags': ['OWNF 400'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.36']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'OWNF 400/600',
        'tags': ['OWNF 400', 'OWNF 600'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.36']
    },
    {
        'lunar': '144',
        'name': 'OWNF 600',
        'tags': ['OWNF 600'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.36']
    },
    {
        'lunar': '145',
        'name': 'OWNF 900',
        'tags': ['OWNF 900'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.36']
    },
    {
        'lunar': '145',  //to be created
        'name': 'OWNF 900/1500',
        'tags': ['OWNF 900', 'OWNF 1500'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.36']
    },
    {
        'lunar': '142',
        'name': 'OWNF 1500',
        'tags': ['OWNF 1500'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.36']
    },
    {
        'lunar': '432',
        'name': 'OWNF 2500',
        'tags': ['OWNF 2500'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.36']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'OTHR FL 300',
        'tags': ['OTHR FL 300'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.36']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'OSOF 300',
        'tags': ['OSOF 300'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.36']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'WNF 150 SR A',
        'tags': ['WNF 150 SR A'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.47']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'WNF 300 SR A',
        'tags': ['WNF 300 SR A'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.47']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'WNF 400 SR A',
        'tags': ['WNF 400 SR A'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.47']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'WNF 600 SR A',
        'tags': ['WNF 600 SR A'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.47']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'WNF 900 SR A',
        'tags': ['WNF 900 SR A'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.47']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'BLF 150 SR A',
        'tags': ['BLF 150 SR A'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.47']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'BLF 300 SR A',
        'tags': ['BLF 300 SR A'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.47']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'BLF 400 SR A',
        'tags': ['BLF 400 SR A'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.47']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'BLF 600 SR A',
        'tags': ['BLF 600 SR A'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.47']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'BLF 900 SR A',
        'tags': ['BLF 600 SR A'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.47']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'WNF 75 SR B',
        'tags': ['WNF 75 SR B'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.47']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'WNF 150 SR B',
        'tags': ['WNF 150 SR B'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.47']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'WNF 300 SR B',
        'tags': ['WNF 300 SR B'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.47']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'WNF 400 SR B',
        'tags': ['WNF 400 SR B'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.47']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'WNF 600 SR B',
        'tags': ['WNF 600 SR B'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.47']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'WNF 900 SR B',
        'tags': ['WNF 900 SR B'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.47']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'BLF 75 SR B',
        'tags': ['BLF 75 SR B'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.47']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'BLF 150 SR B',
        'tags': ['BLF 150 SR B'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.47']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'BLF 300 SR B',
        'tags': ['BLF 300 SR B'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.47']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'BLF 400 SR B',
        'tags': ['BLF 400 SR B'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.47']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'BLF 600 SR B',
        'tags': ['BLF 600 SR B'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.47']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'BLF 900 SR B',
        'tags': ['BLF 900 SR B'],
        'pffType': 'FORGED_FLANGES',
        'specs': ['ASME B16.47']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'FWF (1) PN 2.5',
        'tags': ['FWF (1) PN 2.5'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'FWF (1) PN 2.5/6',
        'tags': ['FWF (1) PN 2.5', 'FWF (1) PN 6'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'FWF (1) PN 6',
        'tags': ['FWF (1) PN 6'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '653',
        'name': 'FWF (1) PN 10',
        'tags': ['FWF (1) PN 10'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '654',
        'name': 'FWF (1) PN 10/16',
        'tags': ['FWF (1) PN 10', 'FWF (1) PN 16'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '655',
        'name': 'FWF (1) PN 10/16/25/40',
        'tags': ['FWF (1) PN 10', 'FWF (1) PN 16', 'FWF (1) PN 25', 'FWF (1) PN 40'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '656',
        'name': 'FWF (1) PN 16',
        'tags': ['FWF (1) PN 16'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '657',
        'name': 'FWF (1) PN 25',
        'tags': ['FWF (1) PN 25'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '658',
        'name': 'FWF (1) PN 25/40',
        'tags': ['FWF (1) PN 25', 'FWF (1) PN 40'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '659',
        'name': 'FWF (1) PN 40',
        'tags': ['FWF (1) PN 40'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '65A',
        'name': 'FWF (1) PN 63',
        'tags': ['FWF (1) PN 63'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '65B',
        'name': 'FWF (1) PN 63/100',
        'tags': ['FWF (1) PN 63', 'FWF (1) PN 100'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '65C',
        'name': 'FWF (1) PN 100',
        'tags': ['FWF (1) PN 100'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'LPF (2) PN 2.5',
        'tags': ['LPF (2) PN 2.5'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'LPF (2) PN 2.5/6',
        'tags': ['LPF (2) PN 2.5', 'LPF (2) PN 6'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'LPF (2) PN 6',
        'tags': ['LPF (2) PN 6'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '65D',
        'name': 'LPF (2) PN 10',
        'tags': ['LPF (2) PN 10'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '65E',
        'name': 'LPF (2) PN 10/16',
        'tags': ['LPF (2) PN 10', 'LPF (2) PN 16'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '65F',
        'name': 'LPF (2) PN 10/16/25/40',
        'tags': ['LPF (2) PN 10', 'LPF (2) PN 16', 'LPF (2) PN 25', 'LPF (2) PN 40'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '660',
        'name': 'LPF (2) PN 16',
        'tags': ['LPF (2) PN 16'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '661',
        'name': 'LPF (2) PN 25',
        'tags': ['LPF (2) PN 25'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '662',
        'name': 'LPF (2) PN 25/40',
        'tags': ['LPF (2) PN 25', 'LPF (2) PN 40'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '663',
        'name': 'LPF (2) PN 40',
        'tags': ['LPF (2) PN 40'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'LPF (4) PN 6',
        'tags': ['LPF (4) PN 6'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '664',
        'name': 'LPF (4) PN 10', 
        'tags': ['LPF (4) PN 10'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '665',
        'name': 'LPF (4) PN 10/16', 
        'tags': ['LPF (4) PN 10', 'LPF (4) PN 16'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '666',
        'name': 'LPF (4) PN 10/16/25/40', 
        'tags': ['LPF (4) PN 10', 'LPF (4) PN 16', 'LPF (4) PN 25', 'LPF (4) PN 40'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '667',
        'name': 'LPF (4) PN 16',
        'tags': ['LPF (4) PN 16'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '668',
        'name': 'LPF (4) PN 25',
        'tags': ['LPF (4) PN 25'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '669',
        'name': 'LPF (4) PN 25/40',
        'tags': ['LPF (4) PN 25', 'LPF (4) PN 40'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '66A',
        'name': 'LPF (4) PN 40',
        'tags': ['LPF (4) PN 40'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'LPF (4) PN 63',
        'tags': ['LPF (4) PN 63'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'LPF (4) PN 63/100',
        'tags': ['LPF (4) PN 63', 'LPF (4) PN 100'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'LPF (4) PN 100',
        'tags': ['LPF (4) PN 100'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'BLF (5) PN 2.5',
        'tags': ['BLF (5) PN 2.5'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'BLF (5) PN 2.5/6',
        'tags': ['BLF (5) PN 2.5', 'BLF (5) PN 6'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'BLF (5) PN 6',
        'tags': ['BLF (5) PN 6'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '66B',
        'name': 'BLF (5) PN 10',
        'tags': ['BLF (5) PN 10'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '66C',
        'name': 'BLF (5) PN 10/16',
        'tags': ['BLF (5) PN 10', 'BLF (5) PN 16'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '66D',
        'name': 'BLF (5) PN 10/16/25/40',
        'tags': ['BLF (5) PN 10', 'BLF (5) PN 16', 'BLF (5) PN 25', 'BLF (5) PN 40'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '66E',
        'name': 'BLF (5) PN 16',
        'tags': ['BLF (5) PN 16'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '66F',
        'name': 'BLF (5) PN 25',
        'tags': ['BLF (5) PN 25'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '670',
        'name': 'BLF (5) PN 25/40',
        'tags': ['BLF (5) PN 25', 'BLF (5) PN 40'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '671',
        'name': 'BLF (5) PN 40',
        'tags': ['BLF (5) PN 40'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '672',
        'name': 'BLF (5) PN 63',
        'tags': ['BLF (5) PN 63'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '673',
        'name': 'BLF (5) PN 63/100',
        'tags': ['BLF (5) PN 63', 'BLF (5) PN 100'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '674',
        'name': 'BLF (5) PN 100',
        'tags': ['BLF (5) PN 100'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'BLF (5) PN 160',
        'tags': ['BLF (5) PN 160'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'BLF (5) PN 250',
        'tags': ['BLF (5) PN 250'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'BLF (5) PN 250/320',
        'tags': ['BLF (5) PN 250', 'BLF (5) PN 320'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'BLF (5) PN 320',
        'tags': ['BLF (5) PN 320'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'BLF (5) PN 400',
        'tags': ['BLF (5) PN 400'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'WNF (11) PN 2.5',
        'tags': ['WNF (11) PN 2.5'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'WNF (11) PN 2.5/6',
        'tags': ['WNF (11) PN 2.5', 'WNF (11) PN 6'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'WNF (11) PN 6',
        'tags': ['WNF (11) PN 6'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '675',
        'name': 'WNF (11) PN 10',
        'tags': ['WNF (11) PN 10'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '676',
        'name': 'WNF (11) PN 10/16',
        'tags': ['WNF (11) PN 10', 'WNF (11) PN 16'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '677',
        'name': 'WNF (11) PN 10/16/25/40',
        'tags': ['WNF (11) PN 10', 'WNF (11) PN 16', 'WNF (11) PN 25', 'WNF (11) PN 40'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '678',
        'name': 'WNF (11) PN 16',
        'tags': ['WNF (11) PN 16'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '679',
        'name': 'WNF (11) PN 25',
        'tags': ['WNF (11) PN 25'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '67A',
        'name': 'WNF (11) PN 25/40',
        'tags': ['WNF (11) PN 25', 'WNF (11) PN 40'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '67B',
        'name': 'WNF (11) PN 40',
        'tags': ['WNF (11) PN 40'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '67C',
        'name': 'WNF (11) PN 63',
        'tags': ['WNF (11) PN 63'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '67D',
        'name': 'WNF (11) PN 63/100',
        'tags': ['WNF (11) PN 63', 'WNF (11) PN 100'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '67E',
        'name': 'WNF (11) PN 100',
        'tags': ['WNF (11) PN 100'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '67F',
        'name': 'WNF (11) PN 160',
        'tags': ['WNF (11) PN 160'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '680',
        'name': 'WNF (11) PN 250',
        'tags': ['WNF (11) PN 250'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '681',
        'name': 'WNF (11) PN 250/320',
        'tags': ['WNF (11) PN 250', 'WNF (11) PN 320'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '682',
        'name': 'WNF (11) PN 320',
        'tags': ['WNF (11) PN 320'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '683',
        'name': 'WNF (11) PN 400',
        'tags': ['WNF (11) PN 400'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'SOF (12) PN 6',
        'tags': ['SOF (12) PN 6'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '693',
        'name': 'SOF (12) PN 10',
        'tags': ['SOF (12) PN 10'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '694',
        'name': 'SOF (12) PN 10/16',
        'tags': ['SOF (12) PN 10', 'SOF (12) PN 16'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '695',
        'name': 'SOF (12) PN 10/16/25/40',
        'tags': ['SOF (12) PN 10', 'SOF (12) PN 16', 'SOF (12) PN 25', 'SOF (12) PN 40'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '696',
        'name': 'SOF (12) PN 16',
        'tags': ['SOF (12) PN 16'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '697',
        'name': 'SOF (12) PN 25',
        'tags': ['SOF (12) PN 25'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '698',
        'name': 'SOF (12) PN 25/40',
        'tags': ['SOF (12) PN 25', 'SOF (12) PN 40'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '699',
        'name': 'SOF (12) PN 40',
        'tags': ['SOF (12) PN 40'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '69A',
        'name': 'SOF (12) PN 63',
        'tags': ['SOF (12) PN 63'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '69B',
        'name': 'SOF (12) PN 63',
        'tags': ['SOF (12) PN 63', 'SOF (12) PN 100'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '69C',
        'name': 'SOF (12) PN 63',
        'tags': ['SOF (12) PN 100'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'THR FL (13) PN 6',
        'tags': ['THR FL (13) PN 6'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '69D',
        'name': 'THR FL (13) PN 10', 
        'tags': ['THR FL (13) PN 10'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '69E',
        'name': 'THR FL (13) PN 10/16',
        'tags': ['THR FL (13) PN 10', 'THR FL (13) PN 16'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '69F',
        'name': 'THR FL (13) PN 10/16/25/40',
        'tags': ['THR FL (13) PN 10', 'THR FL (13) PN 16', 'THR FL (13) PN 25', 'THR FL (13) PN 40'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '69E',
        'name': 'THR FL (13) PN 16',
        'tags': ['THR FL (13) PN 16'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '6A1',
        'name': 'THR FL (13) PN 25',
        'tags': ['THR FL (13) PN 25'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '6A2',
        'name': 'THR FL (13) PN 25/40',
        'tags': ['THR FL (13) PN 25', 'THR FL (13) PN 40'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '6A3',
        'name': 'THR FL (13) PN 40',
        'tags': ['THR FL (13) PN 40'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '6A4',
        'name': 'THR FL (13) PN 63',
        'tags': ['THR FL (13) PN 63'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '6A5',
        'name': 'THR FL (13) PN 63/100',
        'tags': ['THR FL (13) PN 63', 'THR FL (13) PN 100'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '6A6',
        'name': 'THR FL (13) PN 100',
        'tags': ['THR FL (13) PN 100'],
        'pffType': 'EN_FLANGES',
        'specs': ['EN 1092-1']
    },
    {
        'lunar': '14C',
        'name': 'SBF 150',
        'tags': ['SBF 150'],
        'pffType': 'LINE_BLANKS',
        'specs': ['ASME B16.48']
    },
    {
        'lunar': '14F',
        'name': 'SBF 300',
        'tags': ['SBF 300'],
        'pffType': 'LINE_BLANKS',
        'specs': ['ASME B16.48']
    },
    {
        'lunar': '150',
        'name': 'SBF 600',
        'tags': ['SBF 600'],
        'pffType': 'LINE_BLANKS',
        'specs': ['ASME B16.48']
    },
    {
        'lunar': '151',
        'name': 'SBF 900',
        'tags': ['SBF 900'],
        'pffType': 'LINE_BLANKS',
        'specs': ['ASME B16.48']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'SBF 900/1500',
        'tags': ['SBF 900', 'SBF 1500'],
        'pffType': 'LINE_BLANKS',
        'specs': ['ASME B16.48']
    },
    {
        'lunar': '14D',
        'name': 'SBF 1500',
        'tags': ['SBF 1500'],
        'pffType': 'LINE_BLANKS',
        'specs': ['ASME B16.48']
    },
    {
        'lunar': '14E',
        'name': 'SBF 2500',
        'tags': ['SBF 2500'],
        'pffType': 'LINE_BLANKS',
        'specs': ['ASME B16.48']
    },
    {
        'lunar': '2FD',
        'name': 'SPADE 150',
        'tags': ['SPADE 150'],
        'pffType': 'LINE_BLANKS',
        'specs': ['ASME B16.48']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'SPADE 300',
        'tags': ['SPADE 300'],
        'pffType': 'LINE_BLANKS',
        'specs': ['ASME B16.48']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'SPADE 300/600',
        'tags': ['SPADE 300', 'SPADE 600'],
        'pffType': 'LINE_BLANKS',
        'specs': ['ASME B16.48']
    },
    {
        'lunar': '2FE',
        'name': 'SPADE 600',
        'tags': ['SPADE 600'],
        'pffType': 'LINE_BLANKS',
        'specs': ['ASME B16.48']
    },
    {
        'lunar': '6C4',
        'name': 'SPADE 900',
        'tags': ['SPADE 900'],
        'pffType': 'LINE_BLANKS',
        'specs': ['ASME B16.48']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'SPADE 900/1500',
        'tags': ['SPADE 900', 'SPADE 1500'],
        'pffType': 'LINE_BLANKS',
        'specs': ['ASME B16.48']
    },
    {
        'lunar': '1F3',
        'name': 'SPADE 1500',
        'tags': ['SPADE 1500'],
        'pffType': 'LINE_BLANKS',
        'specs': ['ASME B16.48']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'SPADE 2500',
        'tags': ['SPADE 2500'],
        'pffType': 'LINE_BLANKS',
        'specs': ['ASME B16.48']
    },
    {
        'lunar': '168',
        'name': 'SPACER 150',
        'tags': ['SPACER 150'],
        'pffType': 'LINE_BLANKS',
        'specs': ['ASME B16.48']
    },
    {
        'lunar': '169',
        'name': 'SPACER 300',
        'tags': ['SPACER 300'],
        'pffType': 'LINE_BLANKS',
        'specs': ['ASME B16.48']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'SPACER 300/600',
        'tags': ['SPACER 300', 'SPACER 600'],
        'pffType': 'LINE_BLANKS',
        'specs': ['ASME B16.48']
    },
    {
        'lunar': '16A',
        'name': 'SPACER 600',
        'tags': ['SPACER 600'],
        'pffType': 'LINE_BLANKS',
        'specs': ['ASME B16.48']
    },
    {
        'lunar': '16B',
        'name': 'SPACER 900',
        'tags': ['SPACER 900'],
        'pffType': 'LINE_BLANKS',
        'specs': ['ASME B16.48']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'SPACER 900/1500',
        'tags': ['SPACER 900', 'SPACER 1500'],
        'pffType': 'LINE_BLANKS',
        'specs': ['ASME B16.48']
    },
    {
        'lunar': '16C',
        'name': 'SPACER 1500',
        'tags': ['SPACER 1500'],
        'pffType': 'LINE_BLANKS',
        'specs': ['ASME B16.48']
    },
    {
        'lunar': '16D',
        'name': 'SPACER 2500',
        'tags': ['SPACER 2500'],
        'pffType': 'LINE_BLANKS',
        'specs': ['ASME B16.48']
    },
    {
        'lunar': '60D',
        'name': 'SPADE & SPACER 150',
        'tags': ['SPADE & SPACER 150'],
        'pffType': 'LINE_BLANKS',
        'specs': ['ASME B16.48']
    },
    {
        'lunar': '630',
        'name': 'SPADE & SPACER 300',
        'tags': ['SPADE & SPACER 300'],
        'pffType': 'LINE_BLANKS',
        'specs': ['ASME B16.48']
    },
    {
        'lunar': '615',
        'name': 'SPADE & SPACER 600',
        'tags': ['SPADE & SPACER 600'],
        'pffType': 'LINE_BLANKS',
        'specs': ['ASME B16.48']
    },
    {
        'lunar': '60E',
        'name': 'SPADE & SPACER 900',
        'tags': ['SPADE & SPACER 900'],
        'pffType': 'LINE_BLANKS',
        'specs': ['ASME B16.48']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'SPADE & SPACER 900/1500',
        'tags': ['SPADE & SPACER 900', 'SPADE & SPACER 1500'],
        'pffType': 'LINE_BLANKS',
        'specs': ['ASME B16.48']
    },
    {
        'lunar': 'FFF', //to be created
        'name': 'SPADE & SPACER 1500',
        'tags': ['SPADE & SPACER 1500'],
        'pffType': 'LINE_BLANKS',
        'specs': ['ASME B16.48']
    },
    {
        'lunar': '442',
        'name': 'SPADE & SPACER 2500',
        'tags': ['SPADE & SPACER 2500'],
        'pffType': 'LINE_BLANKS',
        'specs': ['ASME B16.48']
    }
]

