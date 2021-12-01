const userState = {
    user: null,
}

export default function userReducer(state = userState, action) {

    switch (action.type) {
        case 'user':
            return {
                ...state,
                [action.type]: action.value
            }
    
        default:
            return state;
    }
}