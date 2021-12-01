const pokemonJSONState = {
    loading: false,
    pokemonArray: null,
}

export default function pokedexReducer(state = pokemonJSONState, action) {

    switch (action.type) {

        case 'JSONConfiguring': {
            return {
                ...state,
                loading: action.value,
            }
        };
        case 'loadJSON': {
            return {
                ...state,
                pokemonArray: action.value
            }
        };

        default:
            return state;
    }
}