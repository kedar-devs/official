import React, { Component } from 'react';
import {Link} from "react-router-dom";
import DisplayUser from './DisplayUser';
import styles from './Things.module.css';
import storybook from '../../icons/stroybook.svg';
import poem from "../../icons/poem.svg";

class Things extends Component {
  
  render() {
    if(localStorage.getItem("admin")){
    const items = [{name:'Poem',body:'',image:poem,link:'/addpoem'},
    {name:'Paint',body:'',image:'https://img.icons8.com/color/48/000000/drawing--v2.png',link:'/addpaint'},
    {name:'Video',body:'',image:'https://img.icons8.com/fluent/48/000000/video.png',link:'/addvideo'},
    {name:'Story',body:'',image:storybook,link:'/addstory'}
  
  ]
    return (
      <div className={styles.container} >
        <h2 className={styles.header}>Add Content</h2>
       {items.map((item,k) => (
        <div key={k} className={styles.card} data-aos="flip-up" data-aos-offset="0">
          <div className={styles.inner}>
          <img className={styles.image} src={item.image} alt='dghsfh'/>
          <span className={styles.title}>{item.name}</span>
          </div>
          
          <span><Link className={styles.link} to={item.link}>Add</Link></span>
        </div>
       ))}
       <DisplayUser/>
      </div>
     
    )
    }
    else{
      const {history}=this.props
      history.push("admin")
      return(<div></div>)
      
    }
  }
}

export default Things
