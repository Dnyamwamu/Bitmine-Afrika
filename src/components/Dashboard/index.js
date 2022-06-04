import React from "react"

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

const Dashboard = ({
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
            <h1 style={{ color: "#00b0ff", fontSize: "24px" }}>Dashboard</h1>
            <TextWrapper>{/* <TopLine1>Welcome</TopLine1> */}</TextWrapper>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default Dashboard
