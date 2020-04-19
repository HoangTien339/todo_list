import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({todo, onClick}) => {
    return (
        <tr onClick={onClick}>
            <td>{todo}</td>
        </tr>
    );
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    todo: PropTypes.string.isRequired
}

export default Todo;
