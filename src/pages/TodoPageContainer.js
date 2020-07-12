import { connect } from 'react-redux'
import { toggleTodo, addLog, fetchTodo } from './../actions'
import { uniqueId } from './../utils'
import TodoPage from './TodoPage'
import _ from 'lodash'

const mapStateToProps = state => {
    return {
        todoList: state.todoList
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: todo => {
            dispatch(toggleTodo(todo.id))

            dispatch(addLog({
                id: uniqueId(),
                value: `${todo.todo} has been changed to ${todo.complete ? 'Complete' : 'Incomplete'}!`
            }))
        },
        fetchTodo: () => {
            dispatch(fetchTodo())
        }
    };
}

const TodoPageContainer = connect(mapStateToProps, mapDispatchToProps)(TodoPage);

export default TodoPageContainer;
