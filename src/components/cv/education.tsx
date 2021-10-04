import "./cv.css"

import React from "react"

interface EducationProps {
  name: string
  description: string
}

const Education = ({ description, name }: EducationProps) => {
  return (
    <div>
      <h2 className="subsection-title">{name}</h2>
      <div>{description}</div>
    </div>
  )
}

export default Education
