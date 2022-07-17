import { Link } from "gatsby"
import React from "react"
import setupTags from "../utils/setupTags"

const TagsList = ({ receipes }) => {
  const newTags = setupTags(receipes)

  return (
    <div className="tag-container">
      <h4>Recipes</h4>
      <div className="tags-list">
        {newTags.map((tag, index) => {
          const [text, value] = tag
          return (
            <Link to={`/${text}`} key={index}>
              {text} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagsList
