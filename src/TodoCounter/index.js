import React from 'react';
import './TodoCounter.css';

function TodoCounter({ totalTodos, completedTodos, loading}) {
  
  return (
    <h2 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>
      <p>Lista de Tareas "TODOS"</p>
      Tareas Completadas <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS!
    </h2>
  );    
}

export { TodoCounter };
