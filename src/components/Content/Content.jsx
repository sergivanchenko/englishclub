import React from 'react';
import s from './Content.module.css';
import Main from './Main/Main.jsx';
import Nav from './Nav/Nav.jsx';

const Content = () => {
  return (
    <main className={s.content}>
      <Nav />
      <Main />
    </main>
  );
};

export default Content;
