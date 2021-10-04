import React from "react"

interface ExperienceProps {
  experiences: Array<Experience>
}

const Experience = ({ experiences }: ExperienceProps) => {
  return (
    <>
      {experiences.map(({ title, role, date, description }: Experience) => (
        <div>
          <h2 className="subsection-title">{title}</h2>
          <div className="role">{role}</div>
          <div>{date}</div>
          <div>{description}</div>
        </div>
      ))}
    </>
  )
}

export default Experience
