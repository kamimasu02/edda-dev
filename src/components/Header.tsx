import { Link } from "react-router-dom";

import { HEADER_LINKS } from "@consts/header";

import {
  HeaderWrapper,
  MainHeader,
  HeaderLogo,
  HeaderNavBar,
} from "src/styles/header.style";

import HeaderLogoImage from "@assets/images/logos/header-logo.png";

import type { FC } from "react";

const Header: FC = () => {
  return (
    <HeaderWrapper>
      <MainHeader>
        <HeaderLogo src={HeaderLogoImage} alt="로고 이미지" />
        <HeaderNavBar
          style={{ gridTemplateColumns: `repeat(${HEADER_LINKS.length}, 1fr)` }}
        >
          {HEADER_LINKS.map(({ text, to }, index) => (
            <Link key={`${index}-${text}`} to={to}>
              <span>{text}</span>
            </Link>
          ))}
        </HeaderNavBar>
      </MainHeader>
    </HeaderWrapper>
  );
};

export default Header;
