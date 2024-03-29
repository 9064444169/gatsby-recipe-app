import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Images = () => {
  return (
    <Wrapper>
      <article>
        <h4>Contrained/default</h4>
        <StaticImage
          src="https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg"
          alt="Food"
          placeholder="tracedSVG"
          layout="constrained"
          className="example-img"
          as="section"
        />
      </article>
      <article>
        <h4>fixed</h4>
        <StaticImage
          src="https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg"
          alt="Food"
          placeholder="blurred"
          layout="fixed"
          width={200}
          className="example-img"
          as="div"
        />
      </article>

      <article>
        <h4>Full width</h4>
        <StaticImage
          src="https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg"
          alt="Food"
          placeholder="dominantcolor"
          layout="fullWidth"
          className="example-img"
          as="article"
        />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 70vw;
  margin: 0 auto;
  display: grid;
  text-align: center;
  gap: 2rem;
  article {
    border: 2px solid red;
  }
  .example-img {
    border-radius: 1rem;
    height: 300px;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
    .example-img {
      height: 200px;
    }
  }
`

export default Images
