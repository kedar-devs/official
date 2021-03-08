import React from "react";
import Info from "../AboutUs/About";
import ContactUs from "../ContactUs/ContactUs";
import FacultyVoice from "../FacultyVoice/FacultyVoice";
import Artwork from "../Link/Links.js";
import styles from "./Home.module.css";
function Home() {
  return (
    <>
      <div className={styles.navbar}></div>
      <div
        className={styles.savishkarheading}
        data-aos="flip-right"
        data-aos-duration="3000"
      >
        <h2 className={styles.savishkarhead}>Savishkaar</h2>
        <br />
        <h3 className={styles.savishkarcaption}>GEC Art And Literature Club</h3>
      </div>
      <div className={styles.abtsection}>
        <Info />
      </div>
      <ContactUs />
      <Artwork />
      <FacultyVoice />
    </>
  );
}

export default Home;
