import React from "react";

import linkedin from "../../icons/linkedinfooter.svg";
import instagram from "../../icons/instagram.svg";
import twitter from "../../icons/twitter.svg";
import gmail from "../../icons/gmail.svg";
import youtube from "../../icons/youtube.svg";
import styles from "./Footer.module.css";

const FooterSocials = ({ notemail }) => {
  console.log(notemail);
  return (
    <>
      <a href="https://www.linkedin.com/company/savishkaar" 
      target="_BLANK"
      rel="noopener noreferrer" 
      >
        <img src={linkedin} alt="LinkedIn icon" />
      </a>
      <a href="https://twitter.com/savishkaar?s=08" target="_BLANK" rel="noopener noreferrer" >
        {" "}
        <img src={twitter} className={styles.twitter} alt="twitter icon" />
      </a>
      <a href="https://www.instagram.com/savishkaar/" target="_BLANK" rel="noopener noreferrer" >
        <img src={instagram} alt="instagram icon" />
      </a>
      {!notemail && (
        <>
          <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=Gecsavishkar@gmail.com" 
          target="_blank"
          rel="noopener noreferrer" 
          >
            <img src={gmail} alt="Gmail icon" />
          </a>

          <a
            href="https://www.youtube.com/channel/UCDB5fjkZFrz4BD5MgxlIjPw "
            target="_BLANK"
            rel="noopener noreferrer" 
          >
            <img src={youtube} alt="Youtube icon" />
          </a>
        </>
      )}
    </>
  );
};

export default FooterSocials;
