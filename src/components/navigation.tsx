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
                <Link to="/" className="navItem homeLink">
                    <MdHomeFilled className="navIcons" />
                    <span className='navtext'>Home</span>
                </Link>
                <Link to="/contact" className="navItem contactLink">
                    <GrContact className="navIcons" />
                    <span className='navtext'>Contact</span>
                </Link>
                <Link to={locationStr} className="navItem variableLink">
                    <span>
                        {routeName === 'about' ? (
                            <MdWork className="navIcons" />
                        ) : (
                            <BsFillPersonLinesFill className="navIcons" />
                        )}
                    </span>
                    <span className='navtext'>{routeName === 'about' ? 'Work' : 'About'}</span>
                </Link>
            </div>
        </>
    )
}

export default Navigation
