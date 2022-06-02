import React from "react"
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLinkA,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  SidebarRoute1,
} from "./SidebarElements"

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLinkA to="/" onClick={toggle}>
            Home
          </SidebarLinkA>
          <SidebarLinkA to="/about" onClick={toggle}>
            About Us
          </SidebarLinkA>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute1 to="/signin">Sign In</SidebarRoute1>
        </SideBtnWrap>
        <SideBtnWrap>
          <SidebarRoute to="/signup">Create An Account</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
