import React from "react";
import { useThemeContext } from '../context/ThemeContext'

const Todos = () => {
  const { contextTheme } = useThemeContext();
  return (
    <div>
      <h2>reynald0_sw Todos</h2>
      <p>Theme { contextTheme }</p>
      <p>Todos Page</p>
    </div>
  )
}

export default Todos