import styled from "styled-components"

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "	#f0f8ff" : "#010606")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  } ;
`

export const InfoContainer1 = styled.div`
  background: ${({ lightBg }) => (lightBg ? "	#f0f8ff" : "#010606")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
    height: 1100px;
  } ;
`

export const InfoWrapper = styled.div`
  display: flex;
  z-index: 1;
  height: 500px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 700px;
  } ;
`

export const InfoWrapper1 = styled.div`
  display: flex;
  z-index: 1;
  height: 600px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 120px 24px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 1000px;
    padding: 0 24px;
  } ;
`

export const InfoWrapper3 = styled.div`
  display: flex;
  z-index: 1;
  height: 500px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;

  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 600px;
  } ;
`

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `"col2 col1"` : `"col1 col2"`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`

export const InfoRow1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    margin-top: 80px;
  }
`

export const InfoRow2 = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `"col3 col2 col1"` : `"col1 col2 col3"`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart
        ? `'col1' 'col2' 'col3'`
        : `'col1 col1 col1' 'col2 col2 col2' 'col3 col3 col3'`};
  }
`

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`

export const Column3 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col3;
`
export const Column4 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`

export const TextWrapper2 = styled.div`
  max-width: auto;
  padding-top: 0;
  padding-bottom: 10px;
`

export const SubtitleWrap = styled.p`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  color: #00b0ff;
`

export const TopLine = styled.p`
  color: #00b0ff;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const TopLine1 = styled.p`
  color: #00b0ff;
  font-size: 20px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 26px;
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 40px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 28px;
  } ;
`

export const Heading2 = styled.h1`
  margin-bottom: 24px;
  font-size: 26px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  } ;
`

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 16px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`
