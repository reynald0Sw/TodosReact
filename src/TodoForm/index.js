import React from "react";
import "./TodoForm.css";
import { TodoContext } from "../context/TodoContext";

function TodoForm() {
  const { addTodo, setOpenModal } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        placeholder="Cortar cenolla para el almuerxoo.."
        value={newTodoValue}
        onChange={onChange}
      />
      <div className="TodoForm-buttonContainer">
        {/* <button
          type="button"
          className="cancelTodoForm-Button-"
          onClick={onCancel}
        >
          Cancelar
        </button> */}

        <button
          type="button"
          className="cancelTodoForm-Button-"
          onClick={onCancel}
        >
          <span class="spark"></span>
          <span class="backdrop"></span>
          <span class="galaxy__container">
            <span class="star star--static"></span>
            <span class="star star--static"></span>
            <span class="star star--static"></span>
            <span class="star star--static"></span>
          </span>
          <span class="galaxy">
            <span class="galaxy__ring">
              <span class="star"></span>
              <span class="star"></span>
              <span class="star"></span>
              <span class="star"></span>
              <span class="star"></span>
              <span class="star"></span>
              <span class="star"></span>
              <span class="star"></span>
              <span class="star"></span>
              <span class="star"></span>
              <span class="star"></span>
              <span class="star"></span>
              <span class="star"></span>
              <span class="star"></span>
              <span class="star"></span>
              <span class="star"></span>
              <span class="star"></span>
              <span class="star"></span>
              <span class="star"></span>
              <span class="star"></span>
            </span>
          </span>
          <span class="text">Cancelar</span>
        </button>

        <button
          type="submit" 
          className="TodoForm-Button-add"
        >
          <span class="spark"></span>
          <span class="backdrop"></span>
          <span class="galaxy__container">
            <span class="star star--static"></span>
            <span class="star star--static"></span>
            <span class="star star--static"></span>
            <span class="star star--static"></span>
          </span>
          <span class="galaxy">
            <span class="galaxy__ring">
              <span class="star"></span>
              <span class="star"></span>
              <span class="star"></span>
              <span class="star"></span>
              <span class="star"></span>
              <span class="star"></span>
              <span class="star"></span>
              <span class="star"></span>
              <span class="star"></span>
              <span class="star"></span>
              <span class="star"></span>
              <span class="star"></span>
              <span class="star"></span>
              <span class="star"></span>
              <span class="star"></span>
              <span class="star"></span>
              <span class="star"></span>
              <span class="star"></span>
              <span class="star"></span>
              <span class="star"></span>
            </span>
          </span>
          <span class="text">Agregar</span>
        </button>

        {/* <button type="submit" className="TodoForm-Button-add">
          Agregar
        </button> */}
      </div>
    </form>
  );
}

export { TodoForm };
