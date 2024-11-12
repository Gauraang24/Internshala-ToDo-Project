import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header';
import TodoList from './Components/TodoList';
// import './index.css'

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  console.log("todos :", todos)

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
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

        <TodoList todos={todos} />
      </div>
    </div>
  );
}


export default App
