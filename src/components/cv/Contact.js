import React from 'react'

import { FaEnvelope, FaPhone, FaHome, FaGithub } from 'react-icons/lib/fa'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import './cv.css'

class Contact extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.email} <FaEnvelope/></p>
        <p>{this.props.number} <FaPhone /></p>
        <p>{this.props.address} <FaHome /></p>
        <p>
          <a href={'https://github.com/' + this.props.github}>
            {'https://github.com/' + this.props.github}
          </a>
          &nbsp;<FaGithub />
        </p>
      </div>
    )
  }
}

export default Contact;
