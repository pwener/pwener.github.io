import "../resume-styles.css"

import * as React from "react"

import BurguerMenu from "../../components/menu/menu"
import Curriculum from "../../components/cv/curriculum"
import Footer from "../../components/footer/footer"
import ptbr from "../resume-nice.json"

const CurriculumPage = () => {
  return (
    <>
      <BurguerMenu />
      <Curriculum
        {...ptbr}
        headers={["Experiências", "Contato", "Educação", "Habilidades"]}
      />
    </>
  )
}

export default CurriculumPage
