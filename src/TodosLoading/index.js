import React from 'react';
import './TodosLoading.css';

function TodosLoading() {
  return (
    <div className='LoadingTodo-container'>
      <div className='LoadingTodo-overlay'></div>
      <span className='LoadingTodo-loadingIcon'></span>
      <p className='LoadingTodo-Text'>Reload...</p>
    </div>
  );
}

export { TodosLoading };
