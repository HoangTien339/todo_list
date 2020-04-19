import React from 'react'
import TodoBoard from './../components/TodoBoard'
import AddTodo from './../components/AddTodo'
import LogBoard from './../components/LogBoard'

class TodoPage extends React.Component {
    constructor(props) {
        super(props)

        if (props.todoList.length === 0) {
            props.fetchTodo()
        }
    }

    render() {
        return (
            <div className="mt-3">
                <AddTodo />
                <TodoBoard
                    todoList={this.props.todoList}
                    onTodoClick={this.props.onTodoClick}
                    />
                <LogBoard />
            </div>
        )
    }
}

export default TodoPage
