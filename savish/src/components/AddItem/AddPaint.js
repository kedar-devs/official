import React, { Component } from 'react';
import axios from 'axios';
import logo from "../../photos/newlogo.jpeg"
import styles from "./Additems.module.css"
// import './../css/adding.css'
class AddPaint extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.contentadd=this.contentadd.bind(this)
    this.warningref=React.createRef()
    this.state = {
      painter: '',
      content: null,
      title: '',
      date: new Date()
    }
  }
  contentadd= async e=>{
    this.setState({
      content:e.target.files[0]
    })
  }
  onChange(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault()
    const paint = {
      painter: this.state.painter,
      content: this.state.content,
      title: this.state.title,
      date:this.state.date
    }
    console.log(paint)
    axios.post('/paint/add', paint)
      .then(res =>{ 
        this.props.history.push("things")
        console.log(res.data)})
      .catch(err =>{ console.log('ERROR:' + err)
        this.warningref.current.innerText="*Opps not you Sorry! its our fault!Please try again in a while*"
      })
    window.location = '/'
  }
  render() {
    return (
      <div className={styles.addpage} data-aos="fade-down">
        <img src={logo} alt="savishkar logo" />
             <form  encType="multipart/form-data" action="/paint/add" method="post" className={styles.addform}>
                <h2>Add a paint</h2>
                <p ref={this.warningref} ></p>
                <input type="text" id="title" placeholder="Title" name="title" value={this.state.title} onChange={this.onChange}/>
                <input type="text" id="painter" placeholder="Creator's name" name="painter" value={this.state.painter} onChange={this.onChange} />
                {/* <input type="file" className=""  placeholder="Submit .txt or .docx file" name="content" onChange={this.changes} ref={ref=> this.fileInput = ref}/> */}
                <input type="file" class={styles.customfileinput} onChange={this.contentadd} name="content" id="content"/>   
                <input type="date" id="date" placeholder="date" name="date" value={this.state.date} onChange={this.onChange} />
                <button type="submit">Submit</button>
             </form>            
    </div>
    )
  }
}

export default AddPaint
      //<div className="container-fluid background1">
      //   <br /><br /><br /><br />
      //   <div className="row back col-md-12">
      //     <div className="col-md-6 col-sm-6 img-pos">
      //       <img src={pic} alt='sorry could not load' className="img-fluid" />
      //     </div>
      //     <div className="col-md-6 col-sm-6 cont-pos">
      //       <form encType="multipart/form-data" action="/paint/add" method="post">
      //         <div className="form-row">
      //           <div className="form-group col-md-6">
      //             <label>Title</label>
      //             <input type="text" className="form-control input" id="title" placeholder="title" name="title" value={this.state.title} onChange={this.onChange} />
      //           </div>
      //           <div className="form-group col-md-6">
      //             <label>painter</label>
      //             <input type="text" className="form-control input" id="painter" placeholder="creator's name" name="painter" value={this.state.painter} onChange={this.onChange} />
      //           </div>
      //         </div>
      //         <div className="form-group">
      //           <label>Content</label>
      //           <input type="file" className="form-control input" id="content" placeholder="single jpg or png file " name="content"  onChange={this.contentadd} />
      //         </div>
      //         <div className="form-group">
      //           <label>Date</label>
      //           <input type="date" className="form-control input" id="date" placeholder="date" name="date" value={this.state.date} onChange={this.onChange} />
      //         </div>

      //         <button type="submit" className="btn btn-primary">Submit</button>
      //       </form>
      //     </div>
      //   </div>
      // </div>