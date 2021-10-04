import "./cv-styles.css"

import * as React from "react"

import Contact from "../components/cv/contact"
import Education from "../components/cv/education"
import Experience from "../components/cv/experience"
import Skills from "../components/cv/skills"
import { StaticImage } from "gatsby-plugin-image"
import data from "./data"

const LeftColumn = () => {
  return (
    <div className="column" id="column-left">
      <h2 className="section-title">Experiências</h2>

      {data.experiences.map(e => (
        <Experience {...e} />
      ))}

      <h2 className="section-title">Contato</h2>

      <Contact {...data.contact} />
    </div>
  )
}

const RightColumn = () => {
  return (
    <div className="column" id="column-right">
      <h2 className="section-title">Educação</h2>

      {data.education.map(e => (
        <Education {...e} />
      ))}

      <h2 className="section-title">Habilidades</h2>
      <Skills skills={data.skills} />
    </div>
  )
}

const Curriculum = () => {
  return (
    <div className="page-wrapper">
      <div className="wrapper">
        <h1 className="name">Phelipe Wener</h1>
        <h6 className="occupation">Engenheiro de Software</h6>
        <StaticImage
          className="bio-avatar"
          layout="constrained"
          formats={["auto", "webp", "avif"]}
          src="../images/profile-pic.png"
          width={150}
          height={150}
          quality={95}
          alt="Profile picture"
        />
        <div
          className="cv-content"
          style={{ display: "flex", textAlign: "right" }}
        >
          <LeftColumn />
          <RightColumn />
        </div>
      </div>
    </div>
  )
}

export default Curriculum
