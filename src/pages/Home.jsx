import React from 'react'
import { useThemeContext } from '../context/ThemeContext'

const Home = () => {
  const { contextTheme } = useThemeContext();
  return (
    <div>
      <h2>reynald0_sw Home</h2>
      <p>Theme { contextTheme }</p>
      <p>Home Page</p>
    </div>
  )
}

export default Home
