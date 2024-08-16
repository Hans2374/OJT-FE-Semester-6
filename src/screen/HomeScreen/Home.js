import React from 'react';
import Header from '../../components/header/Header';
import Home from '../../components/HomePage/home';
import Footer from '../../components/footer/Footer';
import './Home.css';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home">
      <Home/>
    </div>
  );
}

export default HomePage;
