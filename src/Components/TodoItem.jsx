import React, { useState } from 'react';

function ToDoItem({ todo, deleteTodo, toggleComplete, editTodo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    const handleEdit = () => {
        setIsEditing(!isEditing);
        if (isEditing) {
            editTodo(todo.id, newText);
        }
    };

    return (
        <div style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {isEditing ? (
                <input
                    type="text"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                />
            ) : (
                <span>{todo.text}</span>
            )}
            <button onClick={() => toggleComplete(todo.id)}>
                {todo.completed ? 'Unmark' : 'Complete'}
            </button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
        </div>
    );
}

export default ToDoItem;
