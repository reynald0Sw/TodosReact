import React from "react";

function useStorageListener( sincronize){

    const [storageChange,setStorageChange]= React.useState(false);

    window.addEventListener('storage', (change)=>{
      if(change.key === 'TODOS_V1'){
        console.log("hubo cambuos en v1todos");
        setStorageChange(true);
      }
    });

    const toggleShow = () => {
      sincronize();
      setStorageChange(false);
    }

    return {
      show: storageChange,
      toggleShow,
    }
}

export { useStorageListener }