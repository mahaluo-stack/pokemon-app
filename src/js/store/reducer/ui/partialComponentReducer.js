const partials = {};

export default function partialComponentReducer(state = partials, action) {

    switch (action.type) {

        case 'pushPartialComponent':
            return {
                ...state,
                [action.value]: {
                    active: true,
                    loading: false,
                }
            };
        case 'partialComponentLoading':
        case 'partialComponentActive':
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
