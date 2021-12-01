const superEffective = 1.6;
const resistant = 0.625;
const nonEffective = 0.391;

export const type = {
    bug: {
        colour: '#6A994E',
        name: 'bug',
        superEffective: { 
            grass: superEffective, 
            dark: superEffective, 
            psychic: superEffective 
        },
        resists: { 
            fighting: resistant, 
            grass: resistant, 
            ground: resistant 
        },
        nonEffective: { 
            fighting: resistant, 
            fire: resistant, 
            flying: resistant, 
            fairy: resistant, 
            ghost: resistant, 
            poison: resistant, 
            steel: resistant 
        },
        weakness: {
            fire: superEffective,
            flying: superEffective,
            rock: superEffective,
        },
    },
    dark: {
        colour: '#0B090A',
        name: 'dark',
        superEffective: {
            ghost: superEffective,
            psychic: superEffective,
        },
        resists: {
            dark: resistant,
            ghost: resistant,
            psychic: nonEffective,
        },
        nonEffective: {
            dark: resistant,
            fighting: resistant,
            fairy: resistant,
        },
        weakness: {
            bug: superEffective,
            fighting: superEffective,
            fairy: superEffective,
        },
    },
    dragon: {
        colour: '#023E8A',
        name: 'dragon',
        superEffective: {
            dragon: superEffective,
        },
        resists: {
            electric: resistant,
            fire: resistant,
            grass: resistant,
            water: resistant,
        },
        nonEffective: {
            steel: resistant,
            fairy: nonEffective,
        },
        weakness: {
            dragon: superEffective,
            fairy: superEffective,
            ice: superEffective,
        },
    },
    electric: {
        colour: '#FFBA08',
        name: 'electric',
        superEffective: {
            flying: superEffective,
            water: superEffective,
        },
        resists: {
            electric: resistant,
            flying: resistant,
            steel: resistant,
        },
        nonEffective: {
            dragon: resistant,
            electric: resistant,
            grass: resistant,
            ground: nonEffective,
        },
        weakness: {
            ground: superEffective,
        },
    },
    fairy: {
        colour: '#FF758F',
        name: 'fairy',
        superEffective: {
            dark: superEffective,
            dragon: superEffective,
            fighting: superEffective,
        },
        resists: {
            bug: resistant,
            dark: resistant,
            fighting: resistant,
            dragon: nonEffective,
        },
        nonEffective: {
            fire: resistant,
            poison: resistant,
            steel: resistant,
        },
        weakness: {
            poison: superEffective,
            steel: superEffective,
        },
    },
    fighting: {
        colour: '#D00000',
        name: 'fighting',
        superEffective: {
            dark: superEffective,
            ice: superEffective,
            normal: superEffective,
            rock: superEffective,
            steel: superEffective,
        },
        resists: {
            bug: resistant,
            dark: resistant,
            rock: resistant,
        },
        nonEffective: {
            bug: resistant,
            fairy: resistant,
            flying: resistant,
            poison: resistant,
            psychic: resistant,
            ghost: nonEffective,
        },
        weakness: {
            fairy: superEffective,
            flying: superEffective,
            psychic: superEffective,
        },
    },
    fire: {
        colour: '#E85D04',
        name: 'fire',
        superEffective: {
            bug: superEffective,
            grass: superEffective,
            ice: superEffective,
            steel: superEffective
        },
        resists: {
            bug: resistant,
            fire: resistant,
            fairy: resistant,
            grass: resistant,
            ice: resistant,
            steel: resistant,
        },
        nonEffective: {
            dragon: resistant,
            fire: resistant,
            rock: resistant,
            water: resistant,
        },
        weakness: {
            ground: superEffective,
            rock: superEffective,
            water: superEffective,
        },
    },
    flying: {
        colour: '#B6CCFE',
        name: 'flying',
        superEffective: {
            bug: superEffective,
            fighting: superEffective,
            grass: superEffective,
        },
        resists: {
            bug: resistant,
            fighting: resistant,
            grass: resistant,
            ground: nonEffective,
        },
        nonEffective: {
            electric: resistant,
            rock: resistant,
            steel: resistant,
        },
        weakness: {
            electric: superEffective,
            ice: superEffective,
            rock: superEffective,
        },
    },
    ghost: {
        colour: '#10002B',
        name: 'ghost',
        superEffective: {
            ghost: superEffective,
            psychic: superEffective,
        },
        resists: {
            bug: resistant,
            poison: resistant,
            fighting: nonEffective,
            normal: nonEffective,
        },
        nonEffective: {
            dark: resistant,
            normal: nonEffective,
        },
        weakness: {
            dark: superEffective,
            ghost: superEffective,
        },
    },
    grass: {
        colour: '#008000',
        name: 'grass',
        superEffective: {
            ground: superEffective,
            rock: superEffective,
            water: superEffective,
        },
        resists: {
            electric: resistant,
            grass: resistant,
            ground: resistant,
            water: resistant,
        },
        nonEffective: {
            bug: resistant,
            dragon: resistant,
            fire: resistant,
            flying: resistant,
            grass: resistant,
            poison: resistant,
            steel: resistant,
        },
        weakness: {
            bug: superEffective,
            fire: superEffective,
            flying: superEffective,
            ice: superEffective,
            poison: superEffective,
        },
    },
    ground: {
        colour: '#CA5310',
        name: 'ground',
        superEffective: {
            electric: superEffective,
            fire: superEffective,
            poison: superEffective,
            rock: superEffective,
            steel: superEffective,
        },
        resists: {
            poison: resistant,
            rock: resistant,
            electric: nonEffective,
        },
        nonEffective: {
            bug: resistant,
            grass: resistant,
            flying: nonEffective,
        },
        weakness: {
            grass: superEffective,
            ice: superEffective,
            water: superEffective,
        },
    },
    ice: {
        colour: '#00B4D8',
        name: 'ice',
        superEffective: {
            dragon: superEffective,
            flying: superEffective,
            grass: superEffective,
            ground: superEffective,
        },
        resists: {
            ice: resistant,
        },
        nonEffective: {
            fire: resistant,
            ice: resistant,
            steel: resistant,
            water: resistant,
        },
        weakness: {
            fighting: superEffective,
            fire: superEffective,
            rock: superEffective,
            steel: superEffective,
        },
    },
    normal: {
        colour: '#8B8C89',
        name: 'normal',
        superEffective: {

        },
        resists: {
            ghost: nonEffective,
        },
        nonEffective: {
            rock: resistant,
            steel: resistant,
            ghost: nonEffective,
        },
        weakness: {
            fighting: superEffective,
        },
    },
    poison: {
        colour: '#461177',
        name: 'poison',
        superEffective: {
            grass: superEffective,
            fairy: superEffective,
        },
        resists: {
            bug: resistant,
            fighting: resistant,
            fairy: resistant,
            grass: resistant,
            poison: resistant,
        },
        nonEffective: {
            ghost: resistant,
            ground: resistant,
            poison: resistant,
            rock: resistant,
            steel: nonEffective,
        },
        weakness: {
            ground: superEffective,
            psychic: superEffective,
        },
    },
    psychic: {
        colour: '#EF233C',
        name: 'psychic',
        superEffective: {
            fighting: superEffective,
            poison: superEffective,
        },
        resists: {
            fighting: resistant,
            psychic: resistant,
        },
        nonEffective: {
            psychic: resistant,
            steel: resistant,
            dark: nonEffective,
        },
        weakness: {
            bug: superEffective,
            dark: superEffective,
            ghost: superEffective,
        },
    },
    rock: {
        colour: '#8A5A44',
        name: 'rock',
        superEffective: {
            bug: superEffective,
            fire: superEffective,
            flying: superEffective,
            ice: superEffective,
        },
        resists: {
            fire: resistant,
            flying: resistant,
            normal: resistant,
            poison: resistant,
        },
        nonEffective: {
            fighting: resistant,
            ground: resistant,
            steel: resistant,
        },
        weakness: {
            fighting: superEffective,
            grass: superEffective,
            ground: superEffective,
            steel: superEffective,
            water: superEffective,
        },
    },
    steel: {
        colour: '#036666',
        name: 'steel',
        superEffective: {
            fairy: superEffective,
            ice: superEffective,
            rock: superEffective,
        },
        resists: {
            bug: resistant,
            dragon: resistant,
            flying: resistant,
            fairy: resistant,
            grass: resistant,
            ice: resistant,
            normal: resistant,
            psychic: resistant,
            rock: resistant,
            steel: resistant,
            poison: nonEffective,
        },
        nonEffective: {
            electric: resistant,
            fire: resistant,
            steel: resistant,
            water: resistant,
        },
        weakness: {
            fighting: superEffective,
            fire: superEffective,
            ground: superEffective,
        },
    },
    water: {
        colour: '#033270',
        name: 'water',
        superEffective: {
            fire: superEffective,
            ground: superEffective,
            rock: superEffective,
        },
        resists: {
            fire: resistant,
            ice: resistant,
            steel: resistant,
            water: resistant,
        },
        nonEffective: {
            dragon: resistant,
            grass: resistant,
            water: resistant,
        },
        weakness: {
            electric: superEffective,
            grass: superEffective,
        },
    }
}
