import { type } from './type';

export const fastMove = {
    acid: { 
        name: 'acid',
        type: type.poison,
        pve: {
            power: 9,
            dps: 11.25,
            window: 0.4,
            cooldown: 0.8,
            eps: 10,
        },
        pvp: {
            power: 6,
            turns: 1,
            cooldown: 1,
        },
    },
    airSlash: { 
        name: 'air slash',
        type: type.flying,
        pve: {
            power: 14,
            dps: 11.67,
            window: 1,
            cooldown: 1.2,
            eps: 8.33,
        },
        pvp: {
            power: 9,
            turns: 2,
            cooldown: 1.5,
        },
    },
    astonish: { 
        name: 'astonish',
        type: type.ghost,
        pve: {
            power: 8,
            dps: 7.27,
            window: 0.7,
            cooldown: 1.1,
            eps: 12.73,
        },
        pvp: {
            power: 5,
            turns: 2,
            cooldown: 1.5,
        },
    },
    bite: { 
        name: 'bite',
        type: type.dark,
        pve: {
            power: 6,
            dps: 12,
            window: 0.3,
            cooldown: 0.5,
            eps: 8,
        },
        pvp: {
            power: 4,
            turns: 0,
            cooldown: 0.5,
        },
    },
    bubble: { 
        name: 'bubble',
        type: type.water,
        pve: {
            power: 12,
            dps: 10,
            window: 0.75,
            cooldown: 1.2,
            eps: 11.67,
        },
        pvp: {
            power: 7,
            turns: 2,
            cooldown: 1.5,
        },
    },
    bugBite: { 
        name: 'bug bite',
        type: type.bug,
        pve: {
            power: 5,
            dps: 10,
            window: 0.25,
            cooldown: 0.5,
            eps: 12,
        },
        pvp: {
            power: 3,
            turns: 0,
            cooldown: 0.5,
        },
    },
    bulletPunch: { 
        name: 'bullet punch',
        type: type.steel,
        pve: {
            power: 9,
            dps: 10,
            window: 0.3,
            cooldown: 0.9,
            eps: 11.11,
        },
        pvp: {
            power: 6,
            turns: 1,
            cooldown: 1,
        },
    },
    bulletSeed: { 
        name: 'bullet seed',
        type: type.grass,
        pve: {
            power: 8,
            dps: 7.27,
            window: 0.85,
            cooldown: 1.1,
            eps: 12.73,
        },
        pvp: {
            power: 5,
            turns: 2,
            cooldown: 1.5,
        },
    },
    chargeBeam: { 
        name: 'charge beam',
        type: type.electric,
        pve: {
            power: 8,
            dps: 7.27,
            window: 0.85,
            cooldown: 1.1,
            eps: 13.64,
        },
        pvp: {
            power: 5,
            turns: 2,
            cooldown: 1.5,
        },
    },
    charm: { 
        name: 'charm',
        type: type.fairy,
        pve: {
            power: 20,
            dps: 13.33,
            window: 0.9,
            cooldown: 1.5,
            eps: 7.33,
        },
        pvp: {
            power: 16,
            turns: 2,
            cooldown: 1.5,
        },
    },
    confusion: { 
        name: 'confusion',
        type: type.psychic,
        pve: {
            power: 20,
            dps: 12.5,
            window: 0.6,
            cooldown: 1.6,
            eps: 9.38,
        },
        pvp: {
            power: 16,
            turns: 3,
            cooldown: 2,
        },
    },
    counter: { 
        name: 'counter',
        type: type.fighting,
        pve: {
            power: 12,
            dps: 13.33,
            window: 0.7,
            cooldown: 0.9,
            eps: 8.89,
        },
        pvp: {
            power: 8,
            turns: 1,
            cooldown: 1,
        },
    },
    cut: { 
        name: 'cut',
        type: type.normal,
        pve: {
            power: 5,
            dps: 10,
            window: 0.3,
            cooldown: 0.5,
            eps: 10,
        },
        pvp: {
            power: 3,
            turns: 0,
            cooldown: 0.5,
        },
    },
    dragonBreath: { 
        name: 'dragon breath',
        type: type.dragon,
        pve: {
            power: 6,
            dps: 12,
            window: 0.3,
            cooldown: 0.5,
            eps: 8,
        },
        pvp: {
            power: 4,
            turns: 0,
            cooldown: 0.5,
        },
    },
    dragonTail: { 
        name: 'dragon tail',
        type: type.dragon,
        pve: {
            power: 15,
            dps: 13.64,
            window: 0.85,
            cooldown: 1.1,
            eps: 8.18,
        },
        pvp: {
            power: 13,
            turns: 2,
            cooldown: 1.5,
        },
    },
    ember: { 
        name: 'ember',
        type: type.fire,
        pve: {
            power: 10,
            dps: 10,
            window: 0.6,
            cooldown: 1,
            eps: 10,
        },
        pvp: {
            power: 7,
            turns: 1,
            cooldown: 1,
        },
    },
    extrasensory: { 
        name: 'extrasensory',
        type: type.psychic,
        pve: {
            power: 12,
            dps: 10.91,
            window: 0.85,
            cooldown: 1.1,
            eps: 10.91,
        },
        pvp: {
            power: 8,
            turns: 2,
            cooldown: 1.5,
        },
    },
    feintAttack: { 
        name: 'feint attack',
        type: type.dark,
        pve: {
            power: 10,
            dps: 11.11,
            window: 0.75,
            cooldown: 0.90,
            eps: 10,
        },
        pvp: {
            power: 6,
            turns: 1,
            cooldown: 1,
        },
    },
    fireFang: { 
        name: 'fire fang',
        type: type.fire,
        pve: {
            power: 12,
            dps: 13.33,
            window: 0.64,
            cooldown: 0.90,
            eps: 8.89,
        },
        pvp: {
            power: 8,
            turns: 1,
            cooldown: 1,
        },
    },
    fireSpin: { 
        name: 'fire spin',
        type: type.fire,
        pve: {
            power: 14,
            dps: 12.73,
            window: 0.85,
            cooldown: 1.1,
            eps: 9.09,
        },
        pvp: {
            power: 9,
            turns: 2,
            cooldown: 1.5,
        },
    },
    frostBreath: { 
        name: 'frost breath',
        type: type.ice,
        pve: {
            power: 10,
            dps: 11.11,
            window: 0.45,
            cooldown: 0.9,
            eps: 8.89,
        },
        pvp: {
            power: 7,
            turns: 1,
            cooldown: 1,
        },
    },
    furyCutter: { 
        name: 'fury cutter',
        type: type.bug,
        pve: {
            power: 3,
            dps: 7.5,
            window: 0.1,
            cooldown: 0.4,
            eps: 15,
        },
        pvp: {
            power: 2,
            turns: 0,
            cooldown: 0.5,
        },
    },
    gust: { 
        name: 'gust',
        type: type.flying,
        pve: {
            power: 25,
            dps: 12.5,
            window: 0.9,
            cooldown: 2,
            eps: 10,
        },
        pvp: {
            power: 16,
            turns: 4,
            cooldown: 2,
        },
    },
    hex: { 
        name: 'hex',
        type: type.ghost,
        pve: {
            power: 10,
            dps: 8.33,
            window: 1,
            cooldown: 1.2,
            eps: 13.33,
        },
        pvp: {
            power: 6,
            turns: 2,
            cooldown: 1.5,
        },
    },
    hiddenPower: { 
        name: 'hidden power',
        type: type.normal,
        pve: {
            power: 15,
            dps: 10,
            window: 1.1,
            cooldown: 1.5,
            eps: 10,
        },
        pvp: {
            power: 9,
            turns: 2,
            cooldown: 1.5,
        },
    },
    hiddenPowerBug: { 
        name: 'hidden power - bug',
        type: type.bug,
        pve: {
            power: 15,
            dps: 10,
            window: 1.1,
            cooldown: 1.5,
            eps: 10,
        },
        pvp: {
            power: 9,
            turns: 2,
            cooldown: 1.5,
        },
    },
    hiddenPowerDark: { 
        name: 'hidden power - dark',
        type: type.dark,
        pve: {
            power: 15,
            dps: 10,
            window: 1.1,
            cooldown: 1.5,
            eps: 10,
        },
        pvp: {
            power: 9,
            turns: 2,
            cooldown: 1.5,
        },
    },
    hiddenPowerDragon: { 
        name: 'hidden power - dragon',
        type: type.dragon,
        pve: {
            power: 15,
            dps: 10,
            window: 1.1,
            cooldown: 1.5,
            eps: 10,
        },
        pvp: {
            power: 9,
            turns: 2,
            cooldown: 1.5,
        },
    },
    hiddenPowerElectric: { 
        name: 'hidden power - electric',
        type: type.electric,
        pve: {
            power: 15,
            dps: 10,
            window: 1.1,
            cooldown: 1.5,
            eps: 10,
        },
        pvp: {
            power: 9,
            turns: 2,
            cooldown: 1.5,
        },
    },
    hiddenPowerFighting: { 
        name: 'hidden power - fighting',
        type: type.fighting,
        pve: {
            power: 15,
            dps: 10,
            window: 1.1,
            cooldown: 1.5,
            eps: 10,
        },
        pvp: {
            power: 9,
            turns: 2,
            cooldown: 1.5,
        },
    },
    hiddenPowerFire: { 
        name: 'hidden power - fire',
        type: type.fire,
        pve: {
            power: 15,
            dps: 10,
            window: 1.1,
            cooldown: 1.5,
            eps: 10,
        },
        pvp: {
            power: 9,
            turns: 2,
            cooldown: 1.5,
        },
    },
    hiddenPowerFlying: { 
        name: 'hidden power - flying',
        type: type.flying,
        pve: {
            power: 15,
            dps: 10,
            window: 1.1,
            cooldown: 1.5,
            eps: 10,
        },
        pvp: {
            power: 9,
            turns: 2,
            cooldown: 1.5,
        },
    },
    hiddenPowerGhost: { 
        name: 'hidden power - ghost',
        type: type.ghost,
        pve: {
            power: 15,
            dps: 10,
            window: 1.1,
            cooldown: 1.5,
            eps: 10,
        },
        pvp: {
            power: 9,
            turns: 2,
            cooldown: 1.5,
        },
    },
    hiddenPowerGrass: { 
        name: 'hidden power - grass',
        type: type.grass,
        pve: {
            power: 15,
            dps: 10,
            window: 1.1,
            cooldown: 1.5,
            eps: 10,
        },
        pvp: {
            power: 9,
            turns: 2,
            cooldown: 1.5,
        },
    },
    hiddenPowerGround: { 
        name: 'hidden power - ground',
        type: type.ground,
        pve: {
            power: 15,
            dps: 10,
            window: 1.1,
            cooldown: 1.5,
            eps: 10,
        },
        pvp: {
            power: 9,
            turns: 2,
            cooldown: 1.5,
        },
    },
    hiddenPowerIce: { 
        name: 'hidden power - ice',
        type: type.ice,
        pve: {
            power: 15,
            dps: 10,
            window: 1.1,
            cooldown: 1.5,
            eps: 10,
        },
        pvp: {
            power: 9,
            turns: 2,
            cooldown: 1.5,
        },
    },
    hiddenPowerPoison: { 
        name: 'hidden power - poison',
        type: type.poison,
        pve: {
            power: 15,
            dps: 10,
            window: 1.1,
            cooldown: 1.5,
            eps: 10,
        },
        pvp: {
            power: 9,
            turns: 2,
            cooldown: 1.5,
        },
    },
    hiddenPowerPsychic: { 
        name: 'hidden power - psychic',
        type: type.psychic,
        pve: {
            power: 15,
            dps: 10,
            window: 1.1,
            cooldown: 1.5,
            eps: 10,
        },
        pvp: {
            power: 9,
            turns: 2,
            cooldown: 1.5,
        },
    },
    hiddenPowerRock: { 
        name: 'hidden power - rock',
        type: type.rock,
        pve: {
            power: 15,
            dps: 10,
            window: 1.1,
            cooldown: 1.5,
            eps: 10,
        },
        pvp: {
            power: 9,
            turns: 2,
            cooldown: 1.5,
        },
    },
    hiddenPowerSteel: { 
        name: 'hidden power - steel',
        type: type.poison,
        pve: {
            power: 15,
            dps: 10,
            window: 1.1,
            cooldown: 1.5,
            eps: 10,
        },
        pvp: {
            power: 9,
            turns: 2,
            cooldown: 1.5,
        },
    },
    hiddenPowerWater: { 
        name: 'hidden power - water',
        type: type.water,
        pve: {
            power: 15,
            dps: 10,
            window: 1.1,
            cooldown: 1.5,
            eps: 10,
        },
        pvp: {
            power: 9,
            turns: 2,
            cooldown: 1.5,
        },
    },
    iceFang: { 
        name: 'ice fang',
        type: type.ice,
        pve: {
            power: 12,
            dps: 8,
            window: 0.4,
            cooldown: 1.5,
            eps: 13.33,
        },
        pvp: {
            power: 8,
            turns: 1,
            cooldown: 1,
        },
    },
    iceShard: { 
        name: 'ice shard',
        type: type.ice,
        pve: {
            power: 12,
            dps: 10,
            window: 0.6,
            cooldown: 1.2,
            eps: 10,
        },
        pvp: {
            power: 9,
            turns: 2,
            cooldown: 1.5,
        },
    },
    incinerate: { 
        name: 'incinerate',
        type: type.fire,
        pve: {
            power: 29,
            dps: 12.61,
            window: 0.5,
            cooldown: 2.3,
            eps: 8.7,
        },
        pvp: {
            power: 15,
            turns: 4,
            cooldown: 2.5,
        },
    },
    infestation: { 
        name: 'infestation',
        type: type.bug,
        pve: {
            power: 10,
            dps: 9.09,
            window: 0.85,
            cooldown: 1.1,
            eps: 12.73,
        },
        pvp: {
            power: 6,
            turns: 2,
            cooldown: 1.5,
        },
    },
    ironTail: { 
        name: 'iron tail',
        type: type.steel,
        pve: {
            power: 15,
            dps: 13.64,
            window: 0.85,
            cooldown: 1.1,
            eps: 6.36,
        },
        pvp: {
            power: 9,
            turns: 2,
            cooldown: 1.5,
        },
    },
    karateChop: { 
        name: 'karate chop',
        type: type.fighting,
        pve: {
            power: 8,
            dps: 10,
            window: 0.6,
            cooldown: 0.8,
            eps: 12.5,
        },
        pvp: {
            power: 5,
            turns: 1,
            cooldown: 1,
        },
    },
    lick: { 
        name: 'lick',
        type: type.ghost,
        pve: {
            power: 5,
            dps: 10,
            window: 0.2,
            cooldown: 0.5,
            eps: 12,
        },
        pvp: {
            power: 3,
            turns: 0,
            cooldown: 0.5,
        },
    },
    lockOn: { 
        name: 'lock-on',
        type: type.normal,
        pve: {
            power: 1,
            dps: 3.33,
            window: 0.17,
            cooldown: 0.3,
            eps: 16.67,
        },
        pvp: {
            power: 1,
            turns: 0,
            cooldown: 0.5,
        },
    },
    lowKick: {
        name: 'low kick',
        type: type.fighting,
        pve: {
            power: 6,
            dps: 10,
            window: 0.3,
            cooldown: 0.6,
            eps: 10,
        },
        pvp: {
            power: 4,
            turns: 1,
            cooldown: 1,
        },
    },
    metalClaw: { 
        name: 'metal claw',
        type: type.steel,
        pve: {
            power: 8,
            dps: 11.43,
            window: 0.43,
            cooldown: 0.7,
            eps: 10,
        },
        pvp: {
            power: 5,
            turns: 1,
            cooldown: 1,
        },
    },
    mudShot: { 
        name: 'mud shot',
        type: type.ground,
        pve: {
            power: 5,
            dps: 8.33,
            window: 0.35,
            cooldown: 0.6,
            eps: 11.67,
        },
        pvp: {
            power: 3,
            turns: 1,
            cooldown: 1,
        },
    },
    mudSlap: { 
        name: 'mud slap',
        type: type.ground,
        pve: {
            power: 18,
            dps: 12.86,
            window: 1.15,
            cooldown: 1.4,
            eps: 8.57,
        },
        pvp: {
            power: 11,
            turns: 2,
            cooldown: 1.5,
        },
    },
    peck: { 
        name: 'peck',
        type: type.flying,
        pve: {
            power: 10,
            dps: 10,
            window: 0.45,
            cooldown: 1,
            eps: 10,
        },
        pvp: {
            power: 6,
            turns: 1,
            cooldown: 1,
        },
    },
    poisonJab: { 
        name: 'poison jab',
        type: type.poison,
        pve: {
            power: 10,
            dps: 12.5,
            window: 0.2,
            cooldown: 0.8,
            eps: 8.75,
        },
        pvp: {
            power: 7,
            turns: 1,
            cooldown: 1,
        },
    },
    poisonSting: { 
        name: 'poison sting',
        type: type.poison,
        pve: {
            power: 5,
            dps: 8.33,
            window: 0.38,
            cooldown: 0.6,
            eps: 11.67,
        },
        pvp: {
            power: 3,
            turns: 1,
            cooldown: 1,
        },
    },
    pound: { 
        name: 'pound',
        type: type.normal,
        pve: {
            power: 7,
            dps: 11.67,
            window: 0.34,
            cooldown: 0.6,
            eps: 10,
        },
        pvp: {
            power: 5,
            turns: 1,
            cooldown: 1,
        },
    },
    powderSnow: { 
        name: 'powder snow',
        type: type.ice,
        pve: {
            power: 6,
            dps: 6,
            window: 0.85,
            cooldown: 1,
            eps: 15,
        },
        pvp: {
            power: 5,
            turns: 1,
            cooldown: 1,
        },
    },
    present: { 
        name: 'present',
        type: type.normal,
        pve: {
            power: 5,
            dps: 3.85,
            window: 1.1,
            cooldown: 1.3,
            eps: 15.38,
        },
        pvp: {
            power: 3,
            turns: 2,
            cooldown: 1.5,
        },
    },
    psychoCut: { 
        name: 'psycho cut',
        type: type.psychic,
        pve: {
            power: 5,
            dps: 8.33,
            window: 0.37,
            cooldown: 0.6,
            eps: 13.33,
        },
        pvp: {
            power: 3,
            turns: 1,
            cooldown: 1,
        },
    },
    quickAttack: { 
        name: 'quick attack',
        type: type.normal,
        pve: {
            power: 8,
            dps: 10,
            window: 0.25,
            cooldown: 0.8,
            eps: 12.5,
        },
        pvp: {
            power: 5,
            turns: 1,
            cooldown: 1,
        },
    },
    razorLeaf: { 
        name: 'razor leaf',
        type: type.grass,
        pve: {
            power: 13,
            dps: 13,
            window: 0.6,
            cooldown: 1,
            eps: 7,
        },
        pvp: {
            power: 10,
            turns: 1,
            cooldown: 1,
        },
    },
    rockSmash: { 
        name: 'rock smash',
        type: type.fighting,
        pve: {
            power: 15,
            dps: 11.54,
            window: 0.5,
            cooldown: 1.3,
            eps: 7.69,
        },
        pvp: {
            power: 9,
            turns: 2,
            cooldown: 1.5,
        },
    },
    rockThrow: { 
        name: 'rock throw',
        type: type.rock,
        pve: {
            power: 12,
            dps: 13.33,
            window: 0.5,
            cooldown: 0.9,
            eps: 7.78,
        },
        pvp: {
            power: 8,
            turns: 1,
            cooldown: 1,
        },
    },
    scratch: { 
        name: 'scratch',
        type: type.normal,
        pve: {
            power: 6,
            dps: 12,
            window: 0.3,
            cooldown: 0.5,
            eps: 8,
        },
        pvp: {
            power: 4,
            turns: 0,
            cooldown: 0.5,
        },
    },
    shadowClaw: { 
        name: 'shadow claw',
        type: type.ghost,
        pve: {
            power: 9,
            dps: 12.86,
            window: 0.25,
            cooldown: 0.7,
            eps: 8.57,
        },
        pvp: {
            power: 6,
            turns: 1,
            cooldown: 1,
        },
    },
    smackDown: { 
        name: 'smack down',
        type: type.rock,
        pve: {
            power: 16,
            dps: 13.33,
            window: 0.5,
            cooldown: 1.2,
            eps: 6.67,
        },
        pvp: {
            power: 12,
            turns: 2,
            cooldown: 1.5,
        },
    },
    snarl: { 
        name: 'snarl',
        type: type.dark,
        pve: {
            power: 12,
            dps: 10.91,
            window: 0.85,
            cooldown: 1.1,
            eps: 12.73,
        },
        pvp: {
            power: 5,
            turns: 2,
            cooldown: 1.5,
        },
    },
    spark: { 
        name: 'spark',
        type: type.electric,
        pve: {
            power: 6,
            dps: 8.57,
            window: 0.3,
            cooldown: 0.7,
            eps: 12.86,
        },
        pvp: {
            power: 4,
            turns: 1,
            cooldown: 1,
        },
    },
    splash: { 
        name: 'splash',
        type: type.water,
        pve: {
            power: 0,
            dps: 0,
            window: 1.03,
            cooldown: 1.73,
            eps: 11.56,
        },
        pvp: {
            power: 0,
            turns: 3,
            cooldown: 2,
        },
    },
    steelWing: { 
        name: 'steel wing',
        type: type.steel,
        pve: {
            power: 11,
            dps: 13.75,
            window: 0.5,
            cooldown: 0.8,
            eps: 7.5,
        },
        pvp: {
            power: 7,
            turns: 1,
            cooldown: 1,
        },
    },
    struggleBug: { 
        name: 'struggle bug',
        type: type.bug,
        pve: {
            power: 15,
            dps: 10,
            window: 1.2,
            cooldown: 1.5,
            eps: 10,
        },
        pvp: {
            power: 9,
            turns: 2,
            cooldown: 1.5,
        },
    },
    suckerPunch: { 
        name: 'sucker punch',
        type: type.dark,
        pve: {
            power: 7,
            dps: 10,
            window: 0.3,
            cooldown: 0.7,
            eps: 11.43,
        },
        pvp: {
            power: 5,
            turns: 1,
            cooldown: 1,
        },
    },
    tackle: { 
        name: 'tackle',
        type: type.normal,
        pve: {
            power: 5,
            dps: 10,
            window: 0.3,
            cooldown: 0.5,
            eps: 10,
        },
        pvp: {
            power: 3,
            turns: 0,
            cooldown: 0.5,
        },
    },
    takeDown: { 
        name: 'take down',
        type: type.normal,
        pve: {
            power: 8,
            dps: 6.67,
            window: 0.95,
            cooldown: 1.2,
            eps: 8.33,
        },
        pvp: {
            power: 5,
            turns: 2,
            cooldown: 1.5,
        },
    },
    thunderFang: { 
        name: 'thunder fang',
        type: type.electric,
        pve: {
            power: 12,
            dps: 10,
            window: 0.4,
            cooldown: 1.2,
            eps: 13.33,
        },
        pvp: {
            power: 8,
            turns: 1,
            cooldown: 1,
        },
    },
    thunderShock: {
        name: 'thunder shock',
        type: type.electric,
        pve: {
            power: 5,
            dps: 8.33,
            window: 0.3,
            cooldown: 0.6,
            eps: 13.33,
        },
        pvp: {
            power: 3,
            turns: 1,
            cooldown: 1,
        },
    },
    transform: { 
        name: 'tranform',
        type: type.normal,
        pve: {
            power: 0,
            dps: 0,
            window: 0.3,
            cooldown: 2.23,
            eps: 0,
        },
        pvp: {
            power: 0,
            turns: 2,
            cooldown: 1.5,
        },
    },
    vineWhip: { 
        name: 'vine whip',
        type: type.grass,
        pve: {
            power: 7,
            dps: 11.67,
            window: 0.35,
            cooldown: 0.6,
            eps: 10,
        },
        pvp: {
            power: 5,
            turns: 1,
            cooldown: 1,
        },
    },
    voltSwitch: { 
        name: 'volt switch',
        type: type.electric,
        pve: {
            power: 14,
            dps: 8.75,
            window: 0.7,
            cooldown: 1.6,
            eps: 13.13,
        },
        pvp: {
            power: 12,
            turns: 3,
            cooldown: 2,
        },
    },
    waterGun: { 
        name: 'water gun',
        type: type.water,
        pve: {
            power: 5,
            dps: 10,
            window: 0.3,
            cooldown: 0.5,
            eps: 10,
        },
        pvp: {
            power: 3,
            turns: 0,
            cooldown: 0.5,
        },
    },
    waterfall: { 
        name: 'waterfall',
        type: type.water,
        pve: {
            power: 16,
            dps: 13.33,
            window: 0.95,
            cooldown: 1.2,
            eps: 6.67,
        },
        pvp: {
            power: 12,
            turns: 2,
            cooldown: 1.5,
        },
    },
    wingAttack: { 
        name: 'wing attack',
        type: type.flying,
        pve: {
            power: 8,
            dps: 10,
            window: 0.55,
            cooldown: 0.8,
            eps: 11.25,
        },
        pvp: {
            power: 5,
            turns: 1,
            cooldown: 1,
        },
    },
    yawn: { 
        name: 'yawn',
        type: type.normal,
        pve: {
            power: 0,
            dps: 0,
            window: 1.4,
            cooldown: 1.7,
            eps: 8.82,
        },
        pvp: {
            power: 0,
            turns: 3,
            cooldown: 2,
        },
    },
    zenHeadbutt: { 
        name: 'zen headbutt',
        type: type.psychic,
        pve: {
            power: 12,
            dps: 10.91,
            window: 0.85,
            cooldown: 1.1,
            eps: 9.09,
        },
        pvp: {
            power: 8,
            turns: 2,
            cooldown: 1.5,
        },
    }
}
