import React, { createContext, useState } from 'react'

export const ThemeContext = createContext("")

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light')

    function toggletheme(){
        setTheme((prevTheme)=> (prevTheme === 'light' ? 'dark' : 'light'))
    }

    
  return (
    <ThemeContext.Provider value={{theme, toggletheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider