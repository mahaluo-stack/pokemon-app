export const pokemonGridAction = {
    toggleNameFilter,
    addSearchFilter,
    removeSearchFilter
} 


function toggleNameFilter(value) {

    return dispatch => {

        if (value.state) {

            dispatch({ type: 'addNameFilter', value });
        }
        else {

            dispatch({ type: 'removeNameFilter', value: value.index });
        }
    }
}

function addSearchFilter(value) {

    return dispatch => {

        dispatch({ type: 'addSearchFilter', value });
    }
}
function removeSearchFilter(value) {

    return dispatch => {

        dispatch({ type: 'removeSearchFilter', value });
    }
}