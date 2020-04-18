import { connect } from 'react-redux'
import { toggleTodo, addLog } from './../actions'
import TodoPage from './TodoPage'
import _ from 'lodash'

const getTodoList = todoList => todoList;

const mapStateToProps = state => {
    return {
        todoList: getTodoList(state.todoList)
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: todo => {
            dispatch(toggleTodo(todo.id))

            dispatch(addLog({
                id: _.uniqueId(),
                value: `${todo.todo} has been changed to ${todo.complete ? 'Complete' : 'Incomplete'}!`
            }))
        }
    };
}

const TodoPageContainer = connect(mapStateToProps, mapDispatchToProps)(TodoPage);

export default TodoPageContainer;
