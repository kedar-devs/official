import React, { Component } from 'react'
import logo from '../../photos/newlogo.jpeg';
import axios from 'axios';
//import {Redirect} from 'react-router-dom';
//import Things from './Things';
import styles from "./Login.module.css"

class LoginAdmin extends Component {
    constructor() {
        super()
        this.state = {
            username:'',
            password:''
        }
        this.warningref=React.createRef()
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault()
        var admin={
            username: this.state.username,
            password:this.state.password
        }
        axios.post("/admin/login",admin)
        .then(res => {
            localStorage.setItem("admin",res.data.token)
            this.props.history.push("things")
            console.log("Succesfully logged in",res)
        })
        .catch(err=>{console.log(err)
            this.warningref.current.innerText="*User doesnot exist.Please login*"
        })
    }
    render() {
        return (
            <div className={styles.loginformpage} data-aos="fade-down">
            <form onSubmit={this.onSubmit} method="POST" className={styles.loginform}>
                 <fieldset>
                     <img src={logo} alt="Savishkar logo" />
                     <h1>Login</h1>
                     <p ref={this.warningref} ></p>
                     <input type="email" className={styles.username} name="username" required placeholder="Username" value={this.state.username} onChange={this.onChange}  />
                     <small id="emailHelp" className={styles.emailhelp}>u'r secret is safe with us</small>
                     <input type="password" className={styles.password} name="password" required placeholder="Password" value={this.state.password} onChange={this.onChange} />
                     <button type="submit" className={styles.loginbtn} onClick={this.onSubmit} >Submit</button>
                 </fieldset>
            </form>
         </div>
        )
    }
}

export default LoginAdmin
 