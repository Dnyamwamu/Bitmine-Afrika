import React from "react"
import { Disclaimer1 } from "../components/InfoSection/Data1"
import Disclaimer from "../components/InfoSection/Disclaimer"
import ScrollToTop from "../components/ScrollToTop"

const DisclaimerPage = () => {
  return (
    <div>
      <ScrollToTop />
      <Disclaimer {...Disclaimer1} />
    </div>
  )
}

export default DisclaimerPage
