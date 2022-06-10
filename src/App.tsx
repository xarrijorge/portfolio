import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Brightness4Sharp, Brightness7Sharp } from '@mui/icons-material'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import NotFound from './pages/NotFound'
import Navigation from './components/navigation'
import './App.scss'

function App(): JSX.Element {
    const [darkmode, setDarkMode] = useState(true)

    const toggleTheme = () => {
        setDarkMode(!darkmode)
    }
    return (
        <main className={`App ${darkmode ? 'dark-mode' : 'light-mode'} `}>
            <Navigation />
            <button onClick={toggleTheme} className="themeSwitchButton">
                {darkmode ? (
                    <Brightness7Sharp
                        sx={{
                            fontSize: '80px',
                            cursor: 'pointer',
                        }}
                    />
                ) : (
                    <Brightness4Sharp
                        sx={{
                            color: '#f5f5f5',
                            fontSize: '80px',
                            cursor: 'pointer',
                        }}
                    />
                )}
            </button>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<Work />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </main>
    )
}

export default App
