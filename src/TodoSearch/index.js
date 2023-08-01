import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../context/TodoContext';

function TodoSearch() { 
  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);

  return (
    <input
      placeholder="Add your taks"
      className="TodoSearch"
      event={searchValue}
      onChange={(event)=>{
        setSearchValue(event.target.value);       
      }}
    />   
  );
}

export { TodoSearch };