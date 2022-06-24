/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import { SiReact, SiJavascript, SiTypescript, SiCss3 } from 'react-icons/si'

const About = (): JSX.Element => (
    <div className="about">
        <div className="title">
            <h1 className="mainTitle">AbOut Me</h1>
            <h4 className="highlight">
                I'm Xarri. A Developer, <br/>maker and problem solver
            </h4>
            <div className="details">
                <p >
                    I love what I do and I especially enjoy the process of
                    taking a design project and coding it from concept to
                    completion. I'm passionate about building beautiful,
                    functional and accessible user interfaces.
                </p>
                <p>
                    There are things that are essential to any team in order to
                    build tighter bounds and lifelong friendships. Paramount
                    among them are: <span>Respect</span>,
                    <span> Communication and Positive Environment </span>
                    <span>Clear goals,</span> <span>Regular encouragement</span>
                </p>
                <p>
                    I've learned to embody all of these values and exude them
                    wherever I am. More than just that, I'm good at teamwork and
                    collaboration, very lively and fun to be around (dare I say
                    it myself).
                </p>
                <div className="skills">
                    <h6 className="highlight">
                        As a frontend Developer, <br />
                        My primary skillsets are:
                    </h6>
                    <div className="skillsets">
                        <span className="primaryskill">
                            React <SiReact color="#61DAFB" />,
                        </span>
                        <span className="primaryskill">
                            Javascript <SiJavascript color="#FCDC00" />,
                        </span>
                        <span className="primaryskill">
                            Typescript <SiTypescript color="#3178C6" />,
                        </span>
                        <span className="primaryskill">
                            CSS <SiCss3 color="#3C790A" />,
                        </span>
                    </div>
                    <p>
                        I also have experience building fullstack MERN apps.
                        I've worked with Python and Ruby, GraphQL and React
                        Native as well but nothing significant enough to be
                        dangerous.
                    </p>
                </div>
                <h6 className="highlight">
                    I'm a Geek, Nerd and everything in between. I love Star
                    Wars, Anime, Rowlin and Tolkien.
                </h6>
            </div>
        </div>
    </div>
)

export default About
