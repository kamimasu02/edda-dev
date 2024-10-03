import { useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

import { HEADER_LINKS } from "@consts/header";

import HamburgerButton from "@components/header/HamburgerButton";

import {
  HeaderWrapper,
  MainHeader,
  HeaderLogo,
  HeaderNavBar,
  HamburgerMenus,
  HamburgerMenusBackground,
  HamburgerMenusWrapper,
  HamburgerMenu,
} from "src/styles/header.style";

import HeaderLogoImage from "@assets/images/logos/header-logo.png";

import type { FC } from "react";

const Header: FC = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleOpenMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isMenuOpened) {
      document.body.style.overflow = "hidden";
      setIsMenuOpened(true);
    }
  };

  const handleCloseMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isMenuOpened) {
      document.body.style.overflow = "auto";
      setIsMenuOpened(false);
    }
  };

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
        <HamburgerButton onClick={handleOpenMenu} />
        {createPortal(
          <HamburgerMenusWrapper className={isMenuOpened ? "show" : ""}>
            <HamburgerMenusBackground onClick={handleCloseMenu} />
            <HamburgerMenus className={isMenuOpened ? "show" : ""}>
              {HEADER_LINKS.map(({ text, to }, index) => (
                <Link key={`${index}-${text}-mobile`} to={to} reloadDocument>
                  <HamburgerMenu>
                    <span>{text}</span>
                  </HamburgerMenu>
                </Link>
              ))}
            </HamburgerMenus>
          </HamburgerMenusWrapper>,
          document.body
        )}
      </MainHeader>
    </HeaderWrapper>
  );
};

export default Header;
