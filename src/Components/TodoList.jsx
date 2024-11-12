import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, deleteTodo, toggleComplete, editTodo }) => {
    return (
        <div>
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
