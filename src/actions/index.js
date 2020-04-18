import {
    TOGGLE_TODO,
    ADD_TODO,
    UPDATE_ADD_TODO,
    ADD_LOG } from './../constants'

const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id: id,
})

const addTodo = todo => {
    return {
        type: ADD_TODO,
        todo,
    };
}

const updateAddTodo = action => ({
    type: UPDATE_ADD_TODO,
    value: action.value
})

const addLog = log => ({
    type: ADD_LOG,
    log
})

export {
    toggleTodo,
    addTodo,
    updateAddTodo,
    addLog
}
