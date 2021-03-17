import React from "react";
import princalsir from "../../photos/pricy.jpg";
import habbusir from "../../photos/habbu.jpg";
// import classnames from "classnames";
import styles from "./FacultyVoice.module.css";
import Heading from "../Headings/Heading";
const FacultyVoice = () => {
  return (
    <>
      <Heading title="From the Faculty" />
      <div className={styles.gecfacultyvoice} data-aos="fade-down">
        <img src={princalsir} alt="sir" />
        <h4>From the Principals desk</h4>
        <p>
          The most beautiful stones have been tossed by the wind and washed by
          the water and polished to brilliance by life's strongest storms
          <br />
          <span>
            -Principal <br />
            Goa College Engineering
            <br />
          </span>
        </p>
      </div>
      <div
        className={styles.gecfacultyvoice}
        data-aos-easing="ease-in-out"
        data-aos="fade-down"
      >
        <img src={habbusir} alt="habbu sir" />
        <h4>From the Faculty </h4>
        <p>
          Art has the role in education of helping children become like
          themselves instead of more like everyone else.
          <br />
          <span>
            -Habbu Sir <br />
            Goa College Engineering
            <br />
          </span>
        </p>
      </div>
    </>
  );
};

export default FacultyVoice;
