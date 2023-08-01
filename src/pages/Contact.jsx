import React from 'react'
import { useThemeContext } from '../context/ThemeContext'

const Contact = () => {
  const { contextTheme } = useThemeContext();
  return (
    <div>
      <h2>reynald0_sw Contact</h2>
      <p>Theme { contextTheme }</p>
      
      
      <p>Contact Us</p>
    </div>
  )
}

export default Contact
