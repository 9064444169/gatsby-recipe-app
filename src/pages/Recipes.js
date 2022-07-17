import React from "react"
import AllReceipe from "../components/AllReceipe"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const Recipes = () => {
  return (
    <Layout>
      <Seo title="recipes" />
      <main className="page">
        <AllReceipe />
      </main>
    </Layout>
  )
}

export default Recipes
