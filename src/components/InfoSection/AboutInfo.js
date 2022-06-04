import React from "react"
import { Button } from "../ButtonElement"
import {
  InfoContainer,
  InfoWrapper,
  InfoRow2,
  Column1,
  Column2,
  Column3,
  TextWrapper,
  TopLine,
  Heading2,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./InfoElements"

const InfoSection = ({
  id,
  lightBg,
  imgStart,
  topline,
  lightText,
  darkText,
  headline,
  description,
  description1,
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
        <InfoWrapper>
          <InfoRow2 imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topline}</TopLine>
                <Heading2 lightText={lightText}>{headline}</Heading2>
                <Subtitle darkText={darkText}>{description}</Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
            <Column3>
              <Subtitle darkText={darkText}>{description1}</Subtitle>
            </Column3>
          </InfoRow2>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
