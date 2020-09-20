import React, { Component } from 'react'
import axios from 'axios'
import logo from '../../photos/newlogo.jpeg';
import styles from "./Login.module.css"

class LoginUser extends Component {
    constructor(){
        super()
        this.state = {
            email:'',
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
        const user ={
            email: this.state.email,
            password: this.state.password
        }
        const {history}=this.props
        console.log(user.email)
        console.log(user.password)
        console.log(history)
        axios.post("/user/login",user)
        .then(res=>{
            console.log(res.data.token)
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('token2',res.data.user._id)
            this.props.history.push("function")
            window.location.reload(true)
        })
        .catch(err=>{
            console.log(err)
            this.warningref.current.innerText="*Invalid Credentials*"
        })
    }
    render() {
        return (
            <div className={styles.loginformpage} data-aos="fade-down">
               <form onSubmit={this.onSubmit} method="POST" className={styles.loginform}>
                    <fieldset>
                        <img src={logo} alt="Savishkar logo" className={styles.savishkarlogo}/>
                        <p ref={this.warningref} ></p>
                        <h1>Login</h1>
                        <input type="email" className={styles.username} name="email" placeholder="Email" value={this.state.username} onChange={this.onChange} required />
                        <small id="emailHelp" className={styles.emailhelp}>u'r secret is safe with us</small>
                        <input type="password" className={styles.password} name="password" placeholder="Password" value={this.state.password} onChange={this.onChange} required/>
                        <button type="submit" className={styles.loginbtn} onClick={this.onSubmit} >Submit</button>
                    </fieldset>
               </form>
            </div>
        )
    }
}
export default LoginUser
            // <div>
            //      <div className="col-md-6 col-sm-6"><h1>Login</h1>
            //             <form onSubmit={this.onSubmit} method="POST">
            //                 <div className="form-group">
            //                     <label htmlFor="exampleInputEmail1">Email</label>
            //                     <input type="email" className="form-control" name="email"  placeholder="username" value={this.state.username} onChange={this.onChange} />
            //                     <small id="emailHelp" className="form-text text-muted">u'r secret is safe with us</small>
            //                 </div>
            //                 <div className="form-group">
            //                     <label htmlFor="exampleInputPassword1">Password</label>
            //                     <input type="password" className="form-control" name="password" placeholder="Password" value={this.state.password} onChange={this.onChange} />
            //                 </div>


            //                 <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
            //             </form>
            //         </div>
            // </div>
