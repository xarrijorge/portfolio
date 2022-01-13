/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
// import image from '../images/xarri.jpg'
import Social from '../components/Social'
const About = (): JSX.Element => (
    <div className="about">
        <div className="title">
            <h1 className="mainTitle">About Me</h1>
            <h4 className="subTitle">
                I'm Xarri George. A Developer, maker and problem solver
                <p>
                    <a href="mailto: kodinglife@gmail.com" className="email">
                        hello@xarrijorge.com
                    </a>
                </p>
                <Social />
            </h4>{' '}
            {/* <div className="image"></div> */}
        </div>
        <div className="details">
            <p className="bio">
                I love what I do and I especially enjoy the process of taking a
                design project and coding it from concept to completion. I'm
                passionate about building beautiful, functional and accessible
                user interfaces.
            </p>

            <p className="hobbies">
                I'm a Geek, Nerd and everything in between. I love Star Wars,
                Anime, Rowlin and Tolkien.
            </p>
        </div>
        <div className="skills"></div>
    </div>
)

export default About
