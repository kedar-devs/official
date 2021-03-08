import React from "react";
import teampic from "../../photos/IMG_7245.JPG";
import styles from "./AboutUs.module.css";
import Carosel from "../Carosel/Carosel";
import "../../css/important.css";
import Heading from "../Headings/Heading";

const About = () => {
  return (
    <>
      <Heading title="About us" />
      <div
        className={styles.teamimagediv}
        data-aos="zoom-in"
        data-aos-anchor-placement="center-bottom"
      >
        <img src={teampic} className={styles.teampic} alt="team" />
        <div className={styles.whatissavishkar}>
          <h5>
            दिल से लिखी कहानियों की एक बढती हुई रफ्तार.. Enlightening the stage
            of creativity Welcome to GEC " SAVISHKAAR
          </h5>
          <br />
          <p>
            We the members of Savishkaar welcome you to our official site. The
            club formed by students of Goa Engineering College with the help of
            our Faculty in order to encourage students to be creative and bring
            the best out of them by supporting thier creative vision{" "}
          </p>
        </div>
      </div>
      <Carosel />
    </>
  );
};
// }

export default About;
