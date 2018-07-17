import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import './cv.css'

class Education extends React.Component {
  render() {
    return (
      <div>
        <h2 className="cv-subsection">{this.props.course}</h2>
        <div>{this.props.description}</div>
      </div>
    )
  }
}

export default Education;
