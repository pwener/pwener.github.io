import React, { Component } from 'react';

import particlesConfig from '../config/particles-config.json'

import Particles from 'react-particles-js';
import { isAbsolute } from 'path';

class IndexHeader extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(particlesConfig);

        return (
            <div style={{
                height: '35vh',
                width: '100%',
                textAlign: 'center',
            }}>
                <Particles
                    width={'100%'} height={'40vh'}
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
                <div style={{ position: 'relative', lineHeight: 0.1}}>
                    <h1>Blog do Wener</h1>
                    <span style={{textAlign: 'right'}}>Filosofando sobre Software...</span>
                </div>
            </div>
        );
    }
}

export default IndexHeader