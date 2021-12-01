import { chargeMove } from './chargeMove';
import { fastMove } from './fastMove';

export const eliteMove = {
    ['venusaur']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.frenzyPlant,
        },
    },
    ['charmeleon']: {
        fastMoves: {
            1: fastMove.scratch
        },
        chargeMoves: null,
    },
    ['charizard']: {
        fastMoves: {
            1: fastMove.ember,
            2: fastMove.wingAttack,
            3: fastMove.dragonBreath,
        },
        chargeMoves: {
            1: chargeMove.blastBurn,
            2: chargeMove.flamethrower,
        },
    },
    ['blastoise']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.hydroCannon,
        },
    },
    ['butterfree']: {
        fastMoves: {
            1: fastMove.bugBite,
        },
        chargeMoves: null,
    },
    ['beedrill']: {
        fastMoves: {
            1: fastMove.bugBite,
        },
        chargeMoves: {
            1: chargeMove.drillRun,
        },
    },
    ['pidgeot']: {
        fastMoves: {
            1: fastMove.wingAttack,
            2: fastMove.gust,
        },
        chargeMoves: {
            1: chargeMove.airCutter,
        },
    },
    ['spearow']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.twister,
        },
    },
    ['fearow']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.twister,
        },
    },
    ['ekans']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.gunkShot,
        },
    },
    ['pikachu']: {
        fastMoves: {
            1: fastMove.present,
        },
        chargeMoves: {
            1: chargeMove.surf,
            2: chargeMove.thunder,
        },
    },
    ['raichu']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.thunder,
        },
    },
    ['sandshrew']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.rockTomb,
        },
    },
    ['nidoking']: {
        fastMoves: {
            1: fastMove.furyCutter,
        },
        chargeMoves: null,
    },
    ['clefable']: {
        fastMoves: {
            1: fastMove.pound,
        },
        chargeMoves: null
    },
    ['ninetales']: {
        fastMoves: {
            1: fastMove.ember,
        },
        chargeMoves: {
            1: chargeMove.fireBlast,
            2: chargeMove.flamethrower,
        },
    },
    ['jigglypuff']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.playRough,
            2: chargeMove.bodySlam,
        },
    },
    ['zubat']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.sludgeBomb,
        },
    },
    ['golbat']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.ominousWind,
        },
    },
    ['parasect']: {
        fastMoves: {
            1: fastMove.bugBite,
        },
        chargeMoves: null,
    },
    ['venomoth']: {
        fastMoves: {
            1: fastMove.bugBite,
        },
        chargeMoves: null,
    },
    ['meowth']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.bodySlam,
        },
    },
    ['persian']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.nightSlash,
        },
    },
    ['primeApe']: {
        fastMoves: {
            1: fastMove.karateChop,
        },
        chargeMoves: {
            1: chargeMove.crossChop,
        },
    },
    ['arcanine']: {
        fastMoves: {
            1: fastMove.bite,
        },
        chargeMoves: {
            1: chargeMove.bulldoze,
        },
    },
    ['poliwhirl']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.scald,
        },
    },
    ['poliwrath']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.submission,
        },
    },
    ['alakazam']: {
        fastMoves: {
            1: fastMove.counter,
        },
        chargeMoves: {
            1: chargeMove.dazzlingGleam,
            2: chargeMove.psychic,
        },
    },
    ['machop']: {
        fastMoves: {
            1: fastMove.lowKick,
        },
        chargeMoves: null,
    },
    ['machoke']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.crossChop,
        },
    },
    ['machamp']: {
        fastMoves: {
            1: fastMove.karateChop,
        },
        chargeMoves: {
            1: chargeMove.stoneEdge,
            2: chargeMove.submission,
            3: chargeMove.payback,
        },
    },
    ['weepinbell']: {
        fastMoves: {
            1: fastMove.razorLeaf,
        },
        chargeMoves: null,
    },
    ['graveler']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.rockSlide,
        },
    },
    ['ponyta']: {
        fastMoves: {
            1: fastMove.ember,
        },
        chargeMoves: null,
    },
    ['rapidash']: {
        fastMoves: {
            1: fastMove.ember,
        },
        chargeMoves: null,
    },
    ['farfetch\'d']: {
        fastMoves: {
            1: fastMove.cut,
        },
        chargeMoves: null,
    },
    ['doduo']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.swift,
        },
    },
    ['dodrio']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.airCutter,

        },
    },
    ['seel']: {
        fastMoves: {
            1: fastMove.waterGun,
        },
        chargeMoves: {
            1: chargeMove.aquaJet,
        },
    },
    ['dewgong']: {
        fastMoves: {
            1: fastMove.iceShard,
        },
        chargeMoves: {
            1: chargeMove.aquaJet,
            2: chargeMove.icyWind,
        },
    },
    ['muk']: {
        fastMoves: {
            1: fastMove.lick,
        },
        chargeMoves: null,
    },
    ['cloyster']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.blizzard,
        },
    },
    ['gastly']: {
        fastMoves: {
            1: fastMove.suckerPunch,
        },
        chargeMoves: {
            1: chargeMove.ominousWind,
        },
    },
    ['haunter']: {
        fastMoves: {
            1: fastMove.lick,
        },
        chargeMoves: null,
    },
    ['gengar']: {
        fastMoves: {
            1: fastMove.lick,
        },
        chargeMoves: {
            1: chargeMove.sludgeWave,
            2: chargeMove.darkPulse,
            3: chargeMove.psychic,
            4: chargeMove.shadowPunch,
        },
    },
    ['onyx']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.ironHead,
            2: chargeMove.rockSlide,
        },
    },
    ['hypno']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.psyshock,
        },
    },
    ['kingler']: {
        fastMoves: {
            1: fastMove.mudShot,
        },
        chargeMoves: null,
    },
    ['voltorb']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.signalBeam,
        },
    },
    ['electrode']: {
        fastMoves: {
            1: fastMove.tackle,
        },
        chargeMoves: null,
    },
    ['exeggutor']: {
        fastMoves: {
            1: fastMove.zenHeadbutt,
        },
        chargeMoves: null,
    },
    ['hitmonlee']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.stomp,
            2: chargeMove.brickBreak,
        },
    },
    ['hitmonchan']: {
        fastMoves: {
            1: fastMove.rockSmash,
        },
        chargeMoves: {
            1: chargeMove.brickBreak,
        },
    },
    ['lickitung']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.bodySlam,
        },
    },
    ['rhydon']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.megahorn,
        },
    },
    ['tangela']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.powerWhip,
        },
    },
    ['kangaskhan']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.stomp,
            2: chargeMove.brickBreak,
        },
    },
    ['seadra']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.blizzard,
        },
    },
    ['seaking']: {
        fastMoves: {
            1: fastMove.poisonJab,
        },
        chargeMoves: {
            1: chargeMove.icyWind,
            2: chargeMove.drillRun,
        },
    },
    ['starmie']: {
        fastMoves: {
            1: fastMove.tackle,
        },
        chargeMoves: null,
    },
    ['scyther']: {
        fastMoves: {
            1: fastMove.steelWing,
        },
        chargeMoves: {
            1: chargeMove.bugBuzz,
        },
    },
    ['jynx']: {
        fastMoves: {
            1: fastMove.pound,
        },
        chargeMoves: {
            1: chargeMove.icePunch,
        },
    },
    ['pinsir']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.submission,
        },
    },
    ['gyarados']: {
        fastMoves: {
            1: fastMove.dragonTail,
        },
        chargeMoves: {
            1: chargeMove.dragonPulse,
            2: chargeMove.aquaTail,
        },
    },
    ['lapras']: {
        fastMoves: {
            1: fastMove.iceShard,
        },
        chargeMoves: {
            1: chargeMove.dragonPulse,
            2: chargeMove.iceBeam,
        },
    },
    ['eevee']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.bodySlam,
            2: chargeMove.lastResort,
        },
    },
    ['vaporeon']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.lastResort,
            2: chargeMove.scald,
        },
    },
    ['jolteon']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.lastResort,
            2: chargeMove.zapCannon,
        },
    },
    ['flareon']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.heatWave,
            2: chargeMove.lastResort,
            3: chargeMove.superpower,
        },
    },
    ['porygon']: {
        fastMoves: {
            1: fastMove.zenHeadbutt,
            2: fastMove.tackle,
        },
        chargeMoves: {
            1: chargeMove.discharge,
            2: chargeMove.signalBeam,
            3: chargeMove.psybeam,
        },
    },
    ['omanyte']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.rockTomb,
            2: chargeMove.brine,
        },
    },
    ['omastar']: {
        fastMoves: {
            1: fastMove.rockThrow,
        },
        chargeMoves: {
            1: chargeMove.rockSlide,
        },
    },
    ['kabutops']: {
        fastMoves: {
            1: fastMove.furyCutter,
        },
        chargeMoves: null,
    },
    ['snorlax']: {
        fastMoves: {
            1: fastMove.yawn,
        },
        chargeMoves: null,
    },
    ['articuno']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.hurricane,
        },
    },
    ['zapdos']: {
        fastMoves: {
            1: fastMove.thunderShock,
        },
        chargeMoves: null,
    },
    ['moltres']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.skyAttack,
        },
    },
    ['dragonite']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.dragonPulse,
            2: chargeMove.dracoMeteor,
        },
    },
    ['mewtwo']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.shadowBall,
            2: chargeMove.psystrike,
            3: chargeMove.hyperBeam,
        },
    },
    ['armored mewtwo']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.psystrike,
        },
    },
    ['meganium']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.frenzyPlant,
        },
    },
    ['typhlosion']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.blastBurn,
        },
    },
    ['feraligatr']: {
        fastMoves: {
            1: fastMove.waterGun,
        },
        chargeMoves: {
            1: chargeMove.hydroCannon,
        },
    },
    ['cleffa']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.psychic,
            2: chargeMove.bodySlam,
        },
    },
    ['igglybuff']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.bodySlam,
        },
    },
    ['togepi']: {
        fastMoves: {
            1: fastMove.zenHeadbutt,
        },
        chargeMoves: null,
    },
    ['togetic']: {
        fastMoves: {
            1: fastMove.steelWing,
            2: fastMove.zenHeadbutt,
        },
        chargeMoves: null,
    },
    ['ampharos']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.dragonPulse,
        },
    },
    ['politoed']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.earthquake,
        },
    },
    ['espeon']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.lastResort,
            2: chargeMove.shadowBall,
        },
    },
    ['umbreon']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.lastResort,
        },
    },
    ['kingdra']: {
        fastMoves: {
            1: fastMove.waterGun,
        },
        chargeMoves: null,
    },
    ['smoochum']: {
        fastMoves: {
            1: fastMove.frostBreath,
        },
        chargeMoves: null,
    },
    ['elekid']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.thunderbolt,
        },
    },
    ['magby']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.flamethrower,
        },
    },
    ['suicune']: {
        fastMoves: {
            1: fastMove.hiddenPower,
        },
        chargeMoves: null,
    },
    ['tyranitar']: {
        fastMoves: {
            1: fastMove.smackDown,
        },
        chargeMoves: null,
    },
    ['lugia']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.aeroblast,
        },
    },
    ['ho-oh']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.earthquake,
        },
    },
    ['sceptile']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.frenzyPlant,
        },
    },
    ['blaziken']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.blastBurn,
            2: chargeMove.stoneEdge,
        },
    },
    ['swampert']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.hydroCannon,
        },
    },
    ['shiftry']: {
        fastMoves: {
            1: fastMove.bulletSeed,
        },
        chargeMoves: null,
    },
    ['gardevoir']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.synchronise,
        },
    },
    ['breloom']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.grassKnot,
        },
    },
    ['slaking']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.bodySlam,
        },
    },
    ['shedinja']: {
        fastMoves: {
            1: fastMove.struggleBug,
        },
        chargeMoves: null,
    },
    ['flygon']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.earthPower,
        },
    },
    ['altaria']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.moonblast,
        },
    },
    ['salamence']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.outrage,
        },
    },
    ['metagross']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.meteorMash,
        },
    },
    ['groudon']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.firePunch,
        },
    },
    ['rayquaza']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.hurricane,
        },
    },
    ['infernape']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.blastBurn,
        },
    },
    ['empoleon']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.hydroCannon,
        },
    },
    ['torterra']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.frenzyPlant,
        },
    },
    ['roserade']: {
        fastMoves: {
            1: fastMove.bulletSeed,
        },
        chargeMoves: {
            1: chargeMove.weatherBallFire,
        },
    },
    ['lickilicky']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.bodySlam,
        },
    },
    ['rhyperior']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.rockWrecker,
        },
    },
    ['electivire']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.flamethrower,
        },
    },
    ['magmortar']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.thunderbolt,
        },
    },
    ['leafeon']: {
        fastMoves: {
            1: fastMove.bulletSeed,
        },
        chargeMoves: {
            1: chargeMove.lastResort,
        },
    },
    ['glaceon']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.lastResort,
            2: chargeMove.waterPulse,
        },
    },
    ['mamoswine']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.ancientPower,
        },
    },
    ['porygon-z']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.triAttack,
        },
    },
    ['gallade']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.synchronise,
        },
    },
    ['dusknoir']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.shadowBall,
        },
    },
    ['cresselia']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.grassKnot,
        },
    },
    ['darkrai']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.sludgeBomb,
        },
    },
    ['serperior']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.frenzyPlant,
        },
    },
    ['emboar']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.blastBurn,
        },
    },
    ['samurott']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.hydroCannon,
        },
    },
    ['cobalion']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.sacredSword,
        },
    },
    ['talonflame']: {
        fastMoves: {
            1: fastMove.incinerate,
        },
        chargeMoves: null,
    },
    ['alolan marowak']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.shadowBone,
        },
    },

}