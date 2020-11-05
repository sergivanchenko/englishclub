import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
