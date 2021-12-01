import 'regenerator-runtime/runtime.js';



export const pageAction = { 
    mount,
    setPageLoad,
}

function setPageLoad(value) { 

    return dispatch => { 

        dispatch({ type: 'pageLoad', value });
    };
}  


function mount(value) { 
    
    return async dispatch => { 

        dispatch({ type: 'pageLoad', value: true });

        setTimeout(() => {
            
            dispatch({ type: 'pageMount', value: value }); 
            dispatch({ type: 'pageLoad', value: false });
        }, 500);

    };

}