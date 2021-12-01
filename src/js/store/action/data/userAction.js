import 'regenerator-runtime/runtime.js';

export const userAction = {
    setUser,
} 

function setUser(value) {
    
    return dispatch => { dispatch({ type: 'user', value }); }

}