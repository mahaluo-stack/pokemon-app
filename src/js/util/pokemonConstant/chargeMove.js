import { type } from './type';

export const chargeMove = {
    acidSpray: {
        name: 'acid spray',
        effect: '100% chance to decrease defence of opponent by 2',
        type: type.poison,
        pve: {
            power: 20,
            bars: 2,
            window: 2.1,
            cooldown: 3,
        },
        pvp: {
            power: 20,
            energyCost: 45,
        },
    },
    aerialAce: {
        name: 'aerial ace',
        effect: null,
        type: type.flying,
        pve: {
            power: 55,
            bars: 3,
            window: 1.9,
            cooldown: 2.4,
        },
        pvp: {
            power: 55,
            energyCost: 45,
        },
    },
    aeroblast: {
        name: 'aeroblast',
        effect: '12.5% chance to increase attack of self by 2',
        type: type.flying,
        pve: {
            power: 180,
            bars: 1,
            window: 3.2,
            cooldown: 3.4,
        },
        pvp: {
            power: 170,
            energyCost: 75,
        },
    },
    airCutter: {
        name: 'air cutter',
        effect: null,
        type: type.flying,
        pve: {
            power: 60,
            bars: 2,
            window: 1.8,
            cooldown: 2.7,
        },
        pvp: {
            power: 60,
            energyCost: 55,
        },
    },
    ancientPower: {
        name: 'ancient power',
        effect: '10% chance to increase attack and defence of self by 2',
        type: type.rock,
        pve: {
            power: 70,
            bars: 3,
            window: 2.85,
            cooldown: 3.5,
        },
        pvp: {
            power: 45,
            energyCost: 45,
        },
    },
    aquaJet: {
        name: 'aqua jet',
        effect: null,
        type: type.water,
        pve: {
            power: 45,
            bars: 3,
            window: 1.7,
            cooldown: 2.6,
        },
        pvp: {
            power: 45,
            energyCost: 45,
        },
    },
    aquaTail: {
        name: 'aqua tail',
        effect: null,
        type: type.water,
        pve: {
            power: 50,
            bars: 3,
            window: 1.2,
            cooldown: 1.9,
        },
        pvp: {
            power: 50,
            energyCost: 35,
        },
    },
    auraSphere: {
        name: 'aura sphere',
        effect: null,
        type: type.fighting,
        pve: {
            power: 90,
            bars: 2,
            window: 1,
            cooldown: 1.8,
        },
        pvp: {
            power: 100,
            energyCost: 55,
        },
    },
    auroraBeam: {
        name: 'aurora beam',
        effect: null,
        type: type.ice,
        pve: {
            power: 80,
            bars: 2,
            window: 3.35,
            cooldown: 3.55,
        },
        pvp: {
            power: 80,
            energyCost: 60,
        },
    },
    avalanche: {
        name: 'avalance',
        effect: null,
        type: type.ice,
        pve: {
            power: 90,
            bars: 2,
            window: 1.7,
            cooldown: 2.7,
        },
        pvp: {
            power: 90,
            energyCost: 45,
        },
    },
    blastBurn: {
        name: 'blast burn',
        effect: null,
        type: type.fire,
        pve: {
            power: 110,
            bars: 2,
            window: 2.75,
            cooldown: 3.3,
        },
        pvp: {
            power: 110,
            energyCost: 50,
        },
    },
    blazeKick: {
        name: 'blaze kick',
        effect: null,
        type: type.fire,
        pve: {
            power: 45,
            bars: 3,
            window: 0.45,
            cooldown: 1.2,
        },
        pvp: {
            power: 55,
            energyCost: 40,
        },
    },
    blizzard: {
        name: 'blizzard',
        effect: null,
        type: type.ice,
        pve: {
            power: 130,
            bars: 1,
            window: 1.5,
            cooldown: 3.1,
        },
        pvp: {
            power: 140,
            energyCost: 75,
        },
    },
    bodySlam: {
        name: 'body slam',
        effect: null,
        type: type.normal,
        pve: {
            power: 50,
            bars: 3,
            window: 1.2,
            cooldown: 1.9,
        },
        pvp: {
            power: 60,
            energyCost: 35,
        },
    },
    boneClub: {
        name: 'bone club',
        effect: null,
        type: type.ground,
        pve: {
            power: 40,
            bars: 3,
            window: 1,
            cooldown: 1.6,
        },
        pvp: {
            power: 40,
            energyCost: 35,
        },
    },
    braveBird: {
        name: 'brave bird',
        effect: '100% chance to decrease defence of self by 3',
        type: type.flying,
        pve: {
            power: 130,
            bars: 1,
            window: 1,
            cooldown: 2,
        },
        pvp: {
            power: 130,
            energyCost: 55,
        },
    },
    brickBreak: {
        name: 'brick break',
        effect: null,
        type: type.fighting,
        pve: {
            power: 40,
            bars: 3,
            window: 0.8,
            cooldown: 1.6,
        },
        pvp: {
            power: 40,
            energyCost: 35,
        },
    },
    brine: {
        name: 'brine',
        effect: null,
        type: type.water,
        pve: {
            power: 60,
            bars: 2,
            window: 1.5,
            cooldown: 2.3,
        },
        pvp: {
            power: 60,
            energyCost: 50,
        },
    },
    bubbleBeam: {
        name: 'bubble beam',
        effect: '100% chance to decrease attack of opponent by 1',
        type: type.water,
        pve: {
            power: 45,
            bars: 3,
            window: 1.45,
            cooldown: 1.9,
        },
        pvp: {
            power: 25,
            energyCost: 40,
        },
    },
    bugBuzz: {
        name: 'bug buzz',
        effect: '30% chance to decrease defence of opponent by 1',
        type: type.bug,
        pve: {
            power: 90,
            bars: 2,
            window: 2,
            cooldown: 3.7,
        },
        pvp: {
            power: 90,
            energyCost: 60,
        },
    },
    bulldoze: {
        name: 'bulldoze',
        effect: null,
        type: type.ground,
        pve: {
            power: 80,
            bars: 2,
            window: 2.6,
            cooldown: 3.5,
        },
        pvp: {
            power: 80,
            energyCost: 60,
        },
    },
    closeCombat: {
        name: 'close combat',
        effect: '100% chance to decrease defence of self by 2',
        type: type.fighting,
        pve: {
            power: 100,
            bars: 1,
            window: 1,
            cooldown: 2.3,
        },
        pvp: {
            power: 100,
            energyCost: 45,
        },
    },
    crabHammer: {
        name: 'crabhammer',
        effect: '12.5% chance to increase attack of self by 2',
        type: type.water,
        pve: {
            power: 85,
            bars: 2,
            window: 1.5,
            cooldown: 1.9,
        },
        pvp: {
            power: 85,
            energyCost: 50,
        },
    },
    crossChop: {
        name: 'cross chop',
        effect: null,
        type: type.fighting,
        pve: {
            power: 50,
            bars: 2,
            window: 0.8,
            cooldown: 1.5,
        },
        pvp: {
            power: 50,
            energyCost: 35,
        },
    },
    crossPoison: {
        name: 'cross poison',
        effect: '12.5% chance to increase attack of self by 2',
        type: type.poison,
        pve: {
            power: 40,
            bars: 3,
            window: 0.9,
            cooldown: 1.5,
        },
        pvp: {
            power: 50,
            energyCost: 35,
        },
    },
    crunch: {
        name: 'crunch',
        effect: '30% chance to decrease defence of opponent by 1',
        type: type.dark,
        pve: {
            power: 70,
            bars: 3,
            window: 1.3,
            cooldown: 3.2,
        },
        pvp: {
            power: 70,
            energyCost: 45,
        },
    },
    darkPulse: {
        name: 'dark pulse',
        effect: null,
        type: type.dark,
        pve: {
            power: 80,
            bars: 2,
            window: 1.4,
            cooldown: 3,
        },
        pvp: {
            power: 80,
            energyCost: 50,
        },
    },
    dazzlingGleam: {
        name: 'dazzling gleam',
        effect: null,
        type: type.fairy,
        pve: {
            power: 100,
            bars: 2,
            window: 2.1,
            cooldown: 3.5,
        },
        pvp: {
            power: 110,
            energyCost: 70,
        },
    },
    dig: {
        name: 'dig',
        effect: null,
        type: type.ground,
        pve: {
            power: 100,
            bars: 2,
            window: 2.8,
            cooldown: 4.7,
        },
        pvp: {
            power: 100,
            energyCost: 80,
        },
    },
    disarmingVoice: {
        name: 'disarming voice',
        effect: null,
        type: type.fairy,
        pve: {
            power: 70,
            bars: 3,
            window: 3.2,
            cooldown: 3.9,
        },
        pvp: {
            power: 70,
            energyCost: 45,
        },
    },
    discharge: {
        name: 'discharge',
        effect: null,
        type: type.electric,
        pve: {
            power: 65,
            bars: 3,
            window: 1.7,
            cooldown: 2.5,
        },
        pvp: {
            power: 65,
            energyCost: 45,
        },
    },
    doomDesire: {
        name: 'doom desire',
        effect: null,
        type: type.steel,
        pve: {
            power: 70,
            bars: 3,
            window: 1.4,
            cooldown: 1.7,
        },
        pvp: {
            power: 75,
            energyCost: 40,
        },
    },
    dracoMeteor: {
        name: 'draco meteor',
        effect: '100% chance to decrease attack of self by 2',
        type: type.dragon,
        pve: {
            power: 150,
            bars: 1,
            window: 3,
            cooldown: 3.6,
        },
        pvp: {
            power: 150,
            energyCost: 65,
        },
    },
    dragonClaw: {
        name: 'dragon claw',
        effect: null,
        type: type.dragon,
        pve: {
            power: 50,
            bars: 3,
            window: 1.1,
            cooldown: 1.7,
        },
        pvp: {
            power: 50,
            energyCost: 35,
        },
    },
    dragonPulse: {
        name: 'dragon pulse',
        effect: null,
        type: type.dragon,
        pve: {
            power: 90,
            bars: 2,
            window: 2.15,
            cooldown: 3.6,
        },
        pvp: {
            power: 90,
            energyCost: 60,
        },
    },
    drainingKiss: {
        name: 'draining kiss',
        effect: null,
        type: type.fairy,
        pve: {
            power: 60,
            bars: 2,
            window: 1,
            cooldown: 2.6,
        },
        pvp: {
            power: 60,
            energyCost: 55,
        },
    },
    drillPeck: {
        name: 'drill peck',
        effect: null,
        type: type.flying,
        pve: {
            power: 65,
            bars: 3,
            window: 1.7,
            cooldown: 2.3,
        },
        pvp: {
            power: 65,
            energyCost: 40,
        },
    },
    drillRun: {
        name: 'drill run',
        effect: null,
        type: type.ground,
        pve: {
            power: 80,
            bars: 2,
            window: 1.7,
            cooldown: 2.8,
        },
        pvp: {
            power: 80,
            energyCost: 45,
        },
    },
    dynamicPunch: {
        name: 'dynamic punch',
        effect: null,
        type: type.fighting,
        pve: {
            power: 90,
            bars: 2,
            window: 1.2,
            cooldown: 2.7,
        },
        pvp: {
            power: 90,
            energyCost: 50,
        },
    },
    earthPower: {
        name: 'earth power',
        effect: '10% chance to decrease defence of opponent by 1',
        type: type.ground,
        pve: {
            power: 100,
            bars: 2,
            window: 2.7,
            cooldown: 3.6,
        },
        pvp: {
            power: 90,
            energyCost: 55,
        },
    },
    earthquake: {
        name: 'earthquake',
        effect: null,
        type: type.ground,
        pve: {
            power: 140,
            bars: 1,
            window: 2.7,
            cooldown: 3.6,
        },
        pvp: {
            power: 120,
            energyCost: 65,
        },
    },
    energyBall: {
        name: 'energy ball',
        effect: '10% chance to decrease defence of opponent by 1',
        type: type.grass,
        pve: {
            power: 90,
            bars: 2,
            window: 3,
            cooldown: 3.9,
        },
        pvp: {
            power: 90,
            energyCost: 55,
        },
    },
    featherDance: {
        name: 'feather dance',
        effect: '100% chance to decrease attack of opponent by 2',
        type: type.flying,
        pve: {
            power: 35,
            bars: 2,
            window: 1.7,
            cooldown: 2.8,
        },
        pvp: {
            power: 35,
            energyCost: 50,
        },
    },
    fellStinger: {
        name: 'fell stinger',
        effect: '100% chance to increase attack of self by 1',
        type: type.bug,
        pve: {
            power: 50,
            bars: 3,
            window: 1.8,
            cooldown: 2.2,
        },
        pvp: {
            power: 20,
            energyCost: 35,
        },
    },
    fireBlast: {
        name: 'fire blast',
        effect: null,
        type: type.fire,
        pve: {
            power: 140,
            bars: 1,
            window: 3.1,
            cooldown: 4.2,
        },
        pvp: {
            power: 140,
            energyCost: 80,
        },
    },
    firePunch: {
        name: 'fire punch',
        effect: null,
        type: type.fire,
        pve: {
            power: 55,
            bars: 3,
            window: 1.5,
            cooldown: 2.2,
        },
        pvp: {
            power: 55,
            energyCost: 40,
        },
    },
    flameBurst: {
        name: 'flame burst',
        effect: null,
        type: type.fire,
        pve: {
            power: 70,
            bars: 2,
            window: 1,
            cooldown: 2.6,
        },
        pvp: {
            power: 70,
            energyCost: 55,
        },
    },
    flameCharge: {
        name: 'flame charge',
        effect: '100% chance to increase attack of self by 1',
        type: type.fire,
        pve: {
            power: 70,
            bars: 3,
            window: 2.9,
            cooldown: 3.8,
        },
        pvp: {
            power: 65,
            energyCost: 50,
        },
    },
    flameWheel: {
        name: 'flame wheel',
        effect: null,
        type: type.fire,
        pve: {
            power: 60,
            bars: 2,
            window: 2.1,
            cooldown: 2.7,
        },
        pvp: {
            power: 60,
            energyCost: 55,
        },
    },
    flamethrower: {
        name: 'flamethrower',
        effect: null,
        type: type.fire,
        pve: {
            power: 70,
            bars: 2,
            window: 1.5,
            cooldown: 2.2,
        },
        pvp: {
            power: 90,
            energyCost: 55,
        },
    },
    flashCannon: {
        name: 'flash cannon',
        effect: null,
        type: type.steel,
        pve: {
            power: 100,
            bars: 1,
            window: 1.6,
            cooldown: 2.7,
        },
        pvp: {
            power: 110,
            energyCost: 70,
        },
    },
    fly: {
        name: 'fly',
        effect: null,
        type: type.flying,
        pve: {
            power: 80,
            bars: 2,
            window: 1.2,
            cooldown: 1.8,
        },
        pvp: {
            power: 80,
            energyCost: 45,
        },
    },
    flyingPress: {
        name: 'flying press',
        effect: null,
        type: type.fighting,
        pve: {
            power: 110,
            bars: 2,
            window: 1,
            cooldown: 2.3,
        },
        pvp: {
            power: 90,
            energyCost: 40,
        },
    },
    focusBlast: {
        name: 'focus blast',
        effect: null,
        type: type.fighting,
        pve: {
            power: 140,
            bars: 1,
            window: 3,
            cooldown: 3.5,
        },
        pvp: {
            power: 150,
            energyCost: 75,
        },
    },
    foulPlay: {
        name: 'foul play',
        effect: null,
        type: type.dark,
        pve: {
            power: 70,
            bars: 2,
            window: 1.7,
            cooldown: 2,
        },
        pvp: {
            power: 70,
            energyCost: 45,
        },
    },
    frenzyPlant: {
        name: 'frenzy plant',
        effect: null,
        type: type.grass,
        pve: {
            power: 100,
            bars: 2,
            window: 2.15,
            cooldown: 2.6,
        },
        pvp: {
            power: 100,
            energyCost: 45,
        },
    },
    frustration: {
        name: 'frustration',
        effect: null,
        type: type.normal,
        pve: {
            power: 10,
            bars: 3,
            window: 1,
            cooldown: 2,
        },
        pvp: {
            power: 10,
            energyCost: 70,
        },
    },
    futureSight: {
        name: 'future sight',
        effect: null,
        type: type.psychic,
        pve: {
            power: 120,
            bars: 1,
            window: 1.4,
            cooldown: 2.7,
        },
        pvp: {
            power: 120,
            energyCost: 65,
        },
    },
    gigaDrain: {
        name: 'giga drain',
        effect: null,
        type: type.grass,
        pve: {
            power: 50,
            bars: 1,
            window: 1.2,
            cooldown: 3.9,
        },
        pvp: {
            power: 50,
            energyCost: 80,
        },
    },
    gigaImpact: {
        name: 'giga impact',
        effect: null,
        type: type.normal,
        pve: {
            power: 200,
            bars: 1,
            window: 1,
            cooldown: 4.7,
        },
        pvp: {
            power: 150,
            energyCost: 80,
        },
    },
    grassKnot: {
        name: 'grass knot',
        effect: null,
        type: type.grass,
        pve: {
            power: 90,
            bars: 2,
            window: 1.7,
            cooldown: 2.6,
        },
        pvp: {
            power: 90,
            energyCost: 50,
        },
    },
    gunkShot: {
        name: 'gunk shot',
        effect: null,
        type: type.poison,
        pve: {
            power: 130,
            bars: 1,
            window: 1.7,
            cooldown: 3.1,
        },
        pvp: {
            power: 130,
            energyCost: 75,
        },
    },
    gyroBall: {
        name: 'gyro ball',
        effect: null,
        type: type.steel,
        pve: {
            power: 80,
            bars: 2,
            window: 3,
            cooldown: 3.3,
        },
        pvp: {
            power: 80,
            energyCost: 60,
        },
    },
    heartStamp: {
        name: 'heart stamp',
        effect: null,
        type: type.psychic,
        pve: {
            power: 40,
            bars: 3,
            window: 1.1,
            cooldown: 1.9,
        },
        pvp: {
            power: 40,
            energyCost: 40,
        },
    },
    heatWave: {
        name: 'heat wave',
        effect: null,
        type: type.fire,
        pve: {
            power: 95,
            bars: 1,
            window: 1.7,
            cooldown: 3,
        },
        pvp: {
            power: 95,
            energyCost: 75,
        },
    },
    heavySlam: {
        name: 'heavy slam',
        effect: null,
        type: type.steel,
        pve: {
            power: 70,
            bars: 2,
            window: 1.5,
            cooldown: 2.1,
        },
        pvp: {
            power: 70,
            energyCost: 50,
        },
    },
    hornAttack: {
        name: 'horn attack',
        effect: null,
        type: type.normal,
        pve: {
            power: 40,
            bars: 3,
            window: 0.8,
            cooldown: 1.85,
        },
        pvp: {
            power: 40,
            energyCost: 35,
        },
    },
    hurricane: {
        name: 'hurricane',
        effect: null,
        type: type.flying,
        pve: {
            power: 110,
            bars: 1,
            window: 1.2,
            cooldown: 2.7,
        },
        pvp: {
            power: 110,
            energyCost: 65,
        },
    },
    hydroCannon: {
        name: 'hydro cannon',
        effect: null,
        type: type.water,
        pve: {
            power: 90,
            bars: 2,
            window: 0.5,
            cooldown: 1.9,
        },
        pvp: {
            power: 80,
            energyCost: 40,
        },
    },
    hydroPump: {
        name: 'hydro pump',
        effect: null,
        type: type.water,
        pve: {
            power: 130,
            bars: 1,
            window: 0.9,
            cooldown: 3.3,
        },
        pvp: {
            power: 130,
            energyCost: 75,
        },
    },
    hydroPumpBlastoise: {
        name: 'hydro pump - blastoise',
        effect: null,
        type: type.water,
        pve: {
            power: 90,
            bars: 1,
            window: 2.2,
            cooldown: 4.5,
        },
        pvp: {
            power: 90,
            energyCost: 80,
        },
    },
    hyperBeam: {
        name: 'hyper beam',
        effect: null,
        type: type.normal,
        pve: {
            power: 150,
            bars: 1,
            window: 3.3,
            cooldown: 3.8,
        },
        pvp: {
            power: 150,
            energyCost: 80,
        },
    },
    hyperFang: {
        name: 'hyper fang',
        effect: null,
        type: type.normal,
        pve: {
            power: 80,
            bars: 2,
            window: 1.5,
            cooldown: 2.5,
        },
        pvp: {
            power: 80,
            energyCost: 50,
        },
    },
    iceBeam: {
        name: 'ice beam',
        effect: null,
        type: type.ice,
        pve: {
            power: 90,
            bars: 2,
            window: 1.3,
            cooldown: 3.3,
        },
        pvp: {
            power: 90,
            energyCost: 55,
        },
    },
    icePunch: {
        name: 'ice punch',
        effect: null,
        type: type.ice,
        pve: {
            power: 50,
            bars: 3,
            window: 1.3,
            cooldown: 1.9,
        },
        pvp: {
            power: 55,
            energyCost: 40,
        },
    },
    icyWind: {
        name: 'icy wind',
        effect: '100% chance to decrease attack of opponent by 1',
        type: type.ice,
        pve: {
            power: 60,
            bars: 3,
            window: 2,
            cooldown: 3.3,
        },
        pvp: {
            power: 60,
            energyCost: 45,
        },
    },
    ironHead: {
        name: 'iron head',
        effect: null,
        type: type.steel,
        pve: {
            power: 60,
            bars: 2,
            window: 1.3,
            cooldown: 1.9,
        },
        pvp: {
            power: 70,
            energyCost: 50,
        },
    },
    lastResort: {
        name: 'last resort',
        effect: null,
        type: type.normal,
        pve: {
            power: 90,
            bars: 2,
            window: 2.7,
            cooldown: 2.9,
        },
        pvp: {
            power: 90,
            energyCost: 55,
        },
    },
    leafBlade: {
        name: 'leaf blade',
        effect: null,
        type: type.grass,
        pve: {
            power: 70,
            bars: 3,
            window: 1.25,
            cooldown: 2.4,
        },
        pvp: {
            power: 70,
            energyCost: 35,
        },
    },
    leafStorm: {
        name: 'leaf storm',
        effect: '100% chance to decrease attack of self by 2',
        type: type.poison,
        pve: {
            power: 130,
            bars: 1,
            window: 1.1,
            cooldown: 2.5,
        },
        pvp: {
            power: 130,
            energyCost: 55,
        },
    },
    leafTornado: {
        name: 'leaf tornado',
        effect: '50% chance to decrease attack of opponent by 2',
        type: type.poison,
        pve: {
            power: 45,
            bars: 3,
            window: 2,
            cooldown: 3.1,
        },
        pvp: {
            power: 45,
            energyCost: 40,
        },
    },
    lowSweep: {
        name: 'low sweep',
        effect: null,
        type: type.fighting,   
        pve: {
            power: 40,
            bars: 3,
            window: 1.3,
            cooldown: 1.9,
        },
        pvp: {
            power: 40,
            energyCost: 40,
        },
    },
    lunge: {
        name: 'lunge',
        effect: '100% chance to decrease attack of opponent by 1',
        type: type.bug,
        pve: {
            power: 55,
            bars: 3,
            window: 2.4,
            cooldown: 2.9,
        },
        pvp: {
            power: 60,
            energyCost: 45,
        },
    },
    magnetBomb: {
        name: 'magnet bomb',
        effect: null,
        type: type.steel,
        pve: {
            power: 70,
            bars: 3,
            window: 2.2,
            cooldown: 2.8,
        },
        pvp: {
            power: 70,
            energyCost: 45,
        },
    },
    megaDrain: {
        name: 'mega drain',
        effect: null,
        type: type.grass,
        pve: {
            power: 25,
            bars: 2,
            window: 0.95,
            cooldown: 2.6,
        },
        pvp: {
            power: 25,
            energyCost: 55,
        },
    },
    megahorn: {
        name: 'megahorn',
        effect: null,
        type: type.bug,
        pve: {
            power: 110,
            bars: 1,
            window: 1.7,
            cooldown: 2.2,
        },
        pvp: {
            power: 110,
            energyCost: 55,
        },
    },
    meteorMash: {
        name: 'meteor mash',
        effect: null,
        type: type.steel,
        pve: {
            power: 100,
            bars: 2,
            window: 2.3,
            cooldown: 2.6,
        },
        pvp: {
            power: 100,
            energyCost: 50,
        },
    },
    mirrorCoat: {
        name: 'mirror coat',
        effect: null,
        type: type.psychic,
        pve: {
            power: 60,
            bars: 2,
            window: 2.3,
            cooldown: 2.6,
        },
        pvp: {
            power: 60,
            energyCost: 55,
        },
    },
    mirrorShot: {
        name: 'mirror shot',
        effect: '30% chance to decrease attack of opponent by 1',
        type: type.steel,
        pve: {
            power: 50,
            bars: 3,
            window: 1.8,
            cooldown: 2.4,
        },
        pvp: {
            power: 35,
            energyCost: 35,
        },
    },
    moonblast: {
        name: 'moonblast',
        effect: '10% chance to decrease attack of opponent by 1',
        type: type.fairy,
        pve: {
            power: 130,
            bars: 1,
            window: 2.2,
            cooldown: 3.9,
        },
        pvp: {
            power: 110,
            energyCost: 60,
        },
    },
    mudBomb: {
        name: 'mud bomb',
        effect: null,
        type: type.ground,
        pve: {
            power: 55,
            bars: 3,
            window: 1.7,
            cooldown: 2.3,
        },
        pvp: {
            power: 55,
            energyCost: 40,
        },
    },
    muddyWater: {
        name: 'muddy water',
        effect: '30% chance to decrease attack of opponent by 1',
        type: type.water,
        pve: {
            power: 50,
            bars: 3,
            window: 1.2,
            cooldown: 2.2,
        },
        pvp: {
            power: 35,
            energyCost: 35,
        },
    },
    nightShade: {
        name: 'night shade',
        effect: null,
        type: type.ghost,
        pve: {
            power: 60,
            bars: 2,
            window: 2.1,
            cooldown: 2.6,
        },
        pvp: {
            power: 60,
            energyCost: 55,
        },
    },
    nightSlash: {
        name: 'night slash',
        effect: '12.5% chance to increase attack of self by 2',
        type: type.dark,
        pve: {
            power: 50,
            bars: 3,
            window: 1.3,
            cooldown: 2.2,
        },
        pvp: {
            power: 50,
            energyCost: 35,
        },
    },
    octazooka: {
        name: 'octazooka',
        effect: '50% chance to decrease attack of opponent by 2',
        type: type.water,
        pve: {
            power: 50,
            bars: 2,
            window: 1.3,
            cooldown: 2.3,
        },
        pvp: {
            power: 50,
            energyCost: 50,
        },
    },
    ominousWind: {
        name: 'ominous wind',
        effect: '10% chance to increase attack and defence of self by 2',
        type: type.ghost,
        pve: {
            power: 50,
            bars: 3,
            window: 1.85,
            cooldown: 2.3,
        },
        pvp: {
            power: 45,
            energyCost: 45,
        },
    },
    originPulse: {
        name: 'origin pulse',
        effect: null,
        type: type.water,
        pve: {
            power: 130,
            bars: 1,
            window: 1.4,
            cooldown: 1.7,
        },
        pvp: {
            power: 130,
            energyCost: 60,
        },
    },
    outrage: {
        name: 'outrage',
        effect: null,
        type: type.dragon,
        pve: {
            power: 110,
            bars: 2,
            window: 2.5,
            cooldown: 3.9,
        },
        pvp: {
            power: 110,
            energyCost: 60,
        },
    },
    overheat: {
        name: 'overheat',
        effect: '100% chance to decrease attack of self by 2',
        type: type.fire,
        pve: {
            power: 160,
            bars: 1,
            window: 2.6,
            cooldown: 4,
        },
        pvp: {
            power: 130,
            energyCost: 55,
        },
    },
    parabolicCharge: {
        name: 'parabolic charge',
        effect: null,
        type: type.electric,
        pve: {
            power: 25,
            bars: 2,
            window: 1.2,
            cooldown: 2.8,
        },
        pvp: {
            power: 25,
            energyCost: 55,
        },
    },
    payback: {
        name: 'payback',
        effect: null,
        type: type.dark,
        pve: {
            power: 100,
            bars: 1,
            window: 1.1,
            cooldown: 2.2,
        },
        pvp: {
            power: 110,
            energyCost: 60,
        },
    },
    petalBlizzard: {
        name: 'petal blizzard',
        effect: null,
        type: type.grass,
        pve: {
            power: 110,
            bars: 1,
            window: 1.7,
            cooldown: 2.6,
        },
        pvp: {
            power: 110,
            energyCost: 65,
        },
    },
    playRough: {
        name: 'play rough',
        effect: null,
        type: type.fairy,
        pve: {
            power: 90,
            bars: 2,
            window: 1.3,
            cooldown: 2.9,
        },
        pvp: {
            power: 90,
            energyCost: 60,
        },
    },
    poisonFang: {
        name: 'poison fang',
        effect: '100% chance to decrease defence of opponent by 1',
        type: type.poison,
        pve: {
            power: 35,
            bars: 3,
            window: 0.9,
            cooldown: 1.7,
        },
        pvp: {
            power: 40,
            energyCost: 35,
        },
    },
    powerGem: {
        name: 'power gem',
        effect: null,
        type: type.rock,
        pve: {
            power: 80,
            bars: 2,
            window: 1.95,
            cooldown: 2.9,
        },
        pvp: {
            power: 80,
            energyCost: 60,
        },
    },
    powerWhip: {
        name: 'power whip',
        effect: null,
        type: type.grass,
        pve: {
            power: 90,
            bars: 2,
            window: 1.25,
            cooldown: 2.6,
        },
        pvp: {
            power: 90,
            energyCost: 50,
        },
    },
    powerUpPunch: {
        name: 'power-up punch',
        effect: '100% chance to increase attack of self by 1',
        type: type.fighting,
        pve: {
            power: 50,
            bars: 3,
            window: 1.7,
            cooldown: 2,
        },
        pvp: {
            power: 20,
            energyCost: 35,
        },
    },
    precipiceBlades: {
        name: 'precipice blades',
        effect: null,
        type: type.ground,
        pve: {
            power: 130,
            bars: 1,
            window: 1.4,
            cooldown: 1.7,
        },
        pvp: {
            power: 130,
            energyCost: 60,
        },
    },
    psybeam: {
        name: 'psybeam',
        effect: null,
        type: type.psychic,
        pve: {
            power: 70,
            bars: 2,
            window: 1.3,
            cooldown: 3.2,
        },
        pvp: {
            power: 70,
            energyCost: 60,
        },
    },
    psychic: {
        name: 'psychic',
        effect: '10% chance to decrease defence of opponent by 1',
        type: type.psychic,
        pve: {
            power: 90,
            bars: 2,
            window: 1.3,
            cooldown: 2.8,
        },
        pvp: {
            power: 90,
            energyCost: 55,
        },
    },
    psychicFangs: {
        name: 'psychic fangs',
        effect: '100% chance to decrease defence of opponent by 1',
        type: type.psychic,
        pve: {
            power: 30,
            bars: 3,
            window: 0.3,
            cooldown: 1.2,
        },
        pvp: {
            power: 40,
            energyCost: 35,
        },
    },
    psychoBoost: {
        name: 'psycho boost',
        effect: '100% chance to decrease attack of self by 2',
        type: type.psychic,
        pve: {
            power: 70,
            bars: 2,
            window: 3.5,
            cooldown: 4,
        },
        pvp: {
            power: 70,
            energyCost: 35,
        },
    },
    psyshock: {
        name: 'psyshock',
        effect: null,
        type: type.psychic,
        pve: {
            power: 65,
            bars: 3,
            window: 2,
            cooldown: 2.7,
        },
        pvp: {
            power: 70,
            energyCost: 45,
        },
    },
    psystrike: {
        name: 'psystrike',
        effect: null,
        type: type.psychic,
        pve: {
            power: 90,
            bars: 2,
            window: 1,
            cooldown: 2.3,
        },
        pvp: {
            power: 90,
            energyCost: 45,
        },
    },
    razorShell: {
        name: 'razor shell',
        effect: '50% chance to decrease defence of opponent by 1',
        type: type.water,
        pve: {
            power: 45,
            bars: 3,
            window: 0.65,
            cooldown: 1.3,
        },
        pvp: {
            power: 35,
            energyCost: 35,
        },
    },
    rest: {
        name: 'rest',
        effect: null,
        type: type.normal,
        pve: {
            power: 50,
            bars: 3,
            window: 1.5,
            cooldown: 1.9,
        },
        pvp: {
            power: 50,
            energyCost: 35,
        },
    },
    return: {
        name: 'return',
        effect: null,
        type: type.normal,
        pve: {
            power: 35,
            bars: 3,
            window: 0.1,
            cooldown: 0.7,
        },
        pvp: {
            power: 130,
            energyCost: 70,
        },
    },
    rockBlast: {
        name: 'rock blast',
        effect: null,
        type: type.rock,
        pve: {
            power: 50,
            bars: 3,
            window: 1.6,
            cooldown: 2.1,
        },
        pvp: {
            power: 50,
            energyCost: 40,
        },
    },
    rockSlide: {
        name: 'rock slide',
        effect: null,
        type: type.rock,
        pve: {
            power: 80,
            bars: 2,
            window: 1.5,
            cooldown: 2.7,
        },
        pvp: {
            power: 75,
            energyCost: 45,
        },
    },
    rockTomb: {
        name: 'rock tomb',
        effect: null,
        type: type.rock,
        pve: {
            power: 70,
            bars: 2,
            window: 2.25,
            cooldown: 3.2,
        },
        pvp: {
            power: 70,
            energyCost: 60,
        },
    },
    rockWrecker: {
        name: 'rock wrecker',
        effect: null,
        type: type.rock,
        pve: {
            power: 110,
            bars: 2,
            window: 2,
            cooldown: 3.6,
        },
        pvp: {
            power: 110,
            energyCost: 50,
        },
    },
    sacredSword: {
        name: 'sacred sword',
        effect: null,
        type: type.fighting,
        pve: {
            power: 55,
            bars: 3,
            window: 0.5,
            cooldown: 1.2,
        },
        pvp: {
            power: 60,
            energyCost: 35,
        },
    },
    sandTomb: {
        name: 'sand tomb',
        effect: '100% chance to decrease defence of opponent by 1',
        type: type.ground,
        pve: {
            power: 60,
            bars: 3,
            window: 1.7,
            cooldown: 4,
        },
        pvp: {
            power: 25,
            energyCost: 40,
        },
    },
    scald: {
        name: 'scald',
        effect: '30% chance to decrease attack of opponent by 1',
        type: type.water,
        pve: {
            power: 80,
            bars: 2,
            window: 1.3,
            cooldown: 3.7,
        },
        pvp: {
            power: 80,
            energyCost: 50,
        },
    },
    scaldBlastoise: {
        name: 'scald - blastoise',
        effect: null,
        type: type.water,
        pve: {
            power: 50,
            bars: 1,
            window: 2.5,
            cooldown: 4.7,
        },
        pvp: {
            power: 50,
            energyCost: 80,
        },
    },
    seedBomb: {
        name: 'seed bomb',
        effect: null,
        type: type.grass,
        pve: {
            power: 55,
            bars: 3,
            window: 1.2,
            cooldown: 2.1,
        },
        pvp: {
            power: 55,
            energyCost: 40,
        },
    },
    shadowBall: {
        name: 'shadow ball',
        effect: null,
        type: type.ghost,
        pve: {
            power: 100,
            bars: 2,
            window: 2.4,
            cooldown: 3,
        },
        pvp: {
            power: 100,
            energyCost: 55,
        },
    },
    shadowBone: {
        name: 'shadow bone',
        effect: '20% chance to decrease defence of opponent by 1',
        type: type.ghost,
        pve: {
            power: 80,
            bars: 2,
            window: 2.25,
            cooldown: 2.8,
        },
        pvp: {
            power: 75,
            energyCost: 45,
        },
    },
    shadowPunch: {
        name: 'shadow punch',
        effect: null,
        type: type.ghost,
        pve: {
            power: 40,
            bars: 3,
            window: 1.3,
            cooldown: 1.7,
        },
        pvp: {
            power: 40,
            energyCost: 35,
        },
    },
    shadowSneak: {
        name: 'shadow sneak',
        effect: null,
        type: type.ghost,
        pve: {
            power: 50,
            bars: 3,
            window: 2.2,
            cooldown: 2.9,
        },
        pvp: {
            power: 50,
            energyCost: 45,
        },
    },
    signalBeam: {
        name: 'signal beam',
        effect: '20% chance to decrease attack and defence of opponent by 1',
        type: type.bug,
        pve: {
            power: 75,
            bars: 2,
            window: 1.8,
            cooldown: 2.9,
        },
        pvp: {
            power: 75,
            energyCost: 55,
        },
    },
    silverWind: {
        name: 'silver wind',
        effect: '10% chance to increase attack and defence of self by 2',
        type: type.bug,
        pve: {
            power: 70,
            bars: 3,
            window: 1.7,
            cooldown: 3.7,
        },
        pvp: {
            power: 45,
            energyCost: 45,
        },
    },
    skullBash: {
        name: 'skull bash',
        effect: '100% chance to decrease defence of self by 1',
        type: type.normal,
        pve: {
            power: 130,
            bars: 1,
            window: 1.8,
            cooldown: 3.1,
        },
        pvp: {
            power: 130,
            energyCost: 75,
        },
    },
    skyAttack: {
        name: 'sky attack',
        effect: null,
        type: type.flying,
        pve: {
            power: 80,
            bars: 2,
            window: 1.5,
            cooldown: 2,
        },
        pvp: {
            power: 75,
            energyCost: 45,
        },
    },
    sludge: {
        name: 'sludge',
        effect: null,
        type: type.poison,
        pve: {
            power: 50,
            bars: 3,
            window: 1.2,
            cooldown: 2.1,
        },
        pvp: {
            power: 50,
            energyCost: 40,
        },
    },
    sludgeBomb: {
        name: 'sludge bomb',
        effect: null,
        type: type.poison,
        pve: {
            power: 80,
            bars: 2,
            window: 1.1,
            cooldown: 2.3,
        },
        pvp: {
            power: 80,
            energyCost: 50,
        },
    },
    sludgeWave: {
        name: 'sludge wave',
        effect: null,
        type: type.poison,
        pve: {
            power: 110,
            bars: 1,
            window: 2,
            cooldown: 3.2,
        },
        pvp: {
            power: 110,
            energyCost: 65,
        },
    },
    solarBeam: {
        name: 'solar beam',
        effect: null,
        type: type.grass,
        pve: {
            power: 180,
            bars: 1,
            window: 2.7,
            cooldown: 4.9,
        },
        pvp: {
            power: 150,
            energyCost: 80,
        },
    },
    stomp: {
        name: 'stomp',
        effect: null,
        type: type.normal,
        pve: {
            power: 55,
            bars: 2,
            window: 1.1,
            cooldown: 1.7,
        },
        pvp: {
            power: 55,
            energyCost: 40,
        },
    },
    stoneEdge: {
        name: 'stone edge',
        effect: null,
        type: type.rock,
        pve: {
            power: 100,
            bars: 1,
            window: 0.7,
            cooldown: 2.3,
        },
        pvp: {
            power: 100,
            energyCost: 55,
        },
    },
    struggle: {
        name: 'struggle',
        effect: null,
        type: type.normal,
        pve: {
            power: 35,
            bars: 3,
            window: 1.2,
            cooldown: 2.2,
        },
        pvp: {
            power: 35,
            energyCost: 100,
        },
    },
    submission: {
        name: 'submission',
        effect: null,
        type: type.fighting,
        pve: {
            power: 60,
            bars: 2,
            window: 1.8,
            cooldown: 2.2,
        },
        pvp: {
            power: 60,
            energyCost: 50,
        },
    },
    superpower: {
        name: 'superpower',
        effect: '100% chance to decrease attack and defence of self by 1',
        type: type.fighting,
        pve: {
            power: 85,
            bars: 2,
            window: 2.1,
            cooldown: 3,
        },
        pvp: {
            power: 85,
            energyCost: 40,
        },
    },
    surf: {
        name: 'surf',
        effect: null,
        type: type.water,
        pve: {
            power: 65,
            bars: 2,
            window: 1.4,
            cooldown: 1.7,
        },
        pvp: {
            power: 65,
            energyCost: 40,
        },
    },
    swift: {
        name: 'swift',
        effect: null,
        type: type.normal,
        pve: {
            power: 60,
            dps: 2,
            window: 2,
            cooldown: 2.8,
        },
        pvp: {
            power: 60,
            energyCost: 55,
        },
    },
    synchronise: {
        name: 'synchronise',
        effect: null,
        type: type.psychic,
        pve: {
            power: 80,
            bars: 2,
            window: 0.85,
            cooldown: 2.6,
        },
        pvp: {
            power: 80,
            energyCost: 50,
        },
    },
    technoBlastBurn: {
        name: 'techno blast - burn',
        effect: null,
        type: type.fire,
        pve: {
            power: 120,
            bars: 1,
            window: 1.6,
            cooldown: 2,
        },
        pvp: {
            power: 120,
            energyCost: 55,
        },
    },
    technoBlastChill: {
        name: 'techno blast - chill',
        effect: null,
        type: type.ice,
        pve: {
            power: 120,
            bars: 1,
            window: 1.6,
            cooldown: 2,
        },
        pvp: {
            power: 120,
            energyCost: 55,
        },
    },
    technoBlastDouse: {
        name: 'techno blast - douse',
        effect: null,
        type: type.water,
        pve: {
            power: 120,
            bars: 1,
            window: 1.6,
            cooldown: 2,
        },
        pvp: {
            power: 120,
            energyCost: 55,
        },
    },
    technoBlastNormal: {
        name: 'techno blast - normal',
        effect: null,
        type: type.normal,
        pve: {
            power: 120,
            bars: 1,
            window: 1.6,
            cooldown: 2,
        },
        pvp: {
            power: 120,
            energyCost: 55,
        },
    },
    technoBlastShock: {
        name: 'techno blast - shock',
        effect: null,
        type: type.electric,
        pve: {
            power: 120,
            bars: 1,
            window: 1.6,
            cooldown: 2,
        },
        pvp: {
            power: 120,
            energyCost: 55,
        },
    },
    thunder: {
        name: 'thunder',
        effect: null,
        type: type.electric,
        pve: {
            power: 100,
            bars: 1,
            window: 1.2,
            cooldown: 2.4,
        },
        pvp: {
            power: 100,
            energyCost: 60,
        },
    },
    thunderPunch: {
        name: 'thunder punch',
        effect: null,
        type: type.electric,
        pve: {
            power: 45,
            bars: 3,
            window: 1.7,
            cooldown: 1.8,
        },
        pvp: {
            power: 55,
            energyCost: 40,
        },
    },
    thunderbolt: {
        name: 'thunderbolt',
        effect: null,
        type: type.electric,
        pve: {
            power: 80,
            bars: 2,
            window: 1.8,
            cooldown: 2.5,
        },
        pvp: {
            power: 90,
            energyCost: 55,
        },
    },
    triAttack: {
        name: 'tri-attack',
        effect: '50% chance to decrease attack and defence of opponent by 1',
        type: type.normal,
        pve: {
            power: 75,
            bars: 2,
            window: 1.3,
            cooldown: 2.5,
        },
        pvp: {
            power: 65,
            energyCost: 50,
        },
    },
    twister: {
        name: 'twister',
        effect: null,
        type: type.dragon,
        pve: {
            power: 45,
            bars: 3,
            window: 0.95,
            cooldown: 2.8,
        },
        pvp: {
            power: 45,
            energyCost: 45,
        },
    },
    vCreate: {
        name: 'v-create',
        effect: '100% chance to decrease defence of self by 3',
        type: type.fire,
        pve: {
            power: 95,
            bars: 3,
            window: 1.7,
            cooldown: 2.8,
        },
        pvp: {
            power: 95,
            energyCost: 40,
        },
    },
    viseGrip: {
        name: 'vise grip',
        effect: null,
        type: type.normal,
        pve: {
            power: 35,
            bars: 3,
            window: 1.1,
            cooldown: 1.9,
        },
        pvp: {
            power: 40,
            energyCost: 40,
        },
    },
    waterPulse: {
        name: 'water pulse',
        effect: null,
        type: type.water,
        pve: {
            power: 70,
            bars: 2,
            window: 2.2,
            cooldown: 3.2,
        },
        pvp: {
            power: 70,
            energyCost: 60,
        },
    },
    weatherBall: {
        name: 'weather ball',
        effect: null,
        type: type.normal,
        pve: {
            power: 55,
            bars: 3,
            window: 1.35,
            cooldown: 1.6,
        },
        pvp: {
            power: 55,
            energyCost: 35,
        },
    },
    weatherBallFire: {
        name: 'weather ball fire',
        effect: null,
        type: type.fire,
        pve: {
            power: 55,
            bars: 3,
            window: 1.35,
            cooldown: 1.6,
        },
        pvp: {
            power: 55,
            energyCost: 35,
        },
    },
    weatherBallIce: {
        name: 'weather ball ice',
        effect: null,
        type: type.ice,
        pve: {
            power: 55,
            bars: 3,
            window: 1.35,
            cooldown: 1.6,
        },
        pvp: {
            power: 55,
            energyCost: 35,
        },
    },
    weatherBallRock: {
        name: 'weather ball rock',
        effect: null,
        type: type.rock,
        pve: {
            power: 60,
            bars: 3,
            window: 1.35,
            cooldown: 1.6,
        },
        pvp: {
            power: 60,
            energyCost: 35,
        },
    },
    weatherBallWater: {
        name: 'weather ball water',
        effect: null,
        type: type.water,
        pve: {
            power: 55,
            bars: 3,
            window: 1.35,
            cooldown: 1.6,
        },
        pvp: {
            power: 55,
            energyCost: 35,
        },
    },
    wildCharge: {
        name: 'wild charge',
        effect: '100% chance to decrease defence of self by 2',
        type: type.electric,
        pve: {
            power: 90,
            bars: 2,
            window: 1.7,
            cooldown: 2.6,
        },
        pvp: {
            power: 100,
            energyCost: 45,
        },
    },
    wrap: {
        name: 'wrap',
        effect: null,
        type: type.normal,
        pve: {
            power: 60,
            bars: 3,
            window: 2.05,
            cooldown: 2.90,
        },
        pvp: {
            power: 60,
            energyCost: 45,
        },
    },
    wrapGreenPink: {
        name: 'wrap - green/pink',
        effect: null,
        type: type.normal,
        pve: {
            power: 25,
            bars: 3,
            window: 2.05,
            cooldown: 2.9,
        },
        pvp: {
            power: 25,
            energyCost: 40,
        },
    },
    xScissor: {
        name: 'x-scissor',
        effect: null,
        type: type.bug,
        pve: {
            power: 45,
            bars: 3,
            window: 1.2,
            cooldown: 1.6,
        },
        pvp: {
            power: 45,
            energyCost: 35,
        },
    },
    zapCannon: {
        name: 'zap cannon',
        effect: '100% chance to decrease attack of opponent by 1',
        type: type.electric,
        pve: {
            power: 140,
            bars: 1,
            window: 3,
            cooldown: 3.7,
        },
        pvp: {
            power: 150,
            energyCost: 80,
        },
    },
}