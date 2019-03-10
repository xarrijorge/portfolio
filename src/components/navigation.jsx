import React from 'react';

export default (props) =>(
  <div className="base navigation">
    <span></span><span></span><span></span>
    <a href="#about" onClick={props.scrollToAbout}>About</a>
  </div>

)
