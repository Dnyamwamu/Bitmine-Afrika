import React from "react"
import { TermsOfService1 } from "./Data1"
import {
  InfoContainer,
  InfoWrapper,
  InfoRow1,
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
          <InfoRow1 imgStart={imgStart}>
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
          </InfoRow1>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default TermsOfService
