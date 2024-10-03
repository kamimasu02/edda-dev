import styled from "styled-components";

import { COLOR, FONT, SCREEN, SCREEN_MAX_WIDTH } from "@consts/style";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;

export const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: ${SCREEN_MAX_WIDTH};
  height: 70px;
  padding: 15px;

  @media screen and (max-width: ${SCREEN.mobileWide}) {
    height: 50px;
  }
`;

export const HeaderLogo = styled.img`
  width: 70px;
  height: 70px;

  @media screen and (max-width: ${SCREEN.mobileWide}) {
    width: 50px;
    height: 50px;
  }
`;

export const HeaderNavBar = styled.nav`
  display: grid;
  color: ${COLOR.mainColor};
  font-family: "Pretendard";
  font-size: ${FONT.pc.medium};
  font-weight: 800;
  line-height: 21.6px;

  & > a {
    width: fit-content;
    height: fit-content;
    margin: auto;
  }

  @media screen and (max-width: ${SCREEN.tablet}) {
    display: none;
  }
`;

// 모바일 햄버거 버튼

export const HeaderHamburgerButton = styled.button`
  display: none;
  background: transparent;
  border: 0;

  & > img {
    cursor: pointer;
  }

  @media screen and (max-width: ${SCREEN.tablet}) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto 0;
    width: fit-content;
    height: fit-content;
  }
`;

export const HamburgerMenusWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  &.show {
    z-index: 2;

    :first-child {
      visibility: visible;
    }
  }
`;

export const HamburgerMenusBackground = styled.div`
  width: 100%;
  height: calc(100% - 175px);
  background-color: ${COLOR.black};
  visibility: hidden;
  transition: visibility 0.2s ease-in;
  opacity: 0.3;

  @media screen and (max-width: ${SCREEN.mobileWide}) {
    height: calc(100% - 120px);
  }
`;

export const HamburgerMenus = styled.ul`
  display: none;
  max-width: 0;
  font-size: 0;
  transition: max-width 0.2s ease-in, font-size 0.2s ease-in;

  @media screen and (max-width: ${SCREEN.tablet}) {
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: center;
    width: 120px;
    height: calc(100% - 175px);
    top: 0;
    right: 0;
    background-color: ${COLOR.subColor1};
    color: ${COLOR.mainColor};
    font-family: "Pretendard";
    font-weight: 500;
    list-style: none;

    & > a {
      display: none;
      width: 100%;
    }

    &.show {
      max-width: 120px;
      font-size: ${FONT.tablet.normal};

      & > a {
        display: flex;
      }
    }
  }

  @media screen and (max-width: ${SCREEN.mobileWide}) {
    width: 100px;
    height: calc(100% - 120px);

    &.show {
      max-width: 100px;
      font-size: ${FONT.mobile.normal};
    }
  }

  @media screen and (max-width: ${SCREEN.mobileNarrow}) {
    width: 80px;

    &.show {
      max-width: 80px;
      font-size: 12px;
    }
  }
`;

export const HamburgerMenu = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  word-break: keep-all;

  &:hover {
    background-color: #b8aee7;
    color: ${COLOR.white};
  }
`;
