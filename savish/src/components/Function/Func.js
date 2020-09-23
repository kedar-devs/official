import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios'
import styles from './Function.module.css'

class Func extends Component {

    constructor(props) {
        super(props);
        this.onSubmit =this.onSubmit.bind(this)
        this.onchange = this.onchange.bind(this)
        this.ontype=this.ontype.bind(this)
        this.onfile= this.onfile.bind(this)
        
        this.state={
            title:'',
            content:'',
            type:'',
            discription:'',
            form:false
        }

    }
    ontype(e){
      this.setState({
        [e.target.name]:e.target.value
      })
      console.log(this.state.type)
    }
    onchange(e) {
      console.log('in change dont look haha')
      this.setState({
        [e.target.name]:e.target.value
      })
    }
    onfile=async e=>{
      e.preventDefault()
      this.setState({
      content:e.target.files[0]
      })
      console.log(this.state.content)
    }
    onSubmit(e){
      e.preventDefault()
      console.log('in submit')
      const data=new FormData()
     data.set('encType','multipart/form-data')
     data.append('content',this.state.content)
     data.append('type',this.state.type)
     data.append('title',this.state.title)
     data.append('discription',this.state.discription)
    const user = {

      type:this.state.type,
      content: this.state.content,
      title: this.state.title,
      discription: this.state.discription
    }
    console.log(user)
    var userid=localStorage.getItem('token2')
    axios.post('/user/addcontent/'+userid, data)
    .then(res=>{
      console.log(res.data)
      this.props.history.push("home")
    })
    .catch(err=>console.log(err))
    }
    form=()=>{
      return(
        <form  encType="multipart/form-data" data-aos="fade-down"data-aos-duration="5000" action="/user/addcontent/" onSubmit={this.onSubmit} method="post" className={styles.userinputform}>
            {/* <div  style={{color: 'white'}}>
            <input type = "radio"
                 name = "type"     
                 value = 'poem'
                 checked={this.state.type==='poem'}
                 onChange={this.ontype}
                  />
          <label >Poem</label>
          <input type = "radio"
                 name = "type"
                
                 value = 'story'
                 checked={this.state.type==='story'}
                 onChange={this.ontype}
                 />
          <label>Story</label>
          <input type = "radio"
                 name = "type"
                 value = 'paint'
                 checked={this.state.type==='paint'}
                 onChange={this.ontype}
                 />
          <label>Painting</label>
          <input type = "radio"
                 name = "type"
                 value = 'video'
                 checked={this.state.type==='video'}
                 onChange={this.ontype}
                 />
          <label>Video</label>
          <br />
          <p> You have selected {this.state.type}</p>
          </div> */}
        <div className={styles.group}>
          <input type="radio" name = "type"     
                 value = 'poem'
                 checked={this.state.type==='poem'}
                 onChange={this.ontype}
                  id="rb1" className={styles.radioinput} />
          <label for="rb1" className={styles.radiolabel}>Poem</label>
          <input type="radio" name = "type"
                
                value = 'story'
                checked={this.state.type==='story'}
                onChange={this.ontype}
                 id="rb2" className={styles.radioinput}/>
          <label for="rb2" className={styles.radiolabel}>Story</label>
          <input type="radio" name = "type"
                 value = 'paint'
                 checked={this.state.type==='paint'}
                 onChange={this.ontype}
                  id="rb3" className={styles.radioinput}/>
          <label for="rb3" className={styles.radiolabel}>Paint</label>
          
        </div>
          <p> You have selected {this.state.type}</p>
            <input type="text" name="title" value={this.state.title} onChange={this.onchange} required placeholder="Title"/>
            <input type="text" name="discription" onChange={this.onchange} required placeholder="Description" />
            
        <p>If file upload here</p>
          <input type="file" placeholder="submit txt or docx file" name="content" onChange={this.onfile} ref={ref=> this.fileInput = ref} className={styles.customfileinput}/>
        <button type="submit" className="btn btn-primary" onSubmit={this.onSubmit} >Submit</button>
      </form>
      )  
    }
    
   
    render() {
        if(!!localStorage.getItem('token')){
        return (
            <div className={styles.functionpage} data-aos="fade-down">
              <div className={styles.functionpagediv}>
                  <h2>To add something of your own</h2>
                  <button onClick={() => this.setState({form: true}) }>click here</button> 
                  {this.state.form ? this.form() : null}
                  <h2>To navigate to the home page</h2>
                  <Link to='/home'>
                  <button>click here</button>
                  </Link>
              </div>
            </div>
        )
        }
        else{
            const {history}=this.props
            history.push("loginuser")
            return (<div></div>)
        }
    }

}
export default Func
