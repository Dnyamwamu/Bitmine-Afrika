import React, { useState } from "react"
import Carousel from "../components/caraosel"

import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import InfoSection from "../components/InfoSection"
import AboutUsSection from "../components/InfoSection/AboutUsSection"
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
  homeObjFour,
  homeObjFive,
} from "../components/InfoSection/Data1"
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
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
      <InfoSection {...homeObjFive} />
      <Services />
      <InfoSection {...homeObjThree} />

      <Footer />
    </>
  )
}

export default About
