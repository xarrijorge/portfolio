import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Brightness4Sharp, Brightness7Sharp } from '@mui/icons-material'
import Home from './pages/Home'
import About from './pages/About'
import './App.css'

function App() {
    const [darkmode, setDarkMode] = useState(true)

    const toggleTheme = () => {
        setDarkMode(!darkmode)
    }
    return (
        <div className={`App ${darkmode ? 'dark-mode' : 'light-mode'} `}>
            <button onClick={toggleTheme} className="themeSwitchButton">
                {darkmode ? (
                    <Brightness7Sharp sx={{ color: '#f5f5f5' }} />
                ) : (
                    <Brightness4Sharp />
                )}
            </button>

            <Home />
            <About />
        </div>
    )
}

export default App
