import styled from "styled-components";

import { COLOR, SCREEN_MAX_WIDTH } from "@consts/style";

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLOR.black};
  width: 100%;

  // 페이지 작업 후에 제거해야합니다.
  margin-top: auto;
`;

export const MainFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: ${SCREEN_MAX_WIDTH};
  height: 174px;
`;

export const FooterTextWrapper = styled.div`
  display: flex;
  color: ${COLOR.white};
  font-family: "SUSE";
  font-size: 20px;
  font-weight: 300;
  line-height: 20px;
`;

export const FooterText = styled.span``;
