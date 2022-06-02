import React from "react"
import { TermsOfService1 } from "./Data1"
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column4,
  TextWrapper,
  TopLine1,
  Heading,
  Subtitle,
  SubtitleWrap,
} from "./InfoElements"

const TermsOfService = ({
  id,
  lightBg,
  topline,
  darkText,
  description,
  imgStart,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <h1 style={{ color: "#00b0ff", fontSize: "24px" }}>
              Terms of Service
            </h1>
            <TextWrapper>
              <TopLine1>{topline}</TopLine1>
              {TermsOfService1.map((item) => {
                return (
                  <div key={item.id}>
                    <p>{item.guide}</p>
                  </div>
                )
              })}
            </TextWrapper>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default TermsOfService
