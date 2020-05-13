import React from 'react'
// import { Link } from "gatsby"

import Layout from '../components/layout'
// import Image from "../components/image"
import HeadHero from '../pages/headHero'
import About from '../pages/about'
import SEO from '../components/seo'

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <HeadHero/>
    </Layout>
)

export default IndexPage