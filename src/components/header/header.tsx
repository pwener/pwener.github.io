import "./styles.css"

import * as React from "react"

import Star from "./star"

const IndexHeader = () => {
  const starsQuantity = Math.floor((window.innerWidth * Math.PI) / 10)

  return (
    <div className="header-container">
      <div className="header-wrapper">
        {Array.from(Array(starsQuantity)).map((_, i) => (
          <Star key={i} />
        ))}
      </div>
    </div>
  )
}

export default IndexHeader
