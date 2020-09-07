import React from 'react'
import styles from './Loader.module.css';

const Loader = () => {
    return (
        <div className={styles.container}>
            <div className={styles.center}>
                <div className={styles.pencil}>
                    <div className={styles.tip}></div>
                </div>
                <div className={styles.stroke}></div>
                <div className={styles.text}>Please wait...</div>
            </div>
        </div>
    )
}

export default Loader
