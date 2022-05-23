/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import Social from '../components/Social'

const About = (): JSX.Element => (
    <div className="about">
        <div className="title">
            <h1 className="mainTitle">AbOut Me</h1>
            <h4 className="subTitle">
                I'm Xarri. A Developer, maker and problem solver
            </h4>
            <div className="details">
                <p className="bio">
                    I love what I do and I especially enjoy the process of
                    taking a design project and coding it from concept to
                    completion. I'm passionate about building beautiful,
                    functional and accessible user interfaces.
                </p>
                <p>
                    My immediate goal is to work in a close-knit, high
                    performing team. There are things that are essential to any
                    team in order to build tighter bounds and lifelong
                    friendships. Paramount among them are: <span>Respect</span>,
                    <span> Communication and Positive Environment </span>
                    <span>Clear goals,</span> <span>Regular encouragement</span>
                </p>
                <p>
                    I've learned to embody all of these values and exude them
                    wherever I am. More than just that, I'm good at teamwork and
                    collaboration, very lively and fun to be around (dare I say
                    it myself).
                </p>

                <p className="hobbies">
                    I'm a Geek, Nerd and everything in between. I love Star
                    Wars, Anime, Rowlin and Tolkien.
                </p>
            </div>
        </div>
        <div className="skills">Testing 123</div>
    </div>
)

export default About
