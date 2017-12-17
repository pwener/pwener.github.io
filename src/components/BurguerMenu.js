import React from 'react'

import { bubble as Menu } from 'react-burger-menu'

import styles from './styles'

import './hardStyles.css'

import { MdPermIdentity, MdContactMail, MdHome, MdFolderSpecial } from 'react-icons/lib/md'

class BurguerMenu extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Menu styles={styles.reactBurguerMenu}>
                <a className="menu-item" href="/"><MdHome /> Página Inicial</a>
                <a className="menu-item" href="/about"><MdPermIdentity /> Sobre mim</a>
                <a className="menu-item" href="/contact"><MdContactMail /> Contato</a>
                <a className="menu-item" href="/portifolio"><MdFolderSpecial /> Portifólio</a>
            </Menu>
        )
    }
}

export default BurguerMenu