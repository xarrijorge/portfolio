/*eslint-disable*/
import React from 'react';
import {Link, animateScroll as scroll, scrollSpy} from 'react-scroll';
export default (props) =>(
  <fragment className="base navigation">
    <span></span><span></span><span></span>
    <Link activeClass="active" to="about" smooth={true} spy={true} duration={500}>About</Link>
  </fragment>
)
