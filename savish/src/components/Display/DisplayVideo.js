import React, { Component } from 'react'
import axios from 'axios'
import styles from './Display.module.css';
import VideoCard from './VideoCard';
import Loader from '../Loader/Loader';

const Video = props => {
    return (
        <VideoCard video={props.video}/>
    )
}

class DisplayStory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            video: [],
            loading:true
        }
        this.state.videolist = this.videolist()

    }
    componentDidMount() {
        axios.get('/video/')
            .then(response => {
                this.setState({
                    video: response.data,
                    loading:false
                })
            })
            .catch(err => console.log(err))
    }
    videolist() {
        return this.state.video.map(currentpaint => {
            return <Video video={currentpaint} key={currentpaint._id} />
        })
    }
    render() {
        return (
            <div>
                {this.state.loading?(<Loader/>):(
                   <div className={styles.video}>
                    {this.videolist()}
                    </div> 
                )}
            </div>
        )
    }
}

export default DisplayStory
