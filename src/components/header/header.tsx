import "./styles.css"

import * as React from "react"

import Star from "./star"

const IndexHeader = () => {
  const [screenSize, setScreenSize] = React.useState(0)

  const updateScreenSize = () => {
    setScreenSize(window.innerWidth)
  }

  React.useEffect(() => {
    updateScreenSize()
    window.addEventListener("resize", updateScreenSize)
    return () => {
      window.removeEventListener("resize", updateScreenSize)
    }
  }, [screenSize])

  const starsQuantity = Math.floor((screenSize * Math.PI) / 10)

  return (
    <div className="header-container">
      <div className="header-wrapper">
        {Array.from(Array(starsQuantity)).map((_, i) => (
          <Star key={i} screenSize={screenSize} />
        ))}
      </div>
    </div>
  )
}

export default IndexHeader
