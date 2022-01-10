import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Brightness4Sharp, Brightness7Sharp } from '@mui/icons-material'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import NotFound from './pages/NotFound'
import './App.scss'

function App() {
    const [darkmode, setDarkMode] = useState(true)

    const toggleTheme = () => {
        setDarkMode(!darkmode)
    }
    return (
        <main className={`App ${darkmode ? 'dark-mode' : 'light-mode'} `}>
            <button onClick={toggleTheme} className="themeSwitchButton">
                {darkmode ? (
                    <Brightness7Sharp sx={{ color: '#f5f5f5' }} />
                ) : (
                    <Brightness4Sharp />
                )}
            </button>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/about" element={<Work />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </main>
    )
}

export default App
