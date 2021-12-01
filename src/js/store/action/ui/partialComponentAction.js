export const partialComponentAction = { 
    push,
    toggle,
} 

function push(value) {
    return dispatch => { dispatch({ type: 'pushPartialComponent', value })}
}

function toggle(value) {
    return dispatch => { dispatch({ type: value.type, value: { name: value.name, value: value.value } })}
}