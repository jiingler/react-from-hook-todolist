import './App.css';

import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

import InputTodo from './components/InputTodo';
import TodoItem from './components/TodoItem';
import RemainAmount from './components/RemainAmount';

function App() {
  const todoList = [
    { 
      id: uuidv4(),
      isDone: false,
      title: 'React homework',
    },
    { 
      id: uuidv4(),
      isDone: false,
      title: 'Reading React Document',
    },
  ];

  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState(todoList);

  const handleChange = (e) => {
    const {value} = e.target;
    setInputValue(value);
  }

  const handleAdd = () => {

    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: uuidv4(),
          isDone: false,
          title: inputValue
        }
      ]
    })

    setInputValue('');
  }

  const handleToggleDone = (itemId)=> () => {
    setTodos((prevTodos) => {
      return prevTodos.map(item => {
        if (item.id !== itemId) {
          return item;
        } else {
          return {
            ...item,
            isDone: !item.isDone
          }
        }
      })
    });
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="container row">
        <div className="col-10 m-auto">
          <h1 className="text-center">TodoList</h1>
          <InputTodo inputValue={inputValue} handleChange={handleChange} handleAdd={handleAdd}/>
          <TodoItem todoList={todos} handleToggleDone={handleToggleDone}/>
          <RemainAmount todoList={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;
