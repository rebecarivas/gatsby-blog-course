import React from "react"
import MenuLinks from "../MenuLinks"
import Profile from "../Profile"
import SocialLinks from "../SocialLinks"

import { SidebarWrapper } from "./style"

const Sidebar = () => (
  <SidebarWrapper>
    <Profile />
    <SocialLinks />
    <MenuLinks />
  </SidebarWrapper>
)

export default Sidebar
