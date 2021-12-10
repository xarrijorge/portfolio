import React from 'react'

import Layout from '../components/layout'
import HeadHero from '../pages/headHero'
import SEO from '../components/seo'

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <HeadHero />
    </Layout>
)

export default IndexPage
