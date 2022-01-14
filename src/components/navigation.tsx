import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
    IoReturnDownBackSharp,
    IoReturnDownForwardSharp,
} from 'react-icons/io5'

const Navigation = (): JSX.Element => {
    const location = useLocation()
    const locationStr = `${location.pathname === '/about' ? '/work' : '/about'}`
    const routeName = location.pathname.replace('/', '')
    return (
        <div className="navMenu">
            <Link to="/" className="homeLink">
                <IoReturnDownBackSharp className="navArrow "></IoReturnDownBackSharp>
                <span>home</span>
            </Link>
            <Link to="/contact" className="contactLink">
                <span>contact</span>
                <IoReturnDownForwardSharp className="navArrow "></IoReturnDownForwardSharp>
            </Link>
            <Link to={locationStr} className="variableLink">
                <IoReturnDownBackSharp className="navArrow "></IoReturnDownBackSharp>
                <span>{routeName === 'about' ? 'work' : 'about'}</span>
            </Link>
        </div>
    )
}

export default Navigation
