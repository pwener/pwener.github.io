import "./styles.css"

import React from "react"

const random = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min)
}

const Star = () => {
  const colourPairs = [
    "#626493;#FFFFFF;#626493;",
    "#A570A4;#FFFFFF;#A570A4",
    "#E47D9C;#FFFFFF;#E47D9C",
    "#FF9884;#FFFFFF;#FF9884",
    "#FFC46C;#FFFFFF;#FFC46C",
  ]

  const seed = random(1, 3)
  const colourIndex = seed % 5
  const duration = random(5, 15) / 10

  return (
    <svg
      className="stars"
      viewBox="0 0 160 160"
      style={{
        left: `${Math.random() * window.innerWidth}`,
        top: `${Math.random() * 20}rem`,
        width: `${seed / 10}rem`,
        height: `${seed / 10}rem`,
      }}
    >
      <path
        d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"
        fill={"#fff4f3"}
      >
        <animate
          attributeType="XML"
          attributeName="fill"
          values={colourPairs[colourIndex]}
          dur={`${duration}s`}
          repeatCount="indefinite"
        />
      </path>
    </svg>
  )
}

const IndexHeader = () => {
  const starsSize = Math.floor((window.innerWidth * Math.PI) / 10)
  return (
    <div className="header-container">
      <div className="header-wrapper">
        {Array.from(Array(starsSize)).map((_, i) => (
          <Star key={i} />
        ))}
        {/* <BurguerMenu /> */}
      </div>
    </div>
  )
}

export default IndexHeader
