import styled from "styled-components";
import { COLOR, FONT, BORDER_RADIUS } from "@consts/style";

export const PageWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
`;

export const Page = styled.div`
  margin: 0 auto;
  width: 100%;
`;

export const IntroMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 820px;
  height: 100%;
  position: relative;
`;

export const IntroMainImage = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 0;
  background: url("/images/studio-section01-bg.png") no-repeat center center;
  background-size: cover;
`;

export const IntroMainVisual = styled.div`
  width: 100%;
  object-fit: cover;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
  background: url("/images/studio-section01-bg2.png") no-repeat center bottom;
  background-size: contain;
  mix-blend-mode: color-dodge;
  filter: brightness(3);

  @media (min-width: 768px) {
    height: 810px;
  }
  @media (max-width: 767px) {
    height: 640px;
  }
`;

export const IntroMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-height: 820px;
  height: 100%;
  position: relative;
  z-index: 20;

  & > * ~ * {
    margin: 10px 0 0;
  }
  & > *:nth-child(2) {
    @media (min-width: 768px) {
      transform: translateX(60px);
    }
    @media (max-width: 767px) {
      transform: translateX(30px);
    }
  }
  & > *:nth-child(3) {
    @media (min-width: 768px) {
      transform: translateX(-25px);
    }
  }
  & > *:nth-child(4) {
    @media (min-width: 768px) {
      transform: translateX(-60px);
    }
    @media (max-width: 767px) {
      transform: translateX(-30px);
    }
  }
  & > *:nth-child(5) {
    @media (min-width: 768px) {
      transform: translateX(50px);
    }
    @media (max-width: 767px) {
      transform: translateX(-30px);
    }
  }
`;

export const IntroMainText = styled.p`
  font-size: 72px;
  font-family: "SUSE";
  font-weight: 300;
  color: #222;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 48px;
  }
`;
export const IntroSubText = styled.p`
  font-size: 48px;
  font-family: "SUSE";
  font-weight: 300;
  color: #222;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const IntroDetail = styled.p`
  font-size: 18px;
  color: #222;
  text-align: center;
  margin-top: 48px;
  font-weight: 500;
`;
export const StudioInfoBox = styled.div`
  background: url("/images/studio-section02-bg.png") center center;
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const StudioInfoWrapper = styled.div`
  padding: 200px 0;
  position: relative;
  z-index: 10;
`;

export const SubTitle = styled.p`
  font-size: 28px;
  font-weight: 900;
  text-align: center;
  margin-top: 100px;

  @media (max-width: 1200px) {
    font-size: 24px;
    margin-top: 70px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    margin-top: 50px;
  }

  @media (max-width: 360px) {
    font-size: 16px;
    margin-top: 50px;
  }
`;

export const IntroBoxWrapper = styled.div`
  display: grid;

  gap: 30px;
  max-width: 1170px;
  margin: 80px auto 100px;

  @media (min-width: 1170px) {
    grid-template-columns: repeat(12, 1fr);
    gap: 16px;
  }

  @media (max-width: 1169px) {
    grid-template-columns: repeat(6, 1fr);
    gap: 16px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(8, 1fr);
    gap: 8px;
  }

  p {
    text-align: center;
    line-height: 1.6;
    @media (min-width: 768px) {
      margin-top: 40px;
      font-size: ${FONT.pc.normal};
    }
    @media (max-width: 767px) {
      margin-top: 10px;
      font-size: ${FONT.mobile.normal};
    }
  }
  p strong {
    font-weight: 800;
  }
`;

export const IntroHarfBoxLeft = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1170px) {
    grid-column: 1 / 7;
  }
  @media (max-width: 1169px) {
    grid-column: 1 / 4;
  }
  @media (max-width: 767px) {
    grid-column: 1 / 9;
  }
`;

export const IntroHarfBoxRight = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1170px) {
    grid-column: 7 / 13;
  }
  @media (max-width: 1169px) {
    grid-column: 3 / 7;
  }
  @media (max-width: 767px) {
    grid-column: 1 / 9;
    margin-top: 50px;
  }
`;

export const StudioLogo = styled.div`
  width: 100%;
  height: 190px;
  padding: 0 100px;
  box-sizing: border-box;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const IntroFullBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  p {
    text-align: center;
    line-height: 1.6;
    font-size: ${FONT.pc.normal};
    @media (max-width: 768px) {
      font-size: ${FONT.mobile.normal};
    }
  }
  p strong {
    font-weight: 800;
    color: ${COLOR.mainColor};
  }
  b {
    font-weight: 800;
  }
`;

export const FullBoxLogo = styled.div`
  width: 100%;
  height: 350px;
  padding: 50px;
  box-sizing: border-box;
  max-width: 1170px;
  margin: 0 auto 50px;
  position: relative;
  border-border_radius: ${BORDER_RADIUS.pc};
  background: ${COLOR.mainColor};

  @media (max-width: 1169px) {
    border-border_radius: ${BORDER_RADIUS.tablet};
  }

  @media (max-width: 768px) {
    border-border_radius: ${BORDER_RADIUS.mobile};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const StudioVisualBehind = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 100%;
  background: url("/images/zeus-bg2.png") no-repeat center bottom;
  background-size: contain;
  z-index: 3;
  transform: translateX(-450px);

  @media (min-width: 1170px) {
    height: 1030px;
  }
  @media (max-width: 1169px) {
    height: 940px;
  }
  @media (max-width: 767px) {
    height: 540px;
  }
`;

export const StudioVisualFoward = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 100%;
  background: url("/images/zeus-bg.png") no-repeat center bottom;
  background-size: contain;
  z-index: 5;
  transform: translateX(-450px);

  @media (min-width: 1170px) {
    height: 1030px;
  }
  @media (max-width: 1169px) {
    height: 940px;
  }
  @media (max-width: 767px) {
    height: 540px;
  }
`;
