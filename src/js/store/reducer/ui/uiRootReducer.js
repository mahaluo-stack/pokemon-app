import { combineReducers } from 'redux';
import mainComponentReducer from './mainComponentReducer';
import partialComponentReducer from './partialComponentReducer';
import pokemonGridReducer from './pokemonGridReducer';

export const uiRoot = combineReducers({
    mains: mainComponentReducer,
    partials: partialComponentReducer,
    pokemonGridState: pokemonGridReducer,
});
