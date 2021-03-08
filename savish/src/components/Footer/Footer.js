import React from "react";
import styles from "./Footer.module.css";
import classnames from "classnames";
import geclogo from "../../photos/GECLogo.png";
import { Link } from "react-router-dom";
import FooterSocials from "./FooterSocials";
function Footer() {
  return (
    <footer className={styles.footer}>
      <section>
        <div className={styles.companyname}>
          <img src={geclogo} alt="Goa College of Engineering Logo" />
          <p>Savishkaar</p>
        </div>
        <div className={styles.explore}>
          <span>Explore</span>
          <div className={styles.sitemap}>
            <div className={classnames(styles.column)}>
              <Link to="/">
                <p>Home</p>
              </Link>
              <Link to="/team">
                <p>Team</p>
              </Link>
              <Link to="/poemdisp">
                <p>Poems</p>
              </Link>
            </div>
            <div className={classnames(styles.column)}>
              <Link to="/videodisp">
                <p>Videos</p>
              </Link>
              <Link to="/STORYdisp">
                <p>Stories</p>
              </Link>
              <Link to="/paintdisp">
                <p>Paintings</p>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.socialmedias}>
          <FooterSocials />
        </div>
      </section>
      <p className={styles.developercredit}>
        &#169; A site by Kedar Devasthali and team
      </p>
    </footer>
  );
}

export default Footer;
