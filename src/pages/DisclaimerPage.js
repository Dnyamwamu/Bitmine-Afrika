import React, {useState} from "react"
import { Disclaimer1 } from "../components/InfoSection/Data1"
import Disclaimer from "../components/InfoSection/Disclaimer"
import Navbar from "../components/Navbar"
import ScrollToTop from "../components/ScrollToTop"
import AboutSidebar from "../components/Sidebar/AboutSidebar"

const DisclaimerPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <AboutSidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <ScrollToTop />
      <Disclaimer {...Disclaimer1} />
    </div>
  )
}

export default DisclaimerPage
