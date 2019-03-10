import React, { Component } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import HeadHero from "../components/headHero"
import About from "../components/about"
import SEO from "../components/seo"

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.aboutRef = React.createRef()
  }
  scrollToAbout = () => {
    this.aboutRef.scrollIntoView({ behavior: "smooth" })
  }
  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <HeadHero />
        <About ref={this.aboutRef} />
      </Layout>
    )
  }
}

export default IndexPage
