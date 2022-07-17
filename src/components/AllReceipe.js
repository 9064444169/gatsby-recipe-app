import React from "react"
import ReceipeList from "./ReceipeList"
import TagsList from "./TagsList"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    allContentfulReceipe(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllReceipe = () => {
  const data = useStaticQuery(query)
  const receipes = data.allContentfulReceipe.nodes
  return (
    <section className="recipes-container">
      <TagsList receipes={receipes} />
      <ReceipeList receipes={receipes} />
    </section>
  )
}

export default AllReceipe
