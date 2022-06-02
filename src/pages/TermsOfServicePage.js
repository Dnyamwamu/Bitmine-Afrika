import React, { useState } from "react"
import TermsOfService from "../components/InfoSection/TermsOfService"
import Navbar from "../components/Navbar"
import ScrollToTop from "../components/ScrollToTop"
import AboutSidebar from "../components/Sidebar/AboutSidebar"

const TermsOfServicePage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <AboutSidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <ScrollToTop />
      <TermsOfService />
    </div>
  )
}

export default TermsOfServicePage
