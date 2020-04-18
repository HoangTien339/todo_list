import React from 'react'
import TodoList from './TodoList';
import { filterTodo } from './../utils';
import PropTypes from 'prop-types'

const TodoBoard = (props) => {
    return (
        <div className="col-md-8">
          <TodoList
            title='Todo'
            onTodoClick={props.onTodoClick}
            todoList={filterTodo(props.todoList, false)}
            titleColor="list-group-item-primary"
            />
    
          <TodoList
            title='Complete'
            onTodoClick={props.onTodoClick}
            todoList={filterTodo(props.todoList, true)}
            titleColor="list-group-item-success"
            />
        </div>
    )
}

TodoBoard.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      todo: PropTypes.string.isRequired,
      complete: PropTypes.bool.isRequired
    })
  ).isRequired
}

export default TodoBoard;
