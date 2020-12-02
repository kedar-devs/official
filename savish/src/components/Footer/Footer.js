import React from 'react'
import linkedin from "../../icons/linkedinfooter.svg"
import instagram from "../../icons/instagram.svg"
import twitter from "../../icons/twitter.svg"
import gmail from "../../icons/gmail.svg"
import youtube from "../../icons/youtube.svg"
import styles from "./Footer.module.css"
import classnames from 'classnames'
import geclogo from "../../photos/GECLogo.png"
import {Link} from "react-router-dom"
function Footer() {
    return (
        <footer className={styles.footer}>
            <section>
        <div className={styles.companyname} data-aos="fade-left" data-aos-offset="-200"><img src={geclogo} alt="Goa College of Engineering Logo"/><p>Savishkaar</p></div>
        <div className={styles.explore} >
            <span data-aos="fade-left" data-aos-offset="-200">Explore</span>
            <div className={styles.sitemap} data-aos="fade-left" data-aos-offset="-200">
                <div className={classnames(styles.left,styles.column)}>
                    <Link to="/"><p>Home</p></Link>
                    <Link to="/team"><p>Team</p></Link>
                    <Link to="/poemdisp"><p>Poems</p></Link>
                </div>
                <div className={classnames(styles.rightexplore,styles.column)}>
                    <Link to="/videodisp"><p>Videos</p></Link>
                    <Link to="/STORYdisp"><p>Stories</p></Link>
                    <Link to="/paintdisp"><p>Paintings</p></Link>
                </div>
            </div>
        </div>
        <div className={styles.socialmedias} data-aos="fade-left" data-aos-offset="-200">
            <a href="https://www.linkedin.com/company/savishkaar" target="_BLANK"><img src={linkedin} alt="LinkedIn icon" /></a>
            <a href="https://twitter.com/savishkaar?s=08" target="_BLANK"> <img src={twitter} className={styles.twitter} alt="twitter icon" /></a>
            <a href="https://www.instagram.com/savishkaar/" target="_BLANK"><img src={instagram} alt="instagram icon" /></a>
            <a href="https://www.youtube.com/channel/UCDB5fjkZFrz4BD5MgxlIjPw " target="_BLANK" ><img src={gmail} alt="Youtube icon" /></a>
            <a href="https://www.youtube.com/channel/UCDB5fjkZFrz4BD5MgxlIjPw " target="_BLANK" ><img src={youtube} alt="Youtube icon" /></a>
        </div>
        </section>
        <p className={styles.developercredit}>&#169; A site by Kedar Devasthali and team</p>
    </footer>
    )
}

export default Footer
