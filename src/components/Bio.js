import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Kyle Mathews`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Escrito por <strong>Phelipe Wener</strong> que é programador fullstack,
          promissor(mas não tanto) Engenheiro de Software e perfeccionista. 
          Acha que falar de si próprio é uma bobagem.
        </p>
      </div>
    )
  }
}

export default Bio
