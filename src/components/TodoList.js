import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({todoList, onTodoClick, title, titleColor}) => {
    return (
        <div className="col-md-6 d-inline-block">
            <table className="table table-hover">
                <thead className={titleColor}>
                    <tr>
                        <td>{title}</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        todoList.map((todo, index) => {
                            return (
                                <Todo
                                    key={todo.id}
                                    todo={todo.todo}
                                    onClick={() => onTodoClick(todo)}
                                    />
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

TodoList.propTypes = {
    todoList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            todo: PropTypes.string.isRequired,
            complete: PropTypes.bool.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    titleColor: PropTypes.string.isRequired
}

export default TodoList;
