import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdHomeFilled } from 'react-icons/md'
import { GrContact } from 'react-icons/gr'

const Navigation = (): JSX.Element => {
    const location = useLocation()
    const locationStr = `${location.pathname === '/about' ? '/work' : '/about'}`
    const routeName = location.pathname.replace('/', '')
    return (
        <div className="navMenu">
            <Link to="/" className="homeLink">
                <MdHomeFilled className="navArrow "></MdHomeFilled>
                <span>home</span>
            </Link>
            <Link to="/contact" className="contactLink">
                <span>contact</span>
                <GrContact className="navArrow "></GrContact>
            </Link>
            <Link to={locationStr} className="variableLink">
                <GrContact className="navArrow "></GrContact>
                <span>{routeName === 'about' ? 'work' : 'about'}</span>
            </Link>
        </div>
    )
}

export default Navigation
