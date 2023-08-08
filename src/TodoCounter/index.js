import React from 'react';
import './TodoCounter.css';

function TodoCounter({ totalTodos, completedTodos, loading}) {
  
  return (
    <h2 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>
      You are complete <span>{completedTodos}</span> of <span>{totalTodos}</span> TODOS!
    </h2>
  );    
}

export { TodoCounter };
