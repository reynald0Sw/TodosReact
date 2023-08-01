import React from 'react'
import { useThemeContext } from '../context/ThemeContext'

const About = () => {
  const { contextTheme } = useThemeContext();
  return (
    <div>
      <h2>reynald0_sw About</h2>
      <p>Theme { contextTheme }</p>
      <p>About Us...</p>
    </div>
  )
}

export default About
