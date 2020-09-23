import React from 'react'
import styles from './Display.module.css';
import Reactplayer from 'react-player';

const VideoCard = ({video}) => {
    return (
        <div className={styles.display} data-aos="fade-down" data-aos-offset="-100">
            <div className={styles.videocontainer}>
                <Reactplayer
                    width='450px'
                    height='300px'
                    url={video.content}
                />
                <div className={styles.tag}>{video.title}</div>
            </div>
        </div>
    )
}

export default VideoCard
