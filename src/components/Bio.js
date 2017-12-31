import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from '../assets/profile-pic.jpg'
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
            width: rhythm(3),
            height: rhythm(3),
          }}
        />
        <p>
          Escrito por <strong>Phelipe Wener</strong>. Engenheiro de Software por formação,
          desenvolvedor <i>Fullstack</i> por tentativa e erro, supervaloriza o conhecimento,
          gosta de ler, ser noob em jogos eletrônicos e odeia falar dele mesmo na terceira pessoa.
        </p>
      </div>
    )
  }
}

export default Bio
