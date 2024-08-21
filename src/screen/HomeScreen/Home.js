import React from "react";
import Header from "../../components/header/Header";
import Home from "../../components/HomePage/home";
import Footer from "../../components/footer/Footer";

import styles from "./Home.module.css";

function HomePage() {
  return (
    <div className="home">
      <Header />
      <main className={styles.home}>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
