import React from "react"
import { howToInvest } from "./Data1"
import {
  InfoContainer1,
  InfoWrapper3,
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
        <InfoWrapper3>
          <InfoRow1>
            <TextWrapper2>
              <h1
                style={{ color: "#fff", fontSize: "28px", fontWeight: "bold" }}
              >
                How To Invest
              </h1>
              <TopLine1 style={{ color: "#fff" }}>{topline}</TopLine1>
              {howToInvest.map((item, index) => {
                return (
                  <div key={item.id} className="flex">
                    <p className="pr-2">{index + 1}.</p>
                    <p style={{ color: "#000" }}>{item.guide}</p>
                  </div>
                )
              })}
            </TextWrapper2>
          </InfoRow1>
        </InfoWrapper3>
      </InfoContainer1>
    </>
  )
}

export default HowToInvest
