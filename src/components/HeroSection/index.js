import React, { useState } from "react"
import {
  VideoBg,
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroP1,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements"
import Video from "../../videos/video.m4v"
import { Button } from "../ButtonElement"

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>Beyond Expectations</HeroH1>
        <HeroP>" - Maximize your returns - ".</HeroP>
        <HeroP1>Create your account today and lets invest</HeroP1>
        <HeroBtnWrapper>
          <Button
            to="/signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
