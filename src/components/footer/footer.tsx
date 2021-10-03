import "./styles.css"

import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaHome } from "@react-icons/all-files/fa/FaHome"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"
import React from "react"

const Footer = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <a className="footer-icon" href="/">
        <FaHome />
      </a>
      <a className="footer-icon" href="https://github.com/pwener">
        <FaGithub />
      </a>
      <a
        className="footer-icon"
        href="https://www.linkedin.com/in/phelipe-wener-7a491a45/"
      >
        <FaLinkedin />
      </a>
    </div>
  )
}

export default Footer
