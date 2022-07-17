import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import ReceipeList from "../components/ReceipeList"
import Seo from "../components/Seo"

const Contact = ({ data }) => {
  const receipes = data.allContentfulReceipe.nodes
  return (
    <Layout>
      <Seo title="Contact" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Officiis, voluptatem ad esse dignissimos adipisci eveniet?
            </p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              cum, et quas minima blanditiis sint!
            </p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/mayvrwaq"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input type="email" name="email " id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Awesome Favourite Recipes👌</h5>
          <ReceipeList receipes={receipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulReceipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default Contact
