import React from "react";
import styles from "./Credits.module.css";
import instagram from "../../icons/instagram.svg";
import twitter from "../../icons/twitter.svg";
import linkedin from "../../icons/linkedin.svg";
import github from "../../icons/github.svg";

const Card = ({ dev }) => {
  return (
    <div className={styles.card} data-aos="flip-left" data-aos-offset="-200">
      <div className={styles.left}>
        <img className={styles.image} src={dev.photo} alt="profile" />
      </div>
      <div className={styles.right}>
        <p className={styles.title}>{dev.name}</p>
        <p className={styles.body}>{dev.position}</p>
        <p className={styles.body}>-{dev.status}</p>
        <div className={styles.icons}>
          <a href={dev.github} target="_blank" rel="noopener noreferrer">
            <img className={styles.icon} src={github} alt="github" />
          </a>
          {dev.twitter ? (
            <a href={dev.twitter} target="_blank" rel="noopener noreferrer">
              <img className={styles.icon} src={twitter} alt="twitter" />
            </a>
          ) : null}
          <a href={dev.instagram} target="_blank" rel="noopener noreferrer">
            <img className={styles.icon} src={instagram} alt="instagram" />
          </a>
          <a href={dev.linkedin} target="_blank" rel="noopener noreferrer">
            <img className={styles.icon} src={linkedin} alt="linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
