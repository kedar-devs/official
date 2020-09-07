import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Display from './Display';
import Loader from '../Loader/Loader';

const Story= () =>{
    const [stories,setStories] = useState([]);
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        const getData = async () => {
            await axios.get('/story/')
             .then(response => {
                setStories(response.data)
                setLoading(false)
             })
             .catch(err => console.log(err))
        }
        getData();
    }, [])
    if(loading){
        return <Loader/>
    }
    return(
        <Display posts={stories}/>
    )
}
export default Story;