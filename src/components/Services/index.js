import React from "react"
import Icon1 from "../../images/hello.svg"
import Icon2 from "../../images/Terms.svg"
import Icon3 from "../../images/disclaimer.svg"
import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesCard,
  ServicesWrapper,
  ServicesIcon,
  ServicesP,
} from "./ServiceElements"

const Services = () => {
  return (
    <ServicesContainer id="services" to="/termsofservice">
      <ServicesH1>Note Better</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Referral Program</ServicesH2>
          <ServicesP>
            For every person you invite you will be awarded 5% of invested
            amount and it shall be added to your principle investment to attract
            interest....
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Terms and Conditions</ServicesH2>
          <ServicesP>
            Read through and agree to abide by the terms of service in order to
            use the offered service....
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Disclaimer </ServicesH2>
          <ServicesP>
            {" "}
            The investments and services offered by us may not be suitable for
            all investors...
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
