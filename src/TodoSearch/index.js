import React from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue,}) { 

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