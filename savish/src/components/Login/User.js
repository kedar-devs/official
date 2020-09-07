import React, { Component } from 'react'
// import pic from '../../photos/sa15.JPG';
import logo from '../../photos/newlogo.jpeg'
import styles from './Login.module.css'
class User extends Component {
  render() {
    return (
      <div className={styles.loginformpage}>
               <form onSubmit={this.onSubmit} method="POST" className={styles.loginform}>
                    <fieldset>
                        <img src={logo} alt="Savishkar logo" />
                        <h1>Login</h1>
                        <span>
                        <input type="text"  name="firstname" id="inputEmail4"  placeholder="First Name"/>
                        <input type="text"  name="lastname" id="inputPassword4" placeholder="Last Name"/>
                        </span>
                        <input type="email"  name="email" id="inputAddress" placeholder="Email"/>
                        <input type="password" name="password" id="inputAddress2" placeholder="Password"/>
                        <span>
                        <input type="checkbox" id="gridCheck" value="" />
                        Remember me
                        </span>
                        <button type="submit" >Submit</button>
                    </fieldset>
               </form>
            </div>
    )
  }
}

export default User
//<div>
      //   <div className="row">
      //     <div className="col-md-6 col-sm-6">
      //       <img src={pic} alt='sorry couldnt load' />
      //     </div>
      //     <div className="col-md-6 col-sm-6">
      //       <form>
      //         <div className="form-row">
      //           <div className="form-group col-md-6">
      //             <label for="inputEmail4">First name</label>
      //             <input type="text" className="form-control" id="inputEmail4" placeholder="Email" value="" />
      //           </div>
      //           <div className="form-group col-md-6">
      //             <label for="inputPassword4">Last Name</label>
      //             <input type="text" className="form-control" id="inputPassword4" placeholder="Password" value="" />
      //           </div>
      //         </div>
      //         <div className="form-group">
      //           <label for="inputAddress">Email</label>
      //           <input type="email" className="form-control" id="inputAddress" placeholder="Email@email.com" value="" />
      //         </div>
      //         <div className="form-group">
      //           <label for="inputAddress2">Password</label>
      //           <input type="password" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value="" />
      //         </div>


      //         <div className="form-group">
      //           <div className="form-check">
      //             <input className="form-check-input" type="checkbox" id="gridCheck" value="" />
      //             <label className="form-check-label" for="gridCheck">
      //               Remember me
      // </label>
      //           </div>
      //         </div>
      //         <button type="submit" className="btn btn-primary">Sign in</button>
      //       </form>
      //     </div>
      //   </div>
      // </div>

