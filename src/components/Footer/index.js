import React from "react"
import { animateScroll as scroll } from "react-scroll"
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa"
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialIconLink,
  SocialMedia,
  SocialLogo,
  SocialIcons,
  WebsiteRights,
  SocialMediaWrap,
} from "./FooterElements"

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle
                style={{
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                About us
              </FooterLinkTitle>
              <FooterLink to="/disclaimer">Disclaimer</FooterLink>

              <FooterLink to="/termsofservice">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle
                style={{
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                Contact us
              </FooterLinkTitle>
              <FooterLink to="/">info@bitmineafrika.com</FooterLink>
              <FooterLink to="/">+254 756 939508</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle
                style={{
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                More
              </FooterLinkTitle>
              <FooterLink to="/referral">Referral Program</FooterLink>
              <FooterLink to="/about">FAQ</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome()}>
              Bitmine{" "}
              <span
                style={{
                  color: "#000",
                  // fontStyle: "oblique",
                  fontWeight: "400",
                }}
              >
                Afrika
              </span>
            </SocialLogo>
            <WebsiteRights>
              Copyright ©{new Date().getFullYear()}. bitmineafrika.com. All
              rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="/"
                target="_blank"
                aria-label="Facebook"
                style={{
                  color: "#000",
                }}
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="/"
                target="_blank"
                aria-label="Instagram"
                style={{
                  color: "#000",
                }}
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="/"
                target="_blank"
                aria-label="Youtube"
                style={{
                  color: "#000",
                }}
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="/"
                target="_blank"
                aria-label="Twitter"
                style={{
                  color: "#000",
                }}
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="/"
                target="_blank"
                aria-label="Whatsapp"
                style={{
                  color: "#000",
                }}
              >
                <FaWhatsapp />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
