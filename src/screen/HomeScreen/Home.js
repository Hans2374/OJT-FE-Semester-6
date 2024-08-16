import React from 'react';
import Header from '../../components/header/Header';
import Home from '../../pages/HomePage/home';
import Footer from '../../components/footer/Footer';
import './Home.css';

function HomePage() {
  return (
    <div className="home">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default HomePage;
