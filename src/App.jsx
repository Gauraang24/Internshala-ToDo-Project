import React, { useState } from 'react';
import Header from './Components/Header';
import TodoList from './Components/TodoList';
import { PlusOutlined } from '@ant-design/icons';

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
    <div className=" w-screen h-screen overflow-y-auto bg-gradient-to-br from-[#0C3548] to-[#030214]">
      <div className=' text-center'>
        <Header />

        <div className='w-1/2 max-w-[800px] mx-auto flex p-4 bg-gradient-to-br from-[#F58527] to-[#CA3927] rounded-xl'>

          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task"
            className='bg-transparent focus:outline-none focus:border-transparent flex-1 text-white text-[20px] font-medium'

          />
          <button onClick={addTodo} className=''><PlusOutlined className='text-white' /></button>
        </div>
        <TodoList todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} editTodo={editTodo} />
      </div>
    </div>
  );
}

export default App;
