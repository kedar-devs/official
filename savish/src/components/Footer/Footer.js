import React from 'react'
import gmail from "../../icons/gmail.svg"
import instagram from "../../icons/instagram.svg"
import twitter from "../../icons/twitter.svg"
import whatsapp from "../../icons/whatsapp.svg"
import styles from "./Footer.module.css"
import classnames from 'classnames';

function Footer() {
    return (
        <footer className={styles.footer}>
        <div className={styles.companyname} data-aos="fade-left" data-aos-offset="-200">Savishkar</div>
        <div className={styles.explore} >
            <span data-aos="fade-left" data-aos-offset="-200">Explore</span>
            <div className={styles.sitemap} data-aos="fade-left" data-aos-offset="-200">
                <div className={classnames(styles.left,styles.column)}>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Artwork</p>
                </div>
                <div className={classnames(styles.rightexplore,styles.column)}>
                    <p>lorem</p>
                    <p>lorem</p>
                    <p>lorem</p>
                </div>
            </div>
        </div>
        <div className={styles.socialmedias} data-aos="fade-left" data-aos-offset="-200">
            <img src={gmail} alt="gmail icon" />
            <img src={twitter} alt="twitter icon" />
            <img src={instagram} alt="instagram icon" />
            <img src={whatsapp} alt="whatsapp icon" />
        </div>
    </footer>
    )
}

export default Footer
