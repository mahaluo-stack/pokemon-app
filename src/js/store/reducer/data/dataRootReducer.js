import { combineReducers } from 'redux';
import userReducer from './userReducer';
import pokemonJSONReducer from './pokemonJSONReducer';

export const dataRoot = combineReducers({
    userState: userReducer,
    pokemonJSONState: pokemonJSONReducer,
});
