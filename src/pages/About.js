import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import ReceipeList from "../components/ReceipeList"
import Seo from "../components/Seo"

const About = ({
  data: {
    allContentfulReceipe: { nodes: receipes },
  },
}) => {
  return (
    <Layout>
      <Seo title="About" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I am a Tamiya</h2>
            <p>
              oak the beans in water to cover overnight. Drain. If skinless
              beans are unavailable, rub to loosen the skins, then discard the
              skins. Pat the beans dry with a towel.
            </p>
            <p>
              Grind the beans in a food mill or meat grinder. If neither
              appliance is available, process them in a food processor but only
              until the beans form a paste. Add the scallions, garlic, cilantro,
              cumin, baking powder, cayenne, salt, pepper, and coriander, if
              using. Refrigerate for at least 30 minutes.
            </p>
            <Link to="/Contact" className="btn">
              Contact
            </Link>
          </article>
          <StaticImage
            src="https://www.themealdb.com/images/media/meals/n3xxd91598732796.jpg"
            alt="Tamiya"
            className="about-img"
            placeholder="tracedSVG"
          />
        </section>
        <section className="featured-recipes">
          <h5>Awesome Recipes👌</h5>
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

export default About
