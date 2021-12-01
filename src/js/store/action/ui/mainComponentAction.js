export const mainComponentAction = { 
    push,
    toggle,
} 

function push(value) {
    return dispatch => { dispatch({ type: 'pushMainComponent', value })}
}
 
function toggle(value) {
    return dispatch => { dispatch({ type: value.type, name: value.name, value: value.value })}
}