import React from "react"
import { howToInvest } from "./Data1"
import {
  InfoContainer1,
  InfoWrapper,
  InfoRow1,
  Column4,
  TextWrapper2,
  TopLine1,
  Heading,
  Subtitle,
  SubtitleWrap,
} from "./InfoElements"

const HowToInvest = ({
  id,
  lightBg,
  topline,
  darkText,
  description,
  imgStart,
}) => {
  return (
    <>
      <InfoContainer1 id={id} style={{ backgroundColor: "#00b0ff" }}>
        <InfoWrapper>
          <InfoRow1>
            <TextWrapper2>
              <TopLine1 style={{ color: "#fff" }}>{topline}</TopLine1>
              {howToInvest.map((item) => {
                return (
                  <div key={item.id}>
                    <p style={{ color: "#000" }}>{item.guide}</p>
                  </div>
                )
              })}
            </TextWrapper2>
          </InfoRow1>
        </InfoWrapper>
      </InfoContainer1>
    </>
  )
}

export default HowToInvest