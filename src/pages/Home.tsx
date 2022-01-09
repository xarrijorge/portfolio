import MovingBorderButton from '../components/MovingBorderButton'
import { Link } from 'react-router-dom'

const Homepage = (): JSX.Element => {
    return (
        <div className="homepage">
            <div className="description">
                <p>Hello, my name is</p>
                <h1 className="title">Xarri George.</h1>
                <p className="mySubText">
                    I'm a <span className="highlight">Frontend</span> focused
                    Javascript <span className="highlight">Developer</span>
                    <p>
                        I believe everyone deserves beauty and innovation, and I
                        aim to deliver just that!
                    </p>
                </p>
            </div>
            <div className="homeNav">
                <p>Learn more</p>
                <Link to="./about">
                    <a className="homeLink">ABOUT</a>
                </Link>
                <p>me and see examples of my</p>
                <Link to="/work">
                    <a className="homeLink">WORK</a>
                </Link>
            </div>
        </div>
    )
}

export default Homepage
