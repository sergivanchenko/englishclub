import React from 'react';
import s from './Nav.module.css';
import NavItem from './NavItem/NavItem.jsx';

const Nav = () => {
  return (
    <nav className={s.nav}>
      <NavItem />
      <NavItem />
      <NavItem />
      <NavItem />
      <NavItem />
    </nav>
  );
};

export default Nav;
