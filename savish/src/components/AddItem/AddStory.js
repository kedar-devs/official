import React, { Component } from 'react';
import axios from 'axios';
import logo from "../../photos/newlogo.jpeg"
import styles from "./Additems.module.css"
class AddStory extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.changes = this.changes.bind(this)
    this.warningref=React.createRef()
    this.state = {
      Author: '',
      content: null,
      title: '',
      about:'',
      date: new Date()
    }
  }
  
  onChange(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  changes=async e=> {
    e.preventDefault()
    console.log(e.target.files[0])
    this.setState({
      content:e.target.files[0]
    })
    
  }

  onSubmit(e) {
    e.preventDefault()
    const story = {
      Author: this.state.Author,
      content: this.state.content,
      about: this.state.about,
      title: this.state.title,
      date: this.state.date
    }
    console.log(story)
    axios.post('/story/add', story)
      .then(res =>{ 
        const {history}=this.props
        history.push("things")
        console.log(res.data)

      })
      .catch(err =>{ console.log('ERROR:' + err)
      this.warningref.current.innerText="*Opps not you Sorry! its our fault!Please try again in a while*";}
      )
    window.location = '/'
  }
  render() {
    return (
    <div className={styles.addpage} data-aos="fade-down">
      <img src={logo} alt="savishkar logo" />
           <form  encType="multipart/form-data" action="/story/add" method="post" className={styles.addform}>
              <h2>Add a paint</h2>
              <p ref={this.warningref} ></p>
              <input type="text" name="title" id="title" placeholder="Title of the story" value={this.state.title} onChange={this.onChange}/>
              <input type="text" id="Author" placeholder="Authors name" name="Author" value={this.state.Author} onChange={this.onChange} />
              <input type="text" placeholder="Description" name="about" onChange={this.onChange}  />
              {/* <input type="file" className=""  placeholder="Submit .txt or .docx file" name="content" onChange={this.changes} ref={ref=> this.fileInput = ref}/> */}
              <input type="file" class={styles.customfileinput} id="content" name="content"  onChange={this.changes} />   
              <input type="date" id="date" name="date" value={this.state.date} onChange={this.onChange} />
              <button type="submit">Submit</button>
           </form>            
    </div>
    )
  }
}

export default AddStory
  // <div>
      //   <div className="row background1">
      //     <div className="col-md-6 col-sm-6 back">
      //       <img src={pic} alt='sorry couldnt load' className="img-fluid" />
      //     </div>
      //     <div className="col-md-6 col-sm-6">
      //       <form encType="multipart/form-data" action="/story/add" method="post">
      //         <div className="form-row">
      //           <div className="form-group col-md-6">
      //             <label>Title</label>
      //             <input type="text" className="form-control input" name="title" id="title" placeholder="title of the story" name="title"value={this.state.title} onChange={this.onChange} />
      //           </div>
      //           <div className="form-group col-md-6">
      //             <label>Author</label>
      //             <input type="text" className="form-control input" id="Author" placeholder="authors name" name="Author" value={this.state.Author} onChange={this.onChange} />
      //           </div>
      //         </div>
      //         <div className="form-group">
      //           <label>Discription</label>
      //           <input type="text" className="form-control input"  placeholder="please add the description" name="about" onChange={this.onChange} />
      //         </div>
      //         <div className="form-group">
      //           <label>Content</label>
      //           <input type="file" className="form-control input" id="content" placeholder="place the file here" name="content"  onChange={this.changes} />
      //         </div>
      //         <div className="form-group">
      //           <label>Date</label>
      //           <input type="date" className="form-control input" id="date" placeholder="todays date" name="date" value={this.state.date} onChange={this.onChange} />
      //         </div>

      //         <button type="submit" className="btn btn-primary">enter</button>
      //       </form>
      //     </div>
      //   </div>
      // </div>