import "./styles.css"

import * as React from "react"

import { MdFolderSpecial } from "@react-icons/all-files/md/MdFolderSpecial"
import { MdHome } from "@react-icons/all-files/md/MdHome"
import { MdPermIdentity } from "@react-icons/all-files/md/MdPermIdentity"
import { slide as Menu } from "react-burger-menu"

const BurguerMenu = () => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        <MdHome /> Página Inicial
      </a>
      <a className="menu-item" href="/about">
        <MdPermIdentity /> Sobre mim
      </a>
      <a className="menu-item" href="/cv">
        <MdFolderSpecial /> Currículo [pt-BR]
      </a>
      <a className="menu-item" href="/resume">
        <MdFolderSpecial /> Resume [en-US]
      </a>
    </Menu>
  )
}

export default BurguerMenu
