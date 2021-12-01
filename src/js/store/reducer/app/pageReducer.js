const pageState = {
    pageName: '/landing', 
    pageMount: false,
    pageLoad: true,
}
 
export default function pageReducer(state = pageState, action) {

    switch (action.type) {

        case 'pageMount':
            console.log('mounting page.. ');
            return {
                pageName: action.value, 
                pageMount: true,
                pageLoad: false,
            };

        case 'pageLoad':
            return {
                ...state,
                [action.type]: action.value,
            };

        default:
            return state;
    }
}