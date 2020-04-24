import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onTodoClick, completed, text }) => {
    console.log(completed, text)
    return (
        <li
            onClick={() => onTodoClick(text)}
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}
        >
            {text}
        </li>
    )
}

Todo.propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo
