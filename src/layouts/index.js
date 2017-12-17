import React from 'react'
import Link from 'gatsby-link'

import { Container } from 'react-responsive-grid'

import BurguerMenu from '../components/BurguerMenu'
import IndexHeader from '../components/Header'

import styles from '../components/styles'

import { rhythm, scale } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname === rootPath) {
      header = (
        <IndexHeader />
      )
    } else {
      header = (
        <div style={{height: 36}}>
          <BurguerMenu />
        </div>
      )
    }
    return (
      <div>
        {header}
        <Container
          style={{
            maxWidth: rhythm(32),
            padding: `${rhythm(0)} ${rhythm(3 / 4)}`,
          }}
        >
          {children()}
        </Container>
      </div>
    )
  }
}

export default Template
