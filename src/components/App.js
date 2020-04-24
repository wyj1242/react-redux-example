import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = (props) => (
    <div>
        <AddTodo />
        {/* 通过props将store传递下去 */}
        <VisibleTodoList {...props} />
        <Footer />
    </div>
)

export default App
