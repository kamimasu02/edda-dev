import type { FC } from "react";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <header className="header">
      <span>Header</span>
    </header>
  );
};

export default Header;
