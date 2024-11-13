import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, deleteTodo, toggleComplete, editTodo }) => {
    return (
        <div className='w-1/2 max-w-[800px] mx-auto my-6'>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    toggleComplete={toggleComplete}
                    editTodo={editTodo}
                />
            ))}
        </div>
    )
}

export default TodoList
