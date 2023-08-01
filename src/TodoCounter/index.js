import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../context/TodoContext';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);
  return (
    <h1 className='TodoCounter'>
      You are complete <span>{completedTodos}</span> of <span>{totalTodos}</span> TODOS!
    </h1>
  );    
}

export { TodoCounter };
