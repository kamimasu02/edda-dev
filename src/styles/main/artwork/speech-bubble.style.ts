import styled from "styled-components";

import { BORDER_RADIUS, COLOR } from "@consts/style";

export const SpeechBubbleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const SpeechBubbleTextWrapper = styled.div<{
  $image: string;
  $shadow: string;
}>`
  display: flex;
  position: relative;
  width: 630px;
  height: 280px;
  justify-content: center;
  align-items: center;
  background-image: url(${({ $image }) => $image});
  background-size: cover;
  border-radius: ${BORDER_RADIUS.pc};
  box-shadow: 5px 15px 55px 15px ${({ $shadow }) => $shadow};
`;

export const SpeechBubbleText = styled.span<{ $color?: string }>`
  font-family: "Pretendard";
  font-size: 28px;
  font-weight: 600;
  line-height: 40px;
  text-align: center;
  z-index: 3;

  & > strong {
    color: ${({ $color }) => $color || COLOR.black};
    font-weight: 800;
  }
`;

export const SpeechBubbleDoubleQuote = styled.svg<{
  $fill?: string;
  $left?: number;
  $right?: number;
  $top?: number;
  $bottom?: number;
  $rotate?: number;
}>`
  position: absolute;
  fill: ${({ $fill }) => $fill || COLOR.black};
  ${({ $left }) => ($left ? `left: ${$left}px` : "")};
  ${({ $right }) => ($right ? `right: ${$right}px` : "")};
  ${({ $top }) => ($top ? `top: ${$top}px` : "")};
  ${({ $bottom }) => ($bottom ? `bottom: ${$bottom}px` : "")};
  ${({ $rotate }) => ($rotate ? `transform: rotate(${$rotate}deg)` : "")};
  z-index: 3;
`;

export const SpeechBubbleTriangleImage = styled.img`
  width: 40px;
  height: auto;
  margin-left: 450px;
  z-index: 3;
`;
