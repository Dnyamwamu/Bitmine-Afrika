import React, { useState } from "react"
import Carousel from "../components/caraosel"

import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import InfoSection from "../components/InfoSection/AboutInfo"
import AboutUsSection from "../components/InfoSection/AboutUsSection"
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
  homeObjFour,
  homeObjFive,
} from "../components/InfoSection/Data1"
import HowToInvest from "../components/InfoSection/HowToInvest"
import Navbar from "../components/Navbar/AboutNav"
import Services from "../components/Services"
import Sidebar from "../components/Sidebar"
import AboutSidebar from "../components/Sidebar/AboutSidebar"

const About = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <AboutSidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      {/* <HeroSection /> */}

      <AboutUsSection {...homeObjOne} />
      <HowToInvest {...homeObjFive} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />

      <Footer />
    </>
  )
}

export default About
