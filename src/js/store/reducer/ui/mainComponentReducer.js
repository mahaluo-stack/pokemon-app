const mains = {};

export default function pageComponentReducer(state = mains, action) {

    switch (action.type) {

        case 'pushMainComponent':
            return {
                ...state,
                [action.value]: {
                    active: true,
                    loading: false,
                } 
            };
        case 'mainComponentLoading':
        case 'mainComponentActive':
            return {
                ...state,
                [action.value.name]: {
                    ...state[action.value.name],
                    [action.type]: [action.value.value]
                }
            };

        default:
            return state;
    }

}
