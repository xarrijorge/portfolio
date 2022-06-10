import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdHomeFilled, MdWork } from 'react-icons/md'
import { GrContact } from 'react-icons/gr'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { RiMenuFoldFill, RiMenuUnfoldFill } from 'react-icons/ri'

const Navigation = (): JSX.Element => {
    const location = useLocation()
    const locationStr = `${location.pathname === '/about' ? '/work' : '/about'}`
    const routeName = location.pathname.replace('/', '')
    const [showNav, setShowNav] = React.useState(true)
    const toggleMenu = () => {
        setShowNav(!showNav)
    }
    return (
        <>
            {showNav === true ? (
                <RiMenuFoldFill onClick={toggleMenu} className="togglemenu" />
            ) : (
                <RiMenuUnfoldFill onClick={toggleMenu} className="togglemenu" />
            )}

            <div
                className={`navMenu ${
                    showNav === false ? 'hidenav' : 'shownav'
                }`}
            >
                <Link to="/" className="homeLink">
                    <MdHomeFilled className="navIcons" />
                </Link>
                <Link to="/contact" className="contactLink">
                    <GrContact className="navIcons" />
                </Link>
                <Link to={locationStr} className="variableLink">
                    <span>
                        {routeName === 'about' ? (
                            <MdWork className="navIcons" />
                        ) : (
                            <BsFillPersonLinesFill className="navIcons" />
                        )}
                    </span>
                </Link>
            </div>
        </>
    )
}

export default Navigation
