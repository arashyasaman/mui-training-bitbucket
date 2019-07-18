import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './About.css';

import AboutStart from './About/AboutStart';

function About() {
  return (
    <div>
      <Header/>
        <AboutStart/>
      <Footer/>
    </div>
  );
}

export default About;