import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'
import BlogHeader from '../components/Header'

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
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            Blog do Wener
          </Link>
        </h1>
      )
    } else {
      header = (
        <BlogHeader />
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
