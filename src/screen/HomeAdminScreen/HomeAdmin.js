import React from "react";
import Header from "../../components/header/Header";
import HomeAdmin from "../../components/HomeAdmin/HomeAdmin";
import Footer from "../../components/footer/Footer";

import styles from "./HomeAdmin.module.css";

function HomePage() {
  // const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className={styles.homeAdmin}>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.content}>
        <HomeAdmin />
      </main>
      {/* {!isMobile && <Footer />} */}
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}

export default HomePage;
