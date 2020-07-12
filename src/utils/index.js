import axios from 'axios'
import _ from 'lodash'
import { put } from 'redux-saga/effects'
import { addLog } from './../actions'

const filterTodo = (todos, status) => {
    return typeof todos === undefined ? [] :
        todos.filter(todo => todo.complete === status);
}

function* makeRequest(options = {}, data = {}, messages = {}) {
    const method = options.method === undefined ? 'GET' : options.method
    const url = process.env.REACT_APP_API_URL +
        'todo' + (options.uri === undefined ? '' : options.uri)

    try {
        const response = yield axios({
            url,
            method,
            data
        })

        yield put(addLog({
            id: uniqueId(),
            value: messages.success || 'Fetch all logs successfully!'
        }))

        return response
    } catch (error) {
        yield put(addLog({
            id: uniqueId(),
            value: messages.failure || 'Fetch logs failed!'
        }))

        return error
    }
};

const uniqueId = () => _.uniqueId('id_')

export {
    filterTodo,
    makeRequest,
    uniqueId
}
