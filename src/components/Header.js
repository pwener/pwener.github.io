import React, { Component } from 'react'

import particlesConfig from '../config/particles-config.json'

import Particles from 'react-particles-js'

import { bubble as Menu } from 'react-burger-menu'

import { isAbsolute, relative } from 'path';

import styles from './styles'

class IndexHeader extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(particlesConfig);

        return (
            <div style={styles.headContainer}>
                <div style={styles.headerWrapper}>
                    <Menu styles={styles.reactBurguerMenu}>
                        <a id="home" className="menu-item" href="/">Home</a>
                        <a id="about" className="menu-item" href="/about">About</a>
                        <a id="contact" className="menu-item" href="/contact">Contact</a>
                        <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
                    </Menu>

                    <Particles 
                        width={'100%'} 
                        height={'40vh'}
                        params={{
                            particles: particlesConfig.particles,
                            interactivity: particlesConfig.interactivity
                        }}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            background: "#2c3e50"
                        }} />

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