import React from "react";
// import { useMediaQuery } from "react-responsive";
import Header from "../../components/header/Header";
import Home from "../../components/HomeAdmin/HomeAdmin";
import Footer from "../../components/footer/Footer";

import styles from "./HomeAdmin.module.css";

function HomePage() {
  // const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.content}>
        <Home />
      </main>
      {/* {!isMobile && <Footer />} */}
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}

export default HomePage;
