import React, { useState } from 'react'
import { Brightness4Sharp, Brightness7Sharp } from '@mui/icons-material'
import './App.css'

function App() {
    const [darkmode, setDarkMode] = useState(false)

    const toggleTheme = () => {
        setDarkMode(!darkmode)
    }
    return (
        <div className={`App ${darkmode ? 'dark-mode' : 'light-mode'} `}>
            <button onClick={toggleTheme} className='themeSwitchButton'>
                {darkmode ? (
                    <Brightness7Sharp sx={{ color: '#f5f5f5' }} />
                ) : (
                    <Brightness4Sharp />
                )}
            </button>
            <h1>Xarri George</h1>
            <h4>Tranquil Simplicity, Rustic Elegance, Imperfect Beauty</h4>
        </div>
    )
}

export default App
