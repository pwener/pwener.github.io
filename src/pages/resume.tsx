import "./cv-styles.css"

import * as React from "react"

import BurguerMenu from "../components/menu/menu"
import Curriculum from "../components/cv/curriculum"
import Footer from "../components/footer/footer"
import { en } from "./cv-data"

const CurriculumPage = () => {
  return (
    <>
      <BurguerMenu />
      <Curriculum
        {...en}
        headers={[
          "Professional Experience",
          "Contact Information",
          "Education",
          "Skills",
        ]}
      />
      <Footer />
    </>
  )
}

export default CurriculumPage
