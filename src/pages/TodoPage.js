import React from 'react'
import TodoBoard from './../components/TodoBoard'
import AddTodo from './../components/AddTodo'
import LogBoard from './../components/LogBoard'

const TodoPage = (props) => {
    return (
        <div className="mt-3">
            <AddTodo />
            <TodoBoard
                todoList={props.todoList}
                onTodoClick={props.onTodoClick}
                />
            <LogBoard />
        </div>
    )
}

export default TodoPage
