import logo from "../logo.svg";
import "../App.css";
import ReactSwitch from "react-switch";
import { useState } from "react";
import { useThemeContext } from "../context/ThemeContext";
import { FiMoon, FiSun } from "react-icons/fi";
import { Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

import React from "react";
import { useTodos } from "./useTodos";
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmpyTodos";
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { ChangeAlert } from "../ChangeAlert";

function App() {
  // modo dark
  const { contextTheme, setContextTheme } = useThemeContext();
  const [checked, setChecked] = useState(false);
  const handleSwitch = (nextChecked) => {
    setContextTheme((state) => (state === "Light" ? "Dark" : "Light"));
    setChecked(nextChecked);
  };
  const getIcon = () => {
    return checked ? <FiMoon size={27} /> : <FiSun size={27} />;
  };

  // todos
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
    sincronizeTodos,
  } = useTodos();

  return (
    <div className="App">
      <header className="App-header" id={contextTheme}>
        {/* modo dark */}
        <div className="switch-container">
          <p>{contextTheme}Mode</p>
          {getIcon()}
          <ReactSwitch
            onChange={handleSwitch}
            checked={checked}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
            className="react-switch"
            id="material-switch"
          />
        </div>
        <img src={logo} className="App-logo" alt="logo" />

        {/* todoooos */}

        <div>
          <React.Fragment>
            <TodoHeader loading={loading}>
              <TodoCounter
                totalTodos={totalTodos}
                completedTodos={completedTodos}                
              />
              <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />
            </TodoHeader>

            <TodoList
              error={error}
              loading={loading}
              searchedTodos={searchedTodos}
              searchText={searchValue}
              totalTodos={totalTodos}
              onError={() => <TodosError />}
              onLoading={() => <TodosLoading />}
              onEmptyTodos={() => <EmptyTodos />}
              onEmptySearchResults={
                (searchText) => <p>No hay coencidencias para {searchText}</p>
              }
              // render={(todo) => (
              //   <TodoItem
              //     key={todo.text}
              //     text={todo.text}
              //     completed={todo.completed}
              //     onComplete={() => completeTodo(todo.text)}
              //     onDelete={() => deleteTodo(todo.text)}
              //   />
              // )}
            >
              {todo => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
              )}

            </TodoList>


            {!!openModal && (
              <Modal>
                <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
              </Modal>
            )}

            <CreateTodoButton setOpenModal={setOpenModal} />

            <ChangeAlert 
              sincronize={sincronizeTodos}
            />
          </React.Fragment>
        </div>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </header>
      
    </div>
  );
}

export default App;

// video 5 compartir proyecto~
