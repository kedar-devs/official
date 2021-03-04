import React from "react";
import styles from "./ContactUs.module.css";
import classnames from "classnames";
import Event_svg from "../../icons/event.svg";
import FooterSocials from "../Footer/FooterSocials";
import gmail from "../../icons/gmail.svg";

const ContactUs = () => {
  return (
    <div>
      <h1
        className={classnames(styles.abtheading, "heading")}
        data-aos="fade-down"
        data-aos-offset="50"
      >
        Get In Touch
      </h1>
      <div className={styles.contactus}>
        <img
          src={Event_svg}
          alt="Organise an event"
          className={styles.event_svg}
        />
        <div className={styles.getintouch}>
          <h2>Want to organize an event? Contact us</h2>
          <button>
            Over
            <img src={gmail} alt="Youtube icon" />
          </button>
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