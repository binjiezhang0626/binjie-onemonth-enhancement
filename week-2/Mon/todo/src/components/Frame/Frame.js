import React from 'react';
import './Frame.css';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';

const Frame = () => {
  return (
    <div className="Frame">
      <div className="Header">
        TODOS
      </div>
      <Body />
      <Footer />
    </div>
  )
}

export default Frame;