/*eslint-disable*/
import React from 'react';
import {Link, animateScroll as scroll, scrollSpy} from 'react-scroll';
import logo from '../images/xarrilogocropped.png';

export default (props) =>(
  <div className="base navigation">
    <img src={logo}alt="logo image" className="logo"/>
    <Link activeClass="active" to="about" smooth={true} spy={true} duration={500}offset={-50}>About</Link>
  </div>
)
