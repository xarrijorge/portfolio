import MovingBorderButton from '../components/MovingBorderButton'

const HeadHero = (): JSX.Element => {
    return (
        <div className="homepage">
            {/* <img className='homeImage' src={logo} alt='xarri logo' /> */}
            <h1>Xarri George</h1>
            <div className="homeNavWrapper">
                <MovingBorderButton label="About" />
                <MovingBorderButton label="Work" />
            </div>
            {/* <h4>Tranquil Simplicity, Rustic Elegance, Imperfect Beauty</h4> */}
        </div>
    )
}

export default HeadHero
