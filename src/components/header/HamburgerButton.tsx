import HamburgerSvg from "@assets/images/svgs/hamburger.svg";

import { HeaderHamburgerButton } from "@styles/header.style";

import type { FC } from "react";

interface HamburgerButtonProps {
  children?: React.ReactNode;
  onClick: (e: React.MouseEvent) => void;
}

const HamburgerButton: FC<HamburgerButtonProps> = ({ children, onClick }) => {
  return (
    <HeaderHamburgerButton onClick={onClick}>
      <img src={HamburgerSvg} alt="모바일 햄버거 버튼 이미지" />
    </HeaderHamburgerButton>
  );
};

export default HamburgerButton;
