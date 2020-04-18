import {
    TOGGLE_TODO,
    ADD_TODO,
    UPDATE_ADD_TODO,
    ADD_LOG } from './../constants'

const initialState = {
    todoList: [],
    addTodo: {
        value: ''
    },
    logs: []
}

const todoApp = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_TODO:
            return Object.assign({}, state, {
                todoList: state.todoList.map(todo => {
                    return todo.id === action.id ? {
                        ...todo,
                        complete: !todo.complete
                    } : todo
                })
            })
        case ADD_TODO:
            return Object.assign({}, state, {
                todoList: [
                    ...state.todoList,
                    {
                        todo: action.todo.todo,
                        id: action.todo.id,
                        complete: action.todo.complete
                    }
                ]
            });
        case UPDATE_ADD_TODO:
            return Object.assign({}, state, {
                addTodo: {
                    value: action.value
                }
            })
        case ADD_LOG:
            return Object.assign({}, state, {
                logs: [
                    ...state.logs,
                    {
                        id: action.log.id,
                        value: action.log.value
                    }
                ]
            })
        default:
            return state
    }
}

export { todoApp }
