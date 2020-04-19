import { 
    FETCH_TODO,
    SUBMIT_TODO } from './../constants'
import { takeLatest, put } from 'redux-saga/effects'
import { makeRequest, uniqueId } from './../utils'
import _ from 'lodash'
import {
    fetchTodoSuccess,
    submitTodoSuccess,
    addTodo } from './../actions'

function* fetchTodo() {
    const messages = {
        success: 'Fetch all logs successfully!',
        failure: 'Fetch logs failed!'
    }

    const options = {
        uri: '',
        method: 'GET'
    }

    const response = yield makeRequest(options, messages)

    yield put(fetchTodoSuccess(response.data.todo_list))
}

function* storeTodo(data) {
    const options = {
        uri: '',
        method: 'POST'
    }

    const messages = {
        success: `${data.data.todo} has been created successfully!`,
        failure: `${data.data.todo} has been created failed!`,
    }

    const response = yield makeRequest(options, data.data, messages)

    yield put(submitTodoSuccess(response))

    yield put(addTodo(data.data))
}

function* fetchTodoSaga() {
    yield takeLatest(FETCH_TODO, fetchTodo)
}

function* submitTodo(data) {
    yield takeLatest(SUBMIT_TODO, storeTodo)
}

export {
    fetchTodoSaga,
    submitTodo
}
