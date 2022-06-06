import React from "react"
import { animateScroll as scroll } from "react-scroll"
import { GiAfrica } from "react-icons/gi"
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
  FooterBtnLink,
  FooterBtn,
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
              <FooterLink to="/referral">Referral Program</FooterLink>
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
              <FooterLink to="/about">FAQ</FooterLink>
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
                Get in Touch
              </FooterLinkTitle>
              <form>
                <div className="flex">
                  <div className="relative w-full mb-3 mr-4 ">
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 mr-4"
                      placeholder="Name"
                    />
                  </div>

                  <div className="relative mb-3 ">
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-black bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 "
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div className="relative mb-3">
                  <textarea
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-600 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 mr-4"
                    placeholder="Message"
                  />
                </div>

                <div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      id="customCheckLogin"
                      type="checkbox"
                      className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                    />
                    <span className="ml-2 text-sm font-semibold text-blueGray-600">
                      Subscribe for Newsletter
                    </span>
                  </label>
                </div>

                <div className="text-center mt-6">
                  <button
                    className="bg-black text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="button"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome()}>
              <GiAfrica style={{ fontSize: "1.8rem" }} />
              Bitmine{" "}
              <span
                style={{
                  color: "#000",
                  fontSize: "16px",
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
