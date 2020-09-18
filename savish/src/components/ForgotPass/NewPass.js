import React, { Component } from 'react'
import axios from 'axios'
import logo from '../../photos/newlogo.jpeg';
import styles from "./Forgot.module.css";
import {useParams} from "react-router-dom";
//const {storeit}=useParams()
class Sendmail extends Component {
    constructor(){
        super()
        this.state = {
            password:''
           
        }
        this.warningref=React.createRef()
        this.onChange= this.onChange.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }
    
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault()
        var token  
        console.log(token)
        const user ={
            password: this.state.password,
            token:this.props.match.params.token
             
        }
        console.log(this.props.match.params.token)
        axios.post("/user/new-password",user)
        .then(res=>{
            alert("password updated successfully")
            const {history}=this.props
            history.push("/loginuser")
        })
        .catch(err=>{
            console.log(err)
            this.warningref.current.innerText="*Password update failed*"
        })
    }
    render() {
        return (
            <div className={styles.loginformpage} data-aos="fade-down">
               <form onSubmit={this.onSubmit} method="POST" className={styles.loginform}>
                    <fieldset>
                        <img src={logo} alt="Savishkar logo" />
                        <p ref={this.warningref} ></p>
                        <h1>Update Password</h1>
                        <input type="password" className={styles.username} name="password" placeholder="Password" value={this.state.password} onChange={this.onChange} required />
                        
                       
                        <button type="submit" className={styles.loginbtn} onClick={this.onSubmit} >Submit</button>
                    </fieldset>
               </form>
            </div>
        )
    }
}
export default Sendmail