import styled from "styled-components";

export const TitleWrapper = styled.div`
  display: flex;
  position: relative;
  width: fit-content;
  flex-direction: column;
  align-items: center;
  padding: 10px 15px;
`;

export const Title = styled.ruby`
  font-family: "Pretendard";
  font-size: 48px;
  font-weight: 800;
  line-height: 48px;
  z-index: 3;
`;

export const TitleRubyText = styled.rt<{ $color: string }>`
  color: ${({ $color }) => $color};
  font-size: 32px;
  line-height: inherit;
`;

export const TitleBackground = styled.div<{ $background: string }>`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 22px;
  background-color: ${({ $background }) => $background};
`;
