import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
// 此为直接获取store
// import { createStore } from 'redux'
// import todoApp from '../redux/reducers';
// const store = createStore(todoApp)

class TodoList extends React.Component{
    render(){
        console.log(this,this.props.store.getState());
        return(
            <ul>
                {this.props.todos.map((todo, index) => (
                    <Todo key={index} {...todo} onTodoClick={this.props.onTodoClick} />
                ))}
            </ul>
        )
    }
}
// const TodoList = ({ todos, onTodoClick }) => {
//     console.log(this);
    
// }

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
}

export default TodoList
