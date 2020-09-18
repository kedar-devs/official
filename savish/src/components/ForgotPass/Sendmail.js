import React, { Component } from 'react'
import axios from 'axios'
import logo from '../../photos/newlogo.jpeg';
import styles from "./Forgot.module.css"

class Sendmail extends Component {
    constructor(){
        super()
        this.state = {
            email:''
           
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
        const user ={
            email: this.state.email   
        }
        
        axios.post("/user/forgot-password",user)
        .then(res=>{
            alert("please check your email")
        })
        .catch(err=>{
            console.log(err)
            this.warningref.current.innerText="*This Email Id Does Not Exist*"
        })
    }
    render() {
        return (
            <div className={styles.loginformpage} data-aos="fade-down">
               <form onSubmit={this.onSubmit} method="POST" className={styles.loginform}>
                    <fieldset>
                        <img src={logo} alt="Savishkar logo" />
                        <p ref={this.warningref} ></p>
                        <h1>Reset Password</h1>
                        <input type="email" className={styles.username} name="email" placeholder="Email" value={this.state.email} onChange={this.onChange} required />
                        
                       
                        <button type="submit" className={styles.loginbtn} onClick={this.onSubmit} >Submit</button>
                    </fieldset>
               </form>
            </div>
        )
    }
}
export default Sendmail