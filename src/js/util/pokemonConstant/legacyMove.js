import { chargeMove } from './chargeMove';
import { fastMove } from './fastMove';

export const legacyMove = {
    ['chansey']: {
        fastMoves: null,
        chargeMove: {
            1: chargeMove.psybeam,
        },
    },
    ['tangela']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.return,
        },
    },
    ['kirlia']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.drainingKiss,
        },
    },
    ['bidoof']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.shadowBall,
            2: chargeMove.thunderbolt,
            3: chargeMove.iceBeam,
            4: chargeMove.superpower,
        },
    },
    ['garchomp']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.earthPower,
        },
    },
    ['gastrodon']: {
        fastMoves: null,
        chargeMoves: {
            1: chargeMove.earthquake,
        },
    },
    ['grimer']: {
        fastMoves: {
            1: fastMove.acid,
        },
        chargeMoves: null,
    },
    ['muk']: {
        fastMoves: {
            1: fastMove.acid,
        },
        chargeMoves: null,
    },
    ['koffing']: {
        fastMoves: {
            1: fastMove.acid,
        },
        chargeMoves: null,
    },
    ['weezing']: {
        fastMoves: {
            1: fastMove.acid,
        },
        chargeMoves: null,
    },
    ['shedinja']: {
        fastMoves: {
            1: fastMove.bite,
        },
        chargeMoves: null,
    },
    ['lileep']: {
        fastMoves: {
            1: fastMove.bulletSeed,
        },
        chargeMoves: null,
    },
    ['delibird']: {
        fastMoves: {
            1: fastMove.iceShard,
            2: fastMove.quickAttack,
        },
        chargeMoves: null,
    },
    ['diglett']: {
        fastMoves: {
            1: fastMove.mudShot,
        },
        chargeMoves: null,
    },
    ['dugtrio']: {
        fastMoves: {
            1: fastMove.mudShot,
        },
        chargeMoves: null,
    },
    ['graveler']: {
        fastMoves: {
            1: fastMove.mudShot,
        },
        chargeMoves: null,
    },
    ['golem']: {
        fastMoves: {
            1: fastMove.mudShot,
        },
        chargeMoves: null,
    },
    ['staryu']: {
        fastMoves: {
            1: fastMove.quickAttack,
        },
        chargeMoves: null,
    },
    ['starmie']: {
        fastMoves: {
            1: fastMove.quickAttack,
        },
        chargeMoves: null,
    },
    ['pichu']: {
        fastMoves: {
            1: fastMove.quickAttack,
        },
        chargeMoves: null,
    },
}
