import React from 'react'
import logo from '../images/xarrilogo.png'
import { Link } from 'gatsby'
export default () => (
    <div className="base head-hero">
        <img className="homeImage" src={logo} alt="xarri logo" />
        {/* <div className="hero-title">
        <h1>Xarri Jorge</h1>
        <p className="hero-sub">Frontend<br/> Developer</p>
      </div> */}
        <div className="mainNav">
            <Link className="navButton neo-white" to="about">
                About
            </Link>
            <Link className="navButton neo-white" to="work">
                Work
            </Link>
            <Link className="navButton neo-white" to="contact">
                Contact
            </Link>
            <Link className="navButton neo-white" to="learn">
                learn
            </Link>
        </div>
        {/* <div className="hero-desc">Everyone deserves Beauty and Innovation<br/> 
      ... I'm delivering just that! 
       </div> */}
    </div>
)
