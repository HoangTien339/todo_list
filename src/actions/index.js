import {
    TOGGLE_TODO,
    ADD_TODO,
    UPDATE_ADD_TODO,
    ADD_LOG,
    FETCH_TODO,
    FETCH_TODO_SUCCESS,
    SUBMIT_TODO,
    SUBMIT_TODO_SUCCESS } from './../constants'

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

const fetchTodo = () => ({
    type: FETCH_TODO
})

const fetchTodoSuccess = (data) => ({
    type: FETCH_TODO_SUCCESS,
    data: data
})

const submitTodo = data => ({
    type: SUBMIT_TODO,
    data: data
})

const submitTodoSuccess = (data) => ({
    type: SUBMIT_TODO_SUCCESS,
    data: data
})

export {
    toggleTodo,
    addTodo,
    updateAddTodo,
    addLog,
    fetchTodo,
    fetchTodoSuccess,
    submitTodo,
    submitTodoSuccess
}
