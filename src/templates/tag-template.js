import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import ReceipeList from "../components/ReceipeList"
import Seo from "../components/Seo"

const TagTemplate = ({ data, pageContext }) => {
  const receipes = data.allContentfulReceipe.nodes
  return (
    <Layout>
      <Seo title={pageContext.tag} />
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <div className="tag-recipes">
          <ReceipeList receipes={receipes} />
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query GetRecipeByTag($tag: String) {
    allContentfulReceipe(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        title
        id
        prepTime
        cookTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default TagTemplate
