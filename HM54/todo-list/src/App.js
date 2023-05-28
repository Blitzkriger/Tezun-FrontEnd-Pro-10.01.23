import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo } from './redux/actions';
import './App.css';

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  const handleToggleTodo = (index) => {
    dispatch(toggleTodo(index));
  };

  return (
    <div className="App">
      <h1>Список справ</h1>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            onClick={() => handleToggleTodo(index)}
            style={{
              textDecoration: todo.completed ? 'line-through red' : 'none',
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Додати</button>
      </form>
    </div>
  );
}

export default App;


