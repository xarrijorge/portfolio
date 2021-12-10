import React from 'react'
import image from '../images/porygonPic.png'
import Layout from '../components/layout'
import Social from '../components/Social'

const About = () => (
    <Layout>
        <div className='base about'>
            <img src={image} alt='Xarri Smiling' className='aboutPic' />
            <Social />
            <h2 className='text'>
                I'm a Javascript developer living in Monrovia, Liberia. I love
                what I do and I especially enjoy the process of taking a design
                project and coding it from concept to completion. I'm a Geek,
                Nerd and everything in between.{' '}
            </h2>{' '}
            <h2 className='text'>
                I love Star Wars, Anime, Rowlin and Tolkien. I aslo enjoy
                watcing and playing Football - go Gooners - and I enoy video
                games as well.
            </h2>
        </div>
    </Layout>
)

export default About
