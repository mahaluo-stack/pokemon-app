import 'regenerator-runtime/runtime.js';
const pokemonJSON = require('../../../util/JSON/pokemon.json');

export const pokemonJSONAction = {
    loadJSON,
} 


function loadJSON() {
    return async dispatch => {

        dispatch({ type: 'JSONConfiguring', value: true});
        dispatch({ type: 'loadJSON', value: pokemonJSON });

        setTimeout(() => {

            // doing all this loading and configuring takes soooo long, 200 dramatic milliseconds later....
            dispatch({ type: 'JSONConfiguring', value: false});
        }, 200);
    }
}