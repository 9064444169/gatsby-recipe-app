import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import AllReceipe from "../components/AllReceipe"
import Seo from "../components/Seo"

export default function Home() {
  return (
    <Layout>
      <Seo title="Home" />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="https://www.themealdb.com/images/media/meals/wrustq1511475474.jpg"
            alt="Shawarma"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>Find Recipes</h1>
              <h4>Just a Recipe</h4>
            </div>
          </div>
        </header>
        <AllReceipe />
      </main>
    </Layout>
  )
}
