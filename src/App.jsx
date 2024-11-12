import React, { useState } from 'react';
import Header from './Components/Header';
import TodoList from './Components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // Function to add a new to-do
  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };

  // Function to delete a to-do
  const deleteTodo = (id) => setTodos(todos.filter(todo => todo.id !== id));

  // Function to mark a to-do as completed
  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Function to edit a to-do
  const editTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  return (
    <div className=" w-screen h-screen overflow-y-auto">
      <div className=' text-center'>
        <Header />

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTodo}>Add Task</button>
        <TodoList todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} editTodo={editTodo} />
      </div>
    </div>
  );
}

export default App;
