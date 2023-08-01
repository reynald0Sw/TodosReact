import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmpyTodos } from "../EmpyTodos";
import { TodoContext } from "../context/TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";


function AppUI() {
  const {    
      loading,
      error,
      searchTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,    
  } = React.useContext(TodoContext);
  return (
    <div>
        <TodoCounter />
        <TodoSearch />
        
          <TodoList>
            {loading && (
              <>
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
              </>
            )}
            {error && <TodosError />}
            {!loading && searchTodos.lenght === 0 && <EmpyTodos />}

            {searchTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>          
       
        <CreateTodoButton setOpenModal={setOpenModal} />
        {openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}
        

    </div>
  );
}

export { AppUI };
