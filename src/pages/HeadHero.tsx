import React from 'react'
import logo from '../images/xarrilogocropped.png'

const HeadHero = (): JSX.Element => {
    return (
        <div className='base head-hero'>
            <img className='homeImage' src={logo} alt='xarri logo' />
            <h1>Xarri George</h1>
            <h4>Tranquil Simplicity, Rustic Elegance, Imperfect Beauty</h4>
        </div>
    )
}

export default HeadHero
