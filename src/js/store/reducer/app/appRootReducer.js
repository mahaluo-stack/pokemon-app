import { combineReducers } from 'redux';
import pageReducer from './pageReducer';
import windowReducer from './windowReducer';

export const appRoot = combineReducers({
    pageState: pageReducer,
    windowState: windowReducer,
});
