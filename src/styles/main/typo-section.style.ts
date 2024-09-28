import styled from "styled-components";

import { COLOR } from "@consts/style";

export const TypoWrapper = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 140px 0;
  background-color: #b1b3fe33;
`;

export const TypoBackgroundImage = styled.img<{
  $left: number;
  $transform: number;
}>`
  position: absolute;
  left: ${({ $left }) => $left}%;
  bottom: 0;
  transform: ${({ $transform }) => `translateX(${$transform}%)`};
`;

export const TypoImage = styled.img`
  margin-top: 110px;
  margin-bottom: 90px;
  width: 692px;
  height: 336px;
  z-index: 2;
`;

export const TypoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${COLOR.white};
  font-size: 24px;
  font-weight: 800;
  line-height: 35px;
  text-align: center;
  z-index: 2;
`;

export const TypoText = styled.span`
  text-shadow: 5px 5px 5px #715eef;
`;
