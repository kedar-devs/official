import React from "react";
import styles from "./Heading.module.css";

import classnames from "classnames";

const Heading = ({ title }) => {
  return (
    <h1
      className={classnames(styles.theading, "heading")}
      data-aos="fade-down"
      data-aos-offset="50"
    >
      {title}
    </h1>
  );
};

export default Heading;
