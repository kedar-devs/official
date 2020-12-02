import React, { Component } from 'react';
import logo from '../../photos/newlogo.jpeg';
import styles from "./Login.module.css"
import axios from "axios"
import closed_eye from "../../icons/closedeye.svg"
import open_eye from "../../icons/openeye.svg"
import {Link} from "react-router-dom"
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
      passwordseen:false,
    }
    this.warningref=React.createRef()
    this.onSubmit = this.onSubmit.bind(this)
    this.onchange = this.onchange.bind(this)
    this.passwordshowhide = this.passwordshowhide.bind(this)
  }

  onchange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  passwordshowhide(){
    if(this.state.passwordseen){
        document.getElementById("password").type="password"
        this.setState({
          passwordseen:false,
        })
    }
    else{
      document.getElementById("password").type="text"
      this.setState({
        passwordseen:true,
      })

    }
  }
scorePassword(pass) {
  var score = 0;
  if (!pass)
      return score;

  // award every unique letter until 5 repetitions
  var letters = new Object();
  for (var i=0; i<pass.length; i++) {
      letters[pass[i]] = (letters[pass[i]] || 0) + 1;
      score += 5.0 / letters[pass[i]];
  }

  // bonus points for mixing it up
  var variations = {
      digits: /\d/.test(pass),
      lower: /[a-z]/.test(pass),
      upper: /[A-Z]/.test(pass),
      nonWords: /\W/.test(pass),
  }

  var variationCount = 0;
  for (var check in variations) {
      variationCount += (variations[check] == true) ? 1 : 0;
  }
  score += (variationCount - 1) * 10;

  return parseInt(score);
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
        if(this.scorePassword(this.state.password)>60){
          alert("here")
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
                    })}
                    else{
    this.warningref.current.innerText="*Please enter a strong password*"    
                    }
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
               <img src={logo} alt="Savishkar logo" className={styles.savishkarlogo}/>
               <h1>Add User</h1>
               <p ref={this.warningref} ></p>
               <span>
                  <input type="text" name="firstname" value={this.state.firstname} onChange={this.onchange}  placeholder="First Name" required/>
                  <input type="text"  name="lastname" placeholder="Last Name" value={this.state.lastname} onChange={this.onchange} required/>
               </span>
               <input type="email"  name="email" placeholder="Email" value={this.state.email} onChange={this.onchange} required/>
               <div>
                    <div className={styles.showingpasssword}>
                      <input type="password" name="password" id="password" placeholder="Password" value={this.state.password} onChange={this.onchange} required/>
                      
                      <div >
                        {
                          this.state.passwordseen?<img src={closed_eye} alt="close password"onClick={this.passwordshowhide}/>:<img src={open_eye} alt="show password" onClick={this.passwordshowhide}/>
                        }
                        <br />
                        </div>
                      </div>
                    <small className={styles.instruction}>(Min 8 chars & include a capital letter,number,special character)</small>
                    </div>
                    
               <input type="password" name="cpassword" placeholder=" Confirm Password" value={this.state.cpassword} onChange={this.onchange} required/>
                <h2>WE WELCOME YOU {this.state.firstname} {this.state.lastname} !!!</h2>
               <button type="submit" >Submit</button>
           </fieldset>
           <p className={styles.redirect}><Link to="/loginuser">Already a user? Signin</Link></p>
      </form>
   </div>
     )
  }
}

export default AddUser

