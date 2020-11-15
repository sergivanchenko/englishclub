import React from 'react';
import s from './Header.module.css';
import HeaderLogo from './HeaderLogo/HeaderLogo.jsx';
import HeaderMenu from './HeaderMenu/HeaderMenu.jsx';

const Header = () => {
  return (
    <header className={s.header}>
      <HeaderLogo />
      <HeaderMenu />
    </header>
  );
};

export default Header;
