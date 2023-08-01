import React from "react";
import { useLocalStorage } from "./useLocalstorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {

  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error, 
  } = useLocalStorage('TODOS_V1',[]);
  const [searchValue, setSearchValue ] = React.useState('');
  const [openModal, setOpenModal ] = React.useState(false);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLocaleLowerCase();
      const searchtext = searchValue.toLocaleLowerCase();
      return todoText.includes(searchtext);
    }
  ); 

  const addTodo = (text) => {
    const newTodos = [...todos];
    
    newTodos.push({
      text,
      completed: false,
    });
    saveTodos(newTodos);
  }


  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text 
    );
    newTodos[todoIndex].completed = true;    
    saveTodos(newTodos);
  }
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text 
    );
    newTodos.splice(todoIndex, 1);    
    saveTodos(newTodos);
  }
  


  return(
    <TodoContext.Provider value={{
      loading,
      error,
      completedTodos, 
      totalTodos, 
      searchValue, 
      setSearchValue, 
      searchTodos, 
      completeTodo, 
      deleteTodo,
      openModal,
      setOpenModal,
      addTodo,
      }}>
      {children}
    </TodoContext.Provider>
    
  );
}
export { TodoContext, TodoProvider };