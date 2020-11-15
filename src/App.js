import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Content from './components/Content/Content.jsx';
import Nav from './components/Content/Nav/Nav.jsx';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
