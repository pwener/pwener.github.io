import React, { Component } from 'react'

import particlesConfig from '../config/particles-config.json'

import Particles from 'react-particles-js'

import { bubble as Menu } from 'react-burger-menu'

import { isAbsolute, relative } from 'path'

import './hardStyles.css'
import styles from './styles'

import { MdPermIdentity, MdContactMail, MdHome, MdFolderSpecial } from 'react-icons/lib/md'

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
                        <a className="menu-item" href="/"><MdHome /> Página Inicial</a>
                        <a className="menu-item" href="/about"><MdPermIdentity /> Sobre mim</a>
                        <a className="menu-item" href="/contact"><MdContactMail /> Contato</a>
                        <a className="menu-item" href="/portifolio"><MdFolderSpecial /> Portifólio</a>
                    </Menu>

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