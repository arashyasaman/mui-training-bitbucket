import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import HomeStart from './Home/HomeStart';
import HomeFeature from './Home/HomeFeature'
import HomeGit from './Home/HomeGit';
import HomeTestimonial from './Home/HomeTestimonial';


function Homepage() {
  return (
    <div>
      <Header/>
      <HomeStart/>
      <HomeFeature/>
      <HomeGit/>
      <HomeTestimonial/>
      <Footer/>
    </div>
  );
}

export default Homepage;