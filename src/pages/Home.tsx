import React from 'react'
import Image from '../images/IMG-20200705-WA0016.png'

const Homepage = (): JSX.Element => {
    return (
        <div className="homepage">
            <div className="description">
                <p>Hello, my name is</p>
                <h1 className="title">Xarri George.</h1>
                <div className="mySubText">
                    I'm a <span className="highlight">Frontend</span> focused
                    Javascript <span className="highlight">Developer</span>
                    <p>
                        I believe everyone deserves beauty and innovation, and I
                        aim to deliver just that!
                    </p>
                </div>
            </div>
            <div className="imgBox">
                <img src={Image} alt="Xarri smiling" />
            </div>
        </div>
    )
}

export default Homepage
