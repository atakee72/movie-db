import React from 'react'
import { useContext } from 'react'
import ThemeContext from '../store/ThemeContext'

function ThemeButton() {

const { theme, setTheme } = useContext(ThemeContext)

    
  return (
      <div>
          <p>{theme}</p>
          <button onClick={() => setTheme(theme === "secondary" ? "primary" : "secondary")}>ChangeTheme</button>
    </div>
  )
}

export default ThemeButton