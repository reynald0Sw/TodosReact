import React from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue, loading}) { 
  const onSearchValueChange = (event) =>{
    console.log(event.target.value);
    setSearchValue(event.target.value);

  }

  return (
    <input
      className="TodoSearch"
      placeholder="Add your taks"
      value={searchValue}
      onChange={onSearchValueChange}
      disable={loading}
    />   
  );
}

export { TodoSearch };