import "./cv.css"

import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaHome } from "@react-icons/all-files/fa/FaHome"
import { FaPhone } from "@react-icons/all-files/fa/FaPhone"
import React from "react"

interface ContactProps {
  email: string
  number: string
  address: string
  github: string
}

const Contact = ({ email, number, address, github }: ContactProps) => {
  return (
    <div>
      <div>
        {email} <FaEnvelope />
      </div>
      <div>
        {number} <FaPhone />
      </div>
      <div>
        {address} <FaHome />
      </div>
      <div>
        <a href={"https://github.com/" + github}>
          {"https://github.com/" + github}
        </a>
        &nbsp;
        <FaGithub />
      </div>
    </div>
  )
}

export default Contact
