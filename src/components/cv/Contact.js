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
        <div>{this.props.email} <FaEnvelope/></div>
        <div>{this.props.number} <FaPhone /></div>
        <div>{this.props.address} <FaHome /></div>
        <div>
          <a href={'https://github.com/' + this.props.github}>
            {'https://github.com/' + this.props.github}
          </a>
          &nbsp;<FaGithub />
        </div>
      </div>
    )
  }
}

export default Contact;
