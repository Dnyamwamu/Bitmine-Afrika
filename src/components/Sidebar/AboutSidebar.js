import React from "react"
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  SidebarRoute1,
} from "./SidebarElements"

const AboutSidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About Us
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>
            How to Invest
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Crypto
          </SidebarLink>
          <SidebarLink to="signup" onClick={toggle}>
            DeFI-Yield
          </SidebarLink>
          <SidebarLink to="signup" onClick={toggle}>
            Invest With Us
          </SidebarLink>
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

export default AboutSidebar
