import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import HeadHero from "../components/headHero"
import About from "../components/about"
import Particles from "../components/particles"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HeadHero />
    <About />
    {/* <Particles /> */}
    <footer>
      © {new Date().getFullYear()}{" "}
      <a href="https://xarrijorge.com">xarrijorge.com</a>
    </footer>
  </Layout>
)

export default IndexPage
