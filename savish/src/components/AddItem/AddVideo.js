import React, { Component } from 'react';
import axios from 'axios';
import logo from "../../photos/newlogo.jpeg"
import styles from "./Additems.module.css"
class AddVideo extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.warningref=React.createRef()
    
    this.state = {
      creator: '',
      content: '',
      title: '',
      date: new Date()
    }


  }
  onChange(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }


  onSubmit(e) {
    e.preventDefault()
    const story = {

      creator: this.state.creator,
      content: this.state.content,
      title: this.state.title,
      date:this.state.date
    }
    console.log(story)
    axios.post('/video/add', story)
      .then(res => {
        this.props.history.push("things")
        console.log(res.data)
        })
      .catch(err => {console.log('ERROR:' + err)
      this.warningref.current.innerText="*Opps not you Sorry! its our fault!Please try again in a while*"
      })
    window.location = '/things'
  }
  render() {
    return (
      <div className={styles.addpage} data-aos="fade-down">
      <img src={logo} alt="savishkar logo" />
           <form  onSubmit={this.onSubmit} method="post" className={styles.addform}>
              <h2>Add a Video</h2>
               <p ref={this.warningref} ></p>
              <input type="text" id="title" placeholder="Title" name="title" value={this.state.title} onChange={this.onChange}/>
              <input type="text" id="inputPassword4" placeholder="Creators name" name="creator" value={this.state.creator} onChange={this.onChange} />
              {/* <input type="text" placeholder="Description" name="about" onChange={this.onChange}  /> */}
              <input type="text" className="input form-control" id="inputAddress" placeholder="Link to the video" name="content" value={this.state.content} onChange={this.onChange} />   
              <input type="date"  id="inputAddress2" placeholder="date" name="date" value={this.state.date} onChange={this.onChange} />
              <button type="submit">Submit</button>
           </form>            
    </div>

    )
  }
}

export default AddVideo
 // <div>
      //   <div className="row background1">
      //     <div className="col-md-6 col-sm-6 back">
      //       <img src={pic} alt='sorry couldnt load ' className="img-fluid" />
      //     </div>
      //     <div className="col-md-6 col-sm-6">
      //       <form onSubmit={this.onSubmit} method="post">
      //         <div className="form-row">
      //           <div className="form-group col-md-6">
      //             <label htmlFor="inputEmail4">Title</label>
      //             <input type="text" className="input form-control" id="title" placeholder="title" name="title" value={this.state.title} onChange={this.onChange} />
      //           </div>
      //           <div className="form-group col-md-6">
      //             <label htmlFor="inputPassword4">creator</label>
      //             <input type="text" className="input form-control" id="inputPassword4" placeholder="creators name" name="creator" value={this.state.creator} onChange={this.onChange} />
      //           </div>
      //         </div>
      //         <div className="form-group">
      //           <label htmlFor="inputAddress">Link</label>
      //           <input type="text" className="input form-control" id="inputAddress" placeholder="link to your video" name="content" value={this.state.content} onChange={this.onChange} />
      //         </div>
      //         <div className="form-group">
      //           <label htmlFor="inputAddress2">Date</label>
      //           <input type="date" className="input form-control" id="inputAddress2" placeholder="date" name="date" value={this.state.date} onChange={this.onChange} />
      //         </div>

      //         <button type="submit" className="btn btn-primary">Enter</button>
      //       </form>
      //     </div>
      //   </div>
      // </div>