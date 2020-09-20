import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Navigator.module.css';
import logo from "../../photos/newlogo.jpeg"
import hamburgericon from "../../icons/hamburgericon.svg"
import closebtn from "../../icons/closebtn.svg"
import axios from 'axios'
function Navigator() {
  const DeleteUser=()=>{
    let id=localStorage.getItem('token2')
    localStorage.clear()
    axios.delete("/user/delete/"+id)
    .then(res=>{
      console.log("User deleted");
      window.location.reload(true);
    })
    .catch(err=>console.log(err))
  }
  const RemoveToken=()=>{
    console.log("in remove item")
    localStorage.removeItem('token')
    window.location.reload(true);
  }
  let resnavrref=null
  let closedbtn=null
  let Exist=false
  const responsiveNavbarOpen=()=>{
    // Navigator_leftnav__mSB-h
    resnavrref.classList.remove("moveright")
    resnavrref.classList.add("moveleft")
    closedbtn.classList.remove("moveright")
    closedbtn.classList.add("moveleft")
    // closedbtn.classList.add("Navigator_leftnav__mSB-h")
    resnavrref.style.display="flex"
    closedbtn.style.display="block"
  }
  const responsiveNavbarClose=()=>{

if(window.innerWidth<700){
    resnavrref.style.display="none"
    closedbtn.style.display="none"
    resnavrref.classList.remove("moveleft")
    closedbtn.classList.remove("moveleft")
    resnavrref.classList.add("moveright")
    closedbtn.classList.add("moveright")
  }}
    if(localStorage.getItem('token')){
      Exist=true
    }
    return (
        <div>
          {/* <Navbar collapseOnSelect expand="lg" className={styles.navbar} >
            <Navbar.Brand href="#home" className={styles.brand}>Savishkar</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown" variant="danger"> 
                         <NavDropdown className={styles.drop} title="Artwork" id="Drop" variant="primary" style={{color:"white"}}>
                  <NavDropdown.Item href="#action/3.1">Poems</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Paintings</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Stories</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Video</NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="/" className={styles.link}>Home</Nav.Link>
                <Nav.Link eventKey={2} href="/signin" className={styles.link}>
                  SignIn
                </Nav.Link>
                <Nav.Link eventKey={3} href="/admin" className={styles.link}>
                  LogIn
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar> */}
           {/* className={styles.hamburgericon} */}
        <header className={styles.navbar} >
            <div className={styles.leftnav} data-aos="fade-left" >
              <img src={logo} alt="savishlogo" title="Saviskar Logo" className={styles.logo}/>
              </div>
              <img src={closebtn} className={styles.closebtn} ref={e=>closedbtn=e} onClick={responsiveNavbarClose} alt="close btn"/>
                {/* <ul className={styles.navlinks} ref={(e)=>{resnavrref=e}} data-aos="fade-left" data-aos-delay="100"
    data-aos-duration="3000"
    data-aos-easing="ease-in-out"> */}
                <ul className={styles.navlinks} ref={(e)=>{resnavrref=e}} >
                <Link to="/" className={styles.link}><li className={styles.navlink} onClick={responsiveNavbarClose}>Home</li></Link>
                  <Link to="/credits" className={styles.link}><li className={styles.navlink} onClick={responsiveNavbarClose}>Credits</li></Link>
                  {Exist?
                  <>
                  <li className={styles.navlink}>
                    <button className={styles.linkbtn}  onClick={()=>DeleteUser()}>Sign out</button>
                  </li>  
                  <li className={styles.navlink}>
                    <button className={styles.linkbtn}  onClick={()=>RemoveToken()}>Log out</button>
                  </li>
                  </>
                  : <><Link to="/signin" className={styles.link}><li className={styles.navlink}  onClick={responsiveNavbarClose}>Sign In</li></Link>
                  <Link to="/loginuser" className={styles.link}><li className={styles.navlink}  onClick={responsiveNavbarClose}>Log In</li></Link></>}
              </ul>
                <img src={hamburgericon} alt="hamburger icon" className={styles.hamburgericon} onClick={responsiveNavbarOpen} data-aos="fade-left" data-aos-delay="100"
    data-aos-duration="3000"
    data-aos-easing="ease-in-out"/>
        </header>  
        </div>
    )
}
export default Navigator