import * as React from "react"

import Contact from "./contact"
import Education from "./education"
import Experience from "./experience"
import Skills from "./skills"
import { StaticImage } from "gatsby-plugin-image"

const LeftColumn = ({ experiences, contact, headers }: LeftProps) => {
  const [expHeader, contactHeader] = headers

  return (
    <div className="column" id="column-left">
      <h2 className="section-title">{expHeader}</h2>

      <Experience experiences={experiences} />

      <h2 className="section-title">{contactHeader}</h2>

      <Contact {...contact} />
    </div>
  )
}

const RightColumn = ({ education, skills, headers }: RightProps) => {
  const [educationHeader, skillHeader] = headers

  return (
    <div className="column" id="column-right">
      <h2 className="section-title">{educationHeader}</h2>

      <Education education={education} />

      <h2 className="section-title">{skillHeader}</h2>
      <Skills skills={skills} />
    </div>
  )
}

const Curriculum = ({
  name,
  role,
  experiences,
  contact,
  education,
  skills,
  headers,
}: CurriculumProps) => {
  const [expHeader, contactHeader, educationHeader, skillHeader] = headers
  return (
    <div className="page-wrapper">
      <div className="wrapper">
        <h1 className="name">{name}</h1>
        <h6 className="occupation">{role}</h6>
        <StaticImage
          className="bio-avatar"
          layout="constrained"
          formats={["auto", "webp", "avif"]}
          src="../../images/profile-pic.png"
          width={150}
          height={150}
          quality={100}
          alt="Profile picture"
        />
        <div
          className="cv-content"
          style={{ display: "flex", textAlign: "right" }}
        >
          <LeftColumn
            headers={[expHeader, contactHeader]}
            experiences={experiences}
            contact={contact}
          />
          <RightColumn
            headers={[educationHeader, skillHeader]}
            education={education}
            skills={skills}
          />
        </div>
      </div>
    </div>
  )
}

export default Curriculum
