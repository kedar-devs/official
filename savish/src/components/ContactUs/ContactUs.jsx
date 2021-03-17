import React from "react";
import styles from "./ContactUs.module.css";
// import classnames from "classnames";
import Event_svg from "../../icons/event.svg";
import FooterSocials from "../Footer/FooterSocials";
import gmail from "../../icons/gmail.svg";
import Heading from "../Headings/Heading";

const ContactUs = () => {
  return (
    <div data-aos="fade-down" data-aos-offset="50">
      <Heading title="Get in touch" />
      <div className={styles.contactus}>
        <img
          src={Event_svg}
          alt="Organise an event"
          className={styles.event_svg}
        />
        <div className={styles.getintouch}>
          <h2>Want to organize an event? Contact us</h2>
          <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=savishkargec@gmail.com" 
          target="_blank">
          <button>
            Over
            <img src={gmail} alt="Youtube icon" />
          </button>
          </a>
          <p>OR</p>
          <h3>Connect with us on social media!</h3>
          <div className={styles.socialicons}>
            <FooterSocials notemail={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
