import React from "react"
import PropTypes from "prop-types"
import Profile from "../Profile"
import GlobalStyles from "../../styles/global"
import { LayoutWrapper, LayoutMain } from "./style"

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyles />
      <aside>
        <Profile />
      </aside>
      <LayoutMain>{children}</LayoutMain>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
