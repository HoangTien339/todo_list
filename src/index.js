import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux'
import { todoApp } from './reducers'
import createSagaMiddleware from 'redux-saga'
import { fetchTodoSaga, submitTodo } from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  todoApp,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(fetchTodoSaga)
sagaMiddleware.run(submitTodo)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
