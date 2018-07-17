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
        <div className="role">{this.props.role}</div>
        <div>{this.props.date}</div>
        <div>{this.props.description}</div>
      </div>
    )
  }
}

export default Experience;
