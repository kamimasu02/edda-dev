import styled from "styled-components";
import { CommonPageWrapper, CommonPage } from "@styles/index.style";

export const PageWrapper = styled.div`
    margin: 0 auto;
    width: 100%;
`;

export const Page =  styled.div`
    margin: 0 auto;
    width: 100%;
`;

export const IntroMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
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
    background: url("/images/studio-section01-bg2.png") no-repeat center center;
    background-size: contain;
    mix-blend-mode: color-dodge;
    filter: brightness(3);

    @media (min-width: 768px) {
        height:810px;
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
    height: 100vh;
    position: relative;
    z-index: 20;
    
    & > *~* {
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

`
export const IntroSubText = styled.p`
    font-size: 48px;
    font-family: "SUSE";
    font-weight: 300;
    color: #222;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 32px;
    }    
`

export const IntroDetail = styled.p`
    font-size: 18px;
    color: #222;
    text-align: center;
    margin-top: 48px;
    font-weight: 500;
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
    grid-template-columns: repeat(12, 1fr);
    gap: 30px;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(6, 1fr);
        gap: 16x;
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(8, 1fr);
        gap: 8px;
    }
`;

export const IntroHarfBoxLeft = styled.div`
    display: flex;
    gtid-column: 1/7;
`;

export const IntroHarfBoxRight = styled.div`
    display: flex;
    gtid-column: 7/13;
`;
