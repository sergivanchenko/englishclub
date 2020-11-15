import React from 'react';
import s from './Main.module.css';
import Questions from './Questions/Questions.jsx';
import Resources from './Resources/Resources.jsx';
import Words from './Words/Words.jsx';

const Main = () => {
  return (
    <main className={s.main}>
      <Questions />
      <Resources />
      <Words />
    </main>
  );
};

export default Main;
