import React from "react";
import { useStorageListener } from "./useStorageListener";

function ChangeAlert({ sincronize }){
  const { show, toggleShow} = useStorageListener(sincronize);
  if(show){
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
          <p>Parece que cambiaste tus TODOS en otra pestana o ventana emergente</p>
          <p>Quieres sincronizar tus TODOS?</p>
          <button 
            className="TodoForm-button TodoForm-button--add"
            onClick={toggleShow}>
            Yes!
          </button>
        </div>
      </div>
    );
  }else{
    return null;
  }
}

export { ChangeAlert }