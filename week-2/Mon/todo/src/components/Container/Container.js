import React from 'react';
import './Container.css';
import Header from '../Header/Header';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';

const Container = () => {
  return (
    <div className="Container">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default Container;