import React from 'react'
import linkedin from "../../icons/linkedinfooter.svg"
import instagram from "../../icons/instagram.svg"
import twitter from "../../icons/twitter.svg"
import youtube from "../../icons/youtube.svg"
import styles from "./Footer.module.css"
import classnames from 'classnames';
import geclogo from "../../photos/GECLogo.png"
function Footer() {
    return (
        <footer className={styles.footer}>
            <section>
        <div className={styles.companyname} data-aos="fade-left" data-aos-offset="-200"><img src={geclogo} alt="Goa College of Engineering Logo"/><p>Savishkaar</p></div>
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
            <a href="https://www.linkedin.com/company/savishkaar" target="_BLANK"><img src={linkedin} alt="LinkedIn icon" /></a>
            <a href="https://twitter.com/savishkaar?s=08" target="_BLANK"> <img src={twitter} alt="twitter icon" /></a>
            <a href="https://www.instagram.com/savishkaar/" target="_BLANK"><img src={instagram} alt="instagram icon" /></a>
            <a href="https://www.youtube.com/channel/UCDB5fjkZFrz4BD5MgxlIjPw " target="_BLANK" ><img src={youtube} alt="Youtube icon" /></a>
        </div>
        </section>
        <p className={styles.developercredit}>&#169; A site by Kedar Devasthali and team</p>
    </footer>
    )
}

export default Footer
