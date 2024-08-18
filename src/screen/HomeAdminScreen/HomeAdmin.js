import React from "react";
import Header from "../../components/header/Header";
import Home from "../../components/HomeAdmin/HomeAdmin";
import Footer from "../../components/footer/Footer";

import "./HomeAdmin.css";

function HomePage() {
  return (
    <div className="home">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default HomePage;
