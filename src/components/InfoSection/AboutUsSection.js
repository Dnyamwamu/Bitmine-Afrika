import React from "react"
import { Button } from "../ButtonElement"
import {
  InfoContainer,
  InfoWrapper1,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  SubtitleWrap,
} from "./InfoElements"

const AboutUsSection = ({
  id,
  lightBg,
  imgStart,
  topline,
  lightText,
  darkText,
  headline,
  description,
  description2,
  description3,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper1>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topline}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <Subtitle darkText={darkText}>{description2}</Subtitle>
              <SubtitleWrap>
                <Subtitle darkText={darkText} style={{ color: "#00B0FF" }}>
                  {description3}
                </Subtitle>
              </SubtitleWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper1>
      </InfoContainer>
    </>
  )
}

export default AboutUsSection
