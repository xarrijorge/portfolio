import { NavLink as Link } from 'react-router-dom'

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
            <div className="homeNav">
                <p>Learn more</p>
                <Link
                    to="./about"
                    className={(isActive) => (isActive ? 'active' : '')}
                >
                    <span className="homeLink">About Me</span>
                </Link>
                <p>and see examples of</p>
                <Link
                    to="/work"
                    className={(isActive) => (isActive ? 'active' : '')}
                >
                    <span className="homeLink">My Work</span>
                </Link>
            </div>
        </div>
    )
}

export default Homepage
