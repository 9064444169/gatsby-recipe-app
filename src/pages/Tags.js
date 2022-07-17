import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import setupTags from "../utils/setupTags"

const Tags = ({ data }) => {
  const newTags = setupTags(data.allContentfulReceipe.nodes)
  return (
    <Layout>
      <Seo title="Tags" />
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag
            return (
              <Link to={`/${text}`} key={index} className="tag">
                <h5>{text}</h5>
                <p>{value} recipe</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulReceipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags
