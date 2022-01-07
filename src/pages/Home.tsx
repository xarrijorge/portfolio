import MovingBorderButton from '../components/MovingBorderButton'

const Homepage = (): JSX.Element => {
    return (
        <div className="homepage">
            <h1>Xarri George</h1>
            <div className="homeNavWrapper">
                <MovingBorderButton label="About" />
                <MovingBorderButton label="Work" />
            </div>
        </div>
    )
}

export default Homepage
