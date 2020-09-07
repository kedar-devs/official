import React, { Component } from 'react';
import logo from '../../photos/newlogo.jpeg';
import styles from "./Login.module.css"
import axios from "axios"
function validateEmail(email) {
  // eslint-disable-next-line 
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
export class AddUser extends Component {
  constructor() {
    super();
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      cpassword:'',
    }
    this.warningref=React.createRef()
    this.onSubmit = this.onSubmit.bind(this)
    this.onchange = this.onchange.bind(this)
  }

  onchange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onSubmit(e) {
    console.log('in submit method')
    e.preventDefault()
    if(this.state.password!==this.state.cpassword)
        this.warningref.current.innerText="*The password and confirm password donot match.Please try again*"
    else if(this.state.password.length<8)
        this.warningref.current.innerText="*The password should have a minimum of 8 characters*"
    else{
      const validextension=this.state.email.split("@")[1]
      if(validateEmail(this.state.email)){
      if(validextension==="gmail.com"||validextension==="yahoo.com"||validextension==="redmail.com"||validextension==="hotmail.com"){
        var user = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password
    }
    console.log(this.state.email)
    axios.post("/user/add", user,{
      'content-type': 'x-www-form-urlencoded'
  })
      .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data)
        this.props.history.push("loginuser")
      })
      .catch(err =>{ console.log('Error:' + err)
                      if(err==="User Already exists")
                        this.warningref.current.innerText=`*${err}`
                      else
                        this.warningref.current.innerText="Oops! Sorry Something went wrong.Try again in a minute"
                    })
}
  else
    this.warningref.current.innerText="*Invalid Email*"    
}else{
  this.warningref.current.innerText="*Invalid Email*"
}
}
  }
  render() {
    return (
      <div className={styles.loginformpage}>
      <form onSubmit={this.onSubmit} method="POST" className={styles.loginform} data-aos="fade-down">
           <fieldset>
               <img src={logo} alt="Savishkar logo" />
               <h1>Add User</h1>
               <p ref={this.warningref} ></p>
               <span>
                  <input type="text" name="firstname" value={this.state.firstname} onChange={this.onchange}  placeholder="First Name" required/>
                  <input type="text"  name="lastname" placeholder="Last Name" value={this.state.lastname} onChange={this.onchange} required/>
               </span>
               <input type="email"  name="email" placeholder="Email" value={this.state.email} onChange={this.onchange} required/>
               <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.onchange} required/>
               <input type="password" name="cpassword" placeholder=" Confirm Password" value={this.state.cpassword} onChange={this.onchange} required/>
                <h2>WE WELCOME YOU {this.state.firstname} {this.state.lastname} !!!</h2>
               <button type="submit" >Submit</button>
           </fieldset>
      </form>
   </div>
     )
  }
}

export default AddUser

