import React from 'react'

import particlesConfig from '../config/particles-config.json'

import Particles from 'react-particles-js'

import BurguerMenu from './BurguerMenu'

import { isAbsolute, relative } from 'path'

import styles from './styles'

class IndexHeader extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(particlesConfig);

        return (
            <div style={styles.headContainer}>
                <div style={styles.headerWrapper}>
                    <BurguerMenu />

                    <Particles
                        width={'100%'}
                        height={'40vh'}
                        params={{
                            particles: particlesConfig.particles,
                            interactivity: particlesConfig.interactivity
                        }}
                        style={styles.particlesExtraStyle} />

                    <div style={styles.description}>
                        <h1>Blog do Wener</h1>
                        <span>Filosofando sobre Software...</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default IndexHeader