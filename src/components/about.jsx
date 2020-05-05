import React from "react"
import image from "../images/xarriImage.jpg"

export default () => (
  <div className="base about">
    <div className="content">
      <section></section>
      <div className="textContent">
        <img src={image} alt="Xarri image" className="mobileImage"/>
        I'm a Frontend UI/UX developer living in Monrovia, Liberia. I love what
        I do and I especially enjoy the process of taking a design project and
        coding it from concept to completion. I'm a Geek, Nerd and everything in
        between.
      </div>
    </div>
    <div className="graphic">
      <img src={image} alt="Xarri standing" />
    </div>
  </div>
)
