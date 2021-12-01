const pokemonGridState = {
    nameFilters: {
        'shadow': false,
        'mega': false,
    }, 
    searchFilters: [],
}


export default function pokemonGridReducer(state = pokemonGridState, action) {

    switch (action.type) {
        case 'addNameFilter': {
            return {
                ...state,
                nameFilters: {
                    ...state.nameFilters,
                    [action.value.index]: action.value.name,
                }
            }
        };

        case 'removeNameFilter': {
            delete state.nameFilters[action.value];
            return state;
        };

        case 'addSearchFilter': {
            return {
                ...state,
                searchFilters: [...state.searchFilters, action.value]
            }
        };

        case 'removeSearchFilter': {
            let filters = state.searchFilters;
            filters = filters.filter((filter) => filter != action.value);
            return {
                ...state,
                searchFilters: filters
            }
        };

        default:
            return state;
    }
}