/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
// import image from '../images/xarri.jpg'
import Social from '../components/Social'
const About = () => (
    <div className="about">
        <div className="title">
            <h1>About Me</h1>
            <div className="image"></div>
        </div>
        <div className="details">
            <div className="col1">
                <h4>I'm Xarri George. A Developer, maker and problem solver</h4>
                <a href="mailto: kodinglife@gmail.com" className="email">
                    hello@xarrijorge.com
                </a>
                <Social />
            </div>
            <div className="col2"></div>
            <div className="col3">
                <p className="bio">
                    Frontend, UI/UX developer. I love what I do and I especially
                    enjoy the process of taking a design project and coding it
                    from concept to completion. I'm passionate about building
                    beautiful, functional and accessible user interfaces.
                </p>

                <p className="hobbies">
                    I'm a Geek, Nerd and everything in between. I love Star
                    Wars, Anime, Rowlin and Tolkien.
                </p>
            </div>
        </div>
        <div className="skills"></div>
    </div>
)

export default About
