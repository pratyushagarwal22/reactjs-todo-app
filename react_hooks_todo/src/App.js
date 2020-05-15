import React, { useState } from 'react';
import './App.css';

function Todo({ todo, index, completeTodo, delTodo }) { // Brackets needed as we are destructuring from the props
  return (
    <div style={{textDecoration: todo.isCompleted ? 'line-through' : '' }} className="todo">
      { todo.text }
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => delTodo(index)}>Delete</button>
      </div>
    </div>
  );

}

function TodoForm({addTodo}) { // useState hook needed as the form is going to have a state
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return; // To prevent the addition of an empty value
    addTodo(value);
    setValue(''); // To clear the form out
  }



  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="input" value={value} placeholder="Add Todo...." onChange={e => setValue(e.target.value)}/>
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn about React',
      isCompleted: false
    },
    {
      text: 'Learn about React Native',
      isCompleted: false
    },
    {
      text: 'Learn about Redux',
      isCompleted: false
    },
    {
      text: 'Learn about Chrome Developer Tools',
      isCompleted: false
    },
    {
      text: 'Learn about CEH',
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const delTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} delTodo={delTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
