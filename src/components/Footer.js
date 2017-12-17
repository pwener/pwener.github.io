import React from 'react'

import { FaHome, FaGithub, FaLinkedin } from 'react-icons/lib/fa'

import './hardStyles.css'

class Footer extends React.Component {
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <a className="footer-icon" href="/" alt="cd ~"><FaHome /></a>
                <a className="footer-icon" href="https://github.com/pwener"><FaGithub /></a>
                <a className="footer-icon" href="https://www.linkedin.com/in/phelipe-wener-7a491a45/"><FaLinkedin /></a>
            </div>
        )
    }
}

export default Footer