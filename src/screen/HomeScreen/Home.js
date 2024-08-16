import React from 'react';
import Header from '../../components/header/Header';
import Home from '../../pages/HomePage/home';
import Footer from '../../components/footer/Footer';
import './Home.css';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home">
      <Link to={'/login'} className='btn btn-primary'>LOGIN</Link>
    </div>
  );
}

export default HomePage;
