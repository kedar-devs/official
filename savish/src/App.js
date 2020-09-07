import React,{useEffect} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './css/important.css';
import './css/about.module.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Navigator from './components/Navigator/Navigator';
import LoginAdmin from './components/Login/LoginAdmin.js';
import Things from './components/Things/Things';
import DisplayPoem from './components/Display/DisplayPoem.js';
import DisplayVideo from './components/Display/DisplayVideo.js';
import DisplayStory from './components/Display/DisplayStory.js';
import DisplayPaint from './components/Display/DisplayPaint.js';
import Home from './components/Home/Home.js';
import AddPoem from './components/AddItem/AddPoem';
import AddStory from './components/AddItem/AddStory';
import AddVideo from './components/AddItem/AddVideo';
import AddPaint from './components/AddItem/AddPaint';
import Footer from './components/Footer/Footer';
import LoginUser from './components/Login/LoginUser'
import AddUser from './components/Login/AddUser'
import Credits from './components/Credits/Credits';
import Func from './components/Function/Func'
import AOS from 'aos';
import 'aos/dist/aos.css';
// import './App.css'
// import About from './components/About.js'
//import store from '/store';
function App() {
  useEffect(() => {
      AOS.init();
      AOS.init({
        delay:"100",
      duration:"3000",
      easing:"ease-in-out",
      once:true,
      anchorPlacement:"center-bottom"
      })
  }, [])
  return (     
    <div className='background'>
      <Router>
            <Navigator />
            <Route path="/" exact component={Home}/> 
            <Route path='/home' exact component={Home} />
            <Route path="/signin" exact component={AddUser} />
            <Route path='/loginuser' exact component={LoginUser} />
            <Route path="/function" exact component={Func} />
            <Route path='/admin' exact component={LoginAdmin} />
            <Route path="/things" exact component={Things} /> 
            <Route path="/credits" component={Credits}/>
            <Route path="/poemdisp" exact component={DisplayPoem} />
            <Route path="/videodisp" exact component={DisplayVideo} />  
            <Route path="/paintdisp" exact component={DisplayPaint} />
            <Route path="/STORYdisp" exact component={DisplayStory} />
            <Route path="/addpoem" extends component={AddPoem} />
            <Route path="/addStory" extends component={AddStory} />
            <Route path="/addPaint" extends component={AddPaint} /> 
            <Route path="/addVideo" extends component={AddVideo} /> 
            <Footer />
      </Router>
   </div>
  );
}

export default App;
