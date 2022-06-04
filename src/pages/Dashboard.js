import React, { useState } from "react"
import { ReferralObj } from "../components/InfoSection/Data1"
import Dashboard from "../components/Dashboard"
import Navbar from "../components/Navbar"
import ScrollToTop from "../components/ScrollToTop"
import AboutSidebar from "../components/Sidebar/AboutSidebar"

const ReferralPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <AboutSidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <ScrollToTop />
      <Dashboard />
    </div>
  )
}

export default ReferralPage
