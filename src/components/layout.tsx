import * as React from "react"

import BurguerMenu from "./menu/menu"
import Footer from "./footer/footer"
import IndexHeader from "./header/header"
import { Link } from "gatsby"
import { MdKeyboardReturn } from "@react-icons/all-files/md/MdKeyboardReturn"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        <MdKeyboardReturn />
      </Link>
    )
  }

  return (
    <>
      <BurguerMenu />
      {isRootPath ? <IndexHeader /> : null}
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <header>{header}</header>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
