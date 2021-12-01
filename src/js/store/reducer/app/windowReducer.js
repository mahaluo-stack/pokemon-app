const windowState = {
    device: null, 
}

export default function windowReducer(state = windowState, action) {
 
    switch (action.type) {

        case 'setDevice':
            console.log('device: ', action.value);
            return {
                device: action.value, 
            };

        default:
            return state;
    }
}