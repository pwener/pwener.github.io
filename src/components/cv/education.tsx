import React from "react"

interface EducationProps {
  education: Array<Education>
}

const Education = ({ education }: EducationProps) => {
  return (
    <>
      {education.map(({ name, description }) => (
        <div>
          <h2 className="subsection-title">{name}</h2>
          <div>{description}</div>
        </div>
      ))}
    </>
  )
}

export default Education
