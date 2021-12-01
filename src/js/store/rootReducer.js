import { combineReducers } from 'redux';
import { appRoot } from './reducer/app/appRootReducer';
import { dataRoot } from './reducer/data/dataRootReducer';
import { uiRoot } from './reducer/ui/uiRootReducer';


const rootReducer = combineReducers({
    appState: appRoot,
    dataState: dataRoot,
    uiState: uiRoot,
});

export default rootReducer;