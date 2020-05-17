import React from 'react'

import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Shapes from '../components/shapes'
import lostGif from '../images/404.gif'

const NotFoundPage = () => (
    <div className="missing">
        <SEO title="404: Not found" />
        <Shapes />
        <div className="contentArea">
            <p>NOT FOUND!</p>
            <p>This is not the page you are looking for</p>
            <Link to="/" className="neo-white">
                <i className="fas fa-undo" /> <span>Go back</span>
            </Link>
            <p>to a more civilized space</p>
        </div>
    </div>
)

export default NotFoundPage
