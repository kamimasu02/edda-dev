import styled from "styled-components";

import { FONT } from "@consts/style";

export const SynopsysWrapper = styled.section<{
  $image: string;
  $opacity: number;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 200px 0;
  row-gap: 90px;
  box-sizing: border-box;
  background: ${({ $image, $opacity }) =>
    `linear-gradient(rgba(255, 255, 255, ${
      1 - $opacity
    }), rgba(255, 255, 255, ${1 - $opacity}), rgba(255, 255, 255, ${
      1 - $opacity
    })), url(${$image})`};
  background-size: cover;
`;

export const SynopsysTitle = styled.span`
  font-family: "Pretendard";
  font-size: ${FONT.pc.title};
  font-weight: 900;
  line-height: 44px;
`;

export const SynopsysParagraph = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #555555;
  font-family: "Pretendard";
  font-size: ${FONT.pc.normal};
  font-weight: 500;
  line-height: 28px;
`;

export const SynopsysText = styled.span`
  text-align: center;
`;
