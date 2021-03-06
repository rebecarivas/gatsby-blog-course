import React from "react"
import links from "./content"
import getThemeColor from "../../utils/getThemeColor"

import {
  MenuLinksWrapper,
  MenuLinksList,
  MenuLinksItem,
  MenuLinksLink,
} from "./style"

const MenuLinks = () => (
  <MenuLinksWrapper>
    <MenuLinksList>
      {links.map((link, i) => (
        <MenuLinksItem key={i}>
          <MenuLinksLink
            to={link.url}
            cover
            direction="left"
            bg={getThemeColor()}
            duration={0.6}
            activeClassName="active"
          >
            {link.label}
          </MenuLinksLink>
        </MenuLinksItem>
      ))}
    </MenuLinksList>
  </MenuLinksWrapper>
)

export default MenuLinks
