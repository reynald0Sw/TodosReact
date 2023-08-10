import React from "react";
import "./TodoForm.css";

function TodoForm({ addTodo, setOpenModal }) {
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nueva Tarea "TODOS"</label>
      <textarea
        placeholder="Nueva Tarea.."
        value={newTodoValue}
        onChange={onChange}
      />
      <div className="TodoForm-buttonContainer">
       
        <button
          type="button"
          className="cancelTodoForm-Button-"
          onClick={onCancel}
        >
          <span className="spark"></span>
          <span className="backdrop"></span>
          <span className="galaxy__container">
            <span className="star star--static"></span>
            <span className="star star--static"></span>
            <span className="star star--static"></span>
            <span className="star star--static"></span>
          </span>
          <span className="galaxy">
            <span className="galaxy__ring">
              <span className="star"></span>
              <span className="star"></span>
              <span className="star"></span>
              <span className="star"></span>
              <span className="star"></span>
              <span className="star"></span>
              <span className="star"></span>
              <span className="star"></span>
              <span className="star"></span>
              <span className="star"></span>
              <span className="star"></span>
              <span className="star"></span>
              <span className="star"></span>
              <span className="star"></span>
              <span className="star"></span>
              <span className="star"></span>
              <span className="star"></span>
              <span className="star"></span>
              <span className="star"></span>
              <span className="star"></span>
            </span>
          </span>
          <span className="text">Cancelar</span>
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
