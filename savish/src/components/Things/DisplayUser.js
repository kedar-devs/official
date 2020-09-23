import React, { Component } from 'react';
import Reactplayer from 'react-player';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import Stv from '../Stv.js';
import axios from 'axios';
import photu from '../../photos/set1.jpg';
import styles from '../Display/Display.module.css';
const onView=()=>{
    window.location.reload(true);
}
const onAdd=(props)=>{
    
    if(props.user.type === 'poem'){
        const poem = {
            poet: props.user.firstname+' '+props.user.lastname,
            content: props.user.content,
            title: props.user.title,
            about:props.user.discription,
            date: new Date()
          }
        axios.post('/poem/adduser',poem)
        .then(res=>{
            console.log(res.data)
            this.props.history.push("things")
          })
          .catch(err=>console.log(err))
          
    axios.post('/user/deletecontent/'+props.user._id,props.user)
    .then(res=>{console.log("done")
    this.props.history.push("things")
})
    .catch(err=>console.log(err))
    }
    if(props.user.type === 'story'){
        const story = {

            Author: props.user.firstname+' '+props.user.lastname,
            content: props.user.content,
            about: props.user.discription,
            title: props.user.title,
            date: new Date()
          }
        
        axios.post('/story/adduser',story)
        .then(res=>{
            console.log(res.data)
            this.props.history.push("things")
          })
          .catch(err=>console.log(err))
          
        axios.post('/user/deletecontent/'+props.user._id,props.user)
        .then(res=>{console.log("done")
    this.props.history.push("things")
})
    .catch(err=>console.log(err))
    }
    
    
    if(props.user.type === 'paint'){
        
        
        const paint={
            painter: props.user.firstname+' '+props.user.lastname,
            title:props.user.title,
            content: props.user.content,
            date:new Date()
        }
        axios.post('/paint/adduser',paint)
        .then(res=>{
            console.log(res.data)
            this.props.history.push("things")
          })
          .catch(err=>console.log(err))
          
    axios.post('/user/deletecontent/'+props.user._id,props.user)
    .then(res=>{console.log("done")
    this.props.history.push("things")
})
    .catch(err=>console.log(err))

    }
    
    if(props.user.type === 'video'){
        const video={
            creator: props.user.firstname+' '+props.user.lastname,
            content: props.user.content,
            title: props.user.title,
            about:props.user.discription,
            date: new Date()
        }
        axios.post('/video/add',video)
        .then(res=>{
            console.log(res.data)
            this.props.history.push("things")
          })
        .catch(err=>console.log(err))
          
    axios.post('/user/deletecontent/'+props.user._id,props.user)
    .then(res=>{console.log("done")
    this.props.history.push("things")
})
    .catch(err=>console.log(err))
    
}
window.location.reload(true);
}
const ondelete=(props)=>{
    axios.post('/user/removecontent/'+props.user._id,props.user)
    .then(res=>{
        console.log(res.data)
        this.props.history.push("things")
      })
    .catch(err=>console.log(err))
    window.location.reload(true);
}
const User=props=>{
    if(props.user.content!=' '){
    if(props.user.type==='poem'){
        localStorage.setItem("data",props.user.content);
        return(
            <div>
                <div className={styles.cardL}>
                <img className={styles.image}variant="top" src={props.user.content} alt="couldn't load"/>
                <div className={styles.body}>
                    <div className={styles.title}>{props.user.firstname+" "+props.user.lastname}</div>
                    <div className={styles.subtitle}>{props.user.title}</div>
                    <button className={styles.btn} onClick={()=>onView()}><Link className={styles.link} to="/view" >View</Link></button>
                    <div className={styles.box}>
                    <button className={styles.outline} onClick={()=>onAdd(props)}>Add</button>
                    <button  className={styles.outline}  onClick={()=>ondelete(props)}>Remove</button>
                    </div>
                </div>
                </div>
            </div>
        )
    }
    if(props.user.type==="paint"){
        return(
            <div className={styles.cardL}>
                <img className={styles.image} src={props.user.content} alt="couldn't load"/>
                <div className={styles.body}>
                    <div className={styles.title}>{props.user.firstname+props.user.lastname}</div>
                    <div className={styles.subtitle}>{props.user.title}</div>
                    <button className={styles.btn}><Link className={styles.link} to={{pathname:'/view/:'+props.user,data:props.user}} >View</Link></button>
                    <div className={styles.box}>
                    <button className={styles.outline} onClick={()=>onAdd(props)}>Add</button>
                    <button  className={styles.outline}  onClick={()=>ondelete(props)}>Remove</button>
                    </div>
                </div>
            </div>
        )
    }
    else if(props.user.type!=="video"){
        localStorage.setItem("data",props.user.content);
    return(
        <div className={styles.cardL}>
            <img className={styles.image} src={photu} alt="could not load"/>
            <div className={styles.body}>
                <div className={styles.title}>{props.user.title}</div>
                <div className={styles.subtitle}><span>By:{props.user.firstname}</span><span>About:{props.user.discription}</span></div>
                <button className={styles.btn}><Link className={styles.link} to="/view" >View</Link></button>
                <div className={styles.box}>
                    <button className={styles.outline} onClick={()=>onAdd(props)}>Add</button>
                    <button className={styles.outline} onClick={()=>ondelete(props)}>Remove</button>
                </div>        
            </div>
        </div>
    )
    }
    else{
        return(
            <div className={styles.cardL}>
            <div className={styles.body}>
                <Reactplayer
                    url={props.user.content}
                    style={{width:"19rem"}}
                />
                <div className={styles.title}>{props.user.title}</div>
            </div>
            </div>
        )
    }
}
else{
    return(<div></div>)
}
    
}


class DisplayStory extends Component {
    constructor(props){
        super(props);
        this.state={
            user:[]
        }
        this.state.userlist=this.userlist()
        
    }
    componentDidMount(){
        axios.get('/user/')
        .then(response=>{
            console.log(response.data)
            this.setState({
                user:response.data
            })
        })
        .catch(err => console.log(err))
    }
    userlist(){
        return this.state.user.map(currentuser=>{
            return<User user={currentuser} key={currentuser._id}/>
        })
    }
    render() {
        return (
            <Router>
            <div>
                <div className={styles.user}>
                {this.userlist()}
                </div> 
            <Route path="/view/:story" exact component={Stv}/>
            </div>
            </Router>
        )
    }
}

export default DisplayStory
