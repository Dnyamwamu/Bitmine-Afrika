import React from "react"
import Icon1 from "../../images/svg-1.svg"
import Icon2 from "../../images/svg-2.svg"
import Icon3 from "../../images/svg-3.svg"
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
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Mine</ServicesH2>
          <ServicesP>
            Our system helps our clients mine Bitcoin and Ethereum
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Diversify</ServicesH2>
          <ServicesP>
            diversify the said coins into regulated (SEC, ASIC, FCA and CySEC)
            platforms
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>DeFi yield investment </ServicesH2>
          <ServicesP>have a 30 day lock-in period</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
