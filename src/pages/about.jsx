import React from 'react'
import image from '../images/porygonPic.png'
import Layout from '../components/layout'

export default () => (
    <Layout>
        <div className="base about">
            <img src={image} alt="Xarri Smiling" className="aboutPic" />
            <div className="socialbox">
                <a
                    href="https://github.com/xarrijorge"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <i className="fa fa-github"></i>
                </a>
                <a
                    href="https://twitter.com/xarrijorge"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <i className="fa fa-twitter"></i>
                </a>
                <a
                    href="https://codepen.io/algorithm"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <i className="fa fa-codepen"></i>
                </a>
            </div>
            <p>
                I'm a Javascript developer living in Monrovia, Liberia. I love
                what I do and I especially enjoy the process of taking a design
                project and coding it from concept to completion. I'm a Geek,
                Nerd and everything in between.{' '}
            </p>{' '}
            <p>
                I love Star Wars, Anime, Rowlin and Tolkien. I aslo enjoy
                watcing and playing Football - go Gooners - and I enoy video
                games as well.
            </p>
        </div>
    </Layout>
)
