import {
  FooterText,
  FooterTextWrapper,
  FooterWrapper,
  MainFooter,
} from "src/styles/footer.style";

import type { FC } from "react";

const Footer: FC = () => {
  return (
    <FooterWrapper>
      <MainFooter>
        <FooterTextWrapper>
          <FooterText>Copyright 2024. Studio EDDA.</FooterText>
          <FooterText>All rights reserved.</FooterText>
        </FooterTextWrapper>
      </MainFooter>
    </FooterWrapper>
  );
};

export default Footer;
