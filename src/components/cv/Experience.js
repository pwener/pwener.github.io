import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import './cv.css'

class Experience extends React.Component {
  render() {
    return (
      <div>
        <h2 className="cv-subsection">{this.props.title}</h2>
        <p className="cv-normal-text role">{this.props.role}</p>
        <p className="cv-normal-text">{this.props.date}</p>
        <p className="cv-normal-text">{this.props.description}</p>
      </div>
    )
  }
}

export default Experience;
