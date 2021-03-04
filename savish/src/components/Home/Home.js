import React from "react";
import Info from "../AboutUs/About";
import ContactUs from "../ContactUs/ContactUs";
import Artwork from "../Link/Links.js";
import styles from "./Home.module.css";
function Home() {
  return (
    <>
      <div className={styles.navbar}></div>
      <div className={styles.savishkarheading} data-aos="flip-right">
        <h2 className={styles.savishkarhead}>Savishkaar</h2>
        <br />
        <h3 className={styles.savishkarcaption}>GEC Art And Literature Club</h3>
      </div>
      <div className={styles.abtsection}>
        <Info />
      </div>
      <div className={styles.abtsection}>
        <ContactUs />
      </div>
      <Artwork />
    </>
  );
}

export default Home;
