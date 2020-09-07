import React from 'react'
import styles from './Credits.module.css';
import instagram from "../../icons/instagram.svg"
import twitter from "../../icons/twitter.svg"
import linkedin from "../../icons/linkedin.svg"
import github from "../../icons/github.svg";

const Credits = () => {
    return (
        <div>
            <p className={styles.header}>Credits</p>
            <div className={styles.container}>
            <div className={styles.card} data-aos="flip-left" data-aos-offset="-200">
                <div className={styles.left}>
                    <img  className={styles.image} src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="profile"/>
                    <div className={styles.icons}>
                        <img className={styles.icon} src={github} alt="github"/>
                        <img className={styles.icon} src={twitter} alt="twitter"/>
                    </div>
                    <div>
                        <img className={styles.icon} src={instagram} alt="instagram"/>
                        <img className={styles.icon} src={linkedin} alt="linkedin"/>
                    </div>
                </div>
                <div className={styles.right}>
                    <p className={styles.title}>John Doe</p>
                    <p className={styles.body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et sem ex. Proin fermentum lobortis nisi, ac ornare neque aliquet a.</p>
                </div>
            </div>
            <div className={styles.card} data-aos="flip-left" data-aos-offset="-200">
                <div className={styles.left}>
                    <img  className={styles.image} src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="profile"/>
                    <div className={styles.icons}>
                        <img className={styles.icon} src={github} alt="github"/>
                        <img className={styles.icon} src={twitter} alt="twitter"/>
                    </div>
                    <div>
                        <img className={styles.icon} src={instagram} alt="instagram"/>
                        <img className={styles.icon} src={linkedin} alt="linkedin"/>
                    </div>
                </div>
                <div className={styles.right}>
                    <p className={styles.title}>John Doe</p>
                    <p className={styles.body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et sem ex. Proin fermentum lobortis nisi, ac ornare neque aliquet a.</p>
                </div>
            </div>
            <div className={styles.card} data-aos="flip-left" data-aos-offset="-200">
                <div className={styles.left}>
                    <img  className={styles.image} src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="profile"/>
                    <div className={styles.icons}>
                        <img className={styles.icon} src={github} alt="github"/>
                        <img className={styles.icon} src={twitter} alt="twitter"/>
                    </div>
                    <div>
                        <img className={styles.icon} src={instagram} alt="instagram"/>
                        <img className={styles.icon} src={linkedin} alt="linkedin"/>
                    </div>
                </div>
                <div className={styles.right}>
                    <p className={styles.title}>John Doe</p>
                    <p className={styles.body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et sem ex. Proin fermentum lobortis nisi, ac ornare neque aliquet a.</p>
                </div>
            </div>
            <div className={styles.card} data-aos="flip-left" data-aos-offset="-200">
                <div className={styles.left}>
                    <img  className={styles.image} src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="profile"/>
                    <div className={styles.icons}>
                        <img className={styles.icon} src={github} alt="github"/>
                        <img className={styles.icon} src={twitter} alt="twitter"/>
                    </div>
                    <div>
                        <img className={styles.icon} src={instagram} alt="instagram"/>
                        <img className={styles.icon} src={linkedin} alt="linkedin"/>
                    </div>
                </div>
                <div className={styles.right}>
                    <p className={styles.title}>John Doe</p>
                    <p className={styles.body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et sem ex. Proin fermentum lobortis nisi, ac ornare neque aliquet a.</p>
                </div>
            </div>
            <div className={styles.card} data-aos="flip-left" data-aos-offset="-200">
                <div className={styles.left}>
                    <img  className={styles.image} src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="profile"/>
                    <div className={styles.icons}>
                        <img className={styles.icon} src={github} alt="github"/>
                        <img className={styles.icon} src={twitter} alt="twitter"/>
                    </div>
                    <div>
                        <img className={styles.icon} src={instagram} alt="instagram"/>
                        <img className={styles.icon} src={linkedin} alt="linkedin"/>
                    </div>
                </div>
                <div className={styles.right}>
                    <p className={styles.title}>John Doe</p>
                    <p className={styles.body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et sem ex. Proin fermentum lobortis nisi, ac ornare neque aliquet a.</p>
                </div>
            </div>
            
        </div>
        </div>
        
    )
}

export default Credits
