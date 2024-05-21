"use client"
import { createContext, useState } from 'react';


export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {

    const [mode, setMode] = useState('light');
    const [change, setChange] = useState(false);

    const toggleMode = () => {
        setMode(mode === 'dark' ? 'light' : 'dark')
    }

    return (
        <ThemeContext.Provider value={{ mode,change, setChange, toggleMode }}>
            <div className={`theme ${mode} ${change}`} >
                {children}
            </div>
        </ThemeContext.Provider>
    )
}