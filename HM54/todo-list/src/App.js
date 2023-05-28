// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [todo, setTodo] = useState([]);
//   const [input, setInput] = useState('');

//   const addTodo = (e) => {
//     e.preventDefault();
//     if (input.trim()) {
//       setTodo([...todo, { text: input, completed: false }]);
//       setInput('');
//     }
//   };

//   const toggleTodo = (index) => {
//     const newTodo = [...todo];
//     newTodo[index].completed = !newTodo[index].completed;
//     setTodo(newTodo);
//   };

//   return (
//     <div className="App">
//       <h1>Список дел</h1>
//       <ul>
//         {todo.map((todo, index) => (
//           <li
//             key={index}
//             onClick={() => toggleTodo(index)}
//             style={{
//               textDecoration: todo.completed ? 'line-through red' : 'none',
//             }}
//           >
//             {todo.text}
//           </li>
//         ))}
//       </ul>
//       <form onSubmit={addTodo}>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         />
//         <button type="submit">Добавить</button>
//       </form>
//     </div>
//   );
// }

// export default App;

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


