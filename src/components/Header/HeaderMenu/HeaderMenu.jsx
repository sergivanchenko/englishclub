import React from 'react';
import s from './HeaderMenu.module.css';
import MenuItem from './MenuItem/MenuItem.jsx';

const HeaderMenu = () => {
  return (
    <ul className={s.header_menu}>
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </ul>
  );
};

export default HeaderMenu;
