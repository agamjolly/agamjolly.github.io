import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>Oops, this page doesn't exist. Click <a href="/">here</a> to go back to home.</p>
  </Layout>
)

export default NotFoundPage
