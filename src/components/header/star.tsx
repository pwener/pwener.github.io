import * as React from "react"

const random = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min)
}

const STARS_PALETTE = [
  "#626493;#FFFFFF;#626493;",
  "#A570A4;#FFFFFF;#A570A4",
  "#E47D9C;#FFFFFF;#E47D9C",
  "#FF9884;#FFFFFF;#FF9884",
  "#FFC46C;#FFFFFF;#FFC46C",
]

const Star = () => {
  const seed = random(1, 3)
  const size = seed / 10
  const colourIndex = seed % 5
  const duration = random(5, 15) / 10
  const positionLeft = Math.random() * window.innerWidth
  const positionTop = Math.random() * 20

  return (
    <svg
      className="stars"
      viewBox="0 0 160 160"
      style={{
        left: positionLeft,
        top: `${positionTop}rem`,
        width: `${size}rem`,
        height: `${size}rem`,
      }}
    >
      <path
        d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"
        fill={"#FFFFFF"}
      >
        <animate
          attributeType="XML"
          attributeName="fill"
          values={STARS_PALETTE[colourIndex]}
          dur={`${duration}s`}
          repeatCount="indefinite"
        />
      </path>
    </svg>
  )
}

export default Star
