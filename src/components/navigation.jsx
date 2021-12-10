/*eslint-disable*/
import React from 'react';
import {Link} from 'gatsby';
import logo from '../images/xarrilogocropped.png';

export default (props) =>(
  <div className="base navigation">
    <Link to="/"><img src={logo}alt="logo image" className="logo"/></Link>
    <div>
    <Link activeClassName="active" to="about">About</Link>
    </div>
  </div>
)

    // <Link activeClass="active" to="about">About<Link/>
    {/* <Link activeClass="active" to="projects">Work</Link> */}
    {/* <Link activeClass="active" to="projects" smooth={true} spy={true} duration={500}>Work</Link> */}