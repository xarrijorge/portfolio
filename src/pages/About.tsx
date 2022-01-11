import image from '../images/xarri.jpg'
const About = () => (
    <div className="about">
        <div className="title">
            <h1>About Me</h1>
            <img src={image} alt="" />
        </div>
        <div className="details">
            <div className="col1">
                <h3>I'm Xarri George. A Developer, maker and problem solver</h3>
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
                {/* 
                <p>
                     I have experience in building websites and
                    web applications. I'm currently looking for a position in
                    the web development industry. I also have experience in
                    Network infrastructure and agent management and technical
                    support.
                </p> */}
            </div>
        </div>
    </div>
)

export default About
