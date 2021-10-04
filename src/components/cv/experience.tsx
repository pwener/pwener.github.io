import "./cv.css"

import React from "react"

interface ExperienceProps {
  title: string
  role: string
  date: string
  description: string
}

const Experience = ({ title, role, date, description }: ExperienceProps) => {
  return (
    <div>
      <h2 className="subsection-title">{title}</h2>
      <div className="role">{role}</div>
      <div>{date}</div>
      <div>{description}</div>
    </div>
  )
}

export default Experience
