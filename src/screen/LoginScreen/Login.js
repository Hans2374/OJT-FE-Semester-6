import React from 'react';
import Header from '../../components/header/Header';
import Login from '../../pages/LoginPage/Login';
import Footer from '../../components/footer/Footer';
import './Login.css';

function LoginPage() {
  return (
    <div className="login">
      <Header/>
      <Login/>
      <Footer/>
    </div>
  );
}

export default LoginPage;
