import React from "react"

import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND!</h1>
    <h2>This is not the page you're looking for!</h2>
    <Link to="/">Back</Link>
    <span> to more civilized space</span>
  </Layout>
)

export default NotFoundPage
