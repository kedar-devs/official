// import React, { Component } from 'react';
// import axios from 'axios';
// import pic from '../photos/sa15.JPG';
// class AddPoem extends Component {
//   constructor(props) {
//     super(props);

//     this.onSubmit = this.onSubmit.bind(this)
//     this.onChange = this.onChange.bind(this)
//     this.changes = this.changes.bind(this)
//     this.state = {
//       poet: '',
//       content: null,
//       title: '',
//       about:'',
//       date: new Date()
//     }
    

//   }
  
//   changes=async e=> {
//     e.preventDefault()
//     console.log(e.target.files[0])
//     this.setState({
//       content:e.target.files[0]
//     })
    
//   }
//   onChange(e) {
//     this.setState({
//       [e.target.name]: e.target.value
//     })
//   }


//   onSubmit=async e=> {
//     e.preventDefault()
//     const data=new FormData()
//     data.set('encType','multipart/form-data')
//     data.append('content',this.state.content)
//     /*console.log(data.get('content'))
//     data.append('title',this.state.title)
//     data.append('poet',this.state.poet)
//     data.append('date',this.state.date)
//     console.log(data.get('content'))
//     const poem=data*/
//     const poem = {
//       poet: this.state.poet,
//       content: data,
//       title: this.state.title,
//       about:this.state.about,
//       date: this.state.date
//     }
//     console.log(this.state.content)
//     //console.log(poem)
//     //console.log(poem)
//     axios.post('/poem/add',poem,{
//       headers:{
//         'encType': 'multipart/form-data'
//       }
//     })
//       .then(res => {
//         this.props.history.push("things")
//         console.log(res.data)
      
//       })
//       .catch(err => console.log('ERROR:' + err))
//     //window.location = '/addpoem'
//   }
//   render() {
//     return (
//       <div>
//         <div className="row background1">
//           <div className="col-md-6 col-sm-6 back">
//             <img src={pic} alt='sorry couldnt load' className="img-fluid" />
//           </div>
//           <div className="col-md-6 col-sm-6">
//             <form  encType="multipart/form-data" action="/poem/add" method="post">
//               <div className="form-row">
//                 <div className="form-group col-md-6">
//                   <label>Title</label>
//                   <input type="text" className="form-control input"  placeholder="title" name="title" value={this.state.title} onChange={this.onChange} />
//                 </div>
//                 <div className="form-group col-md-6">
//                   <label>Poet</label>
//                   <input type="text" className="form-control input"  placeholder="poet" name="poet" value={this.state.poet} onChange={this.onChange} />
//                 </div>
//               </div>
//               <div className="form-group">
//                 <label>Description</label>
//                 <input type="text" className="form-control input"  placeholder="please add the description" name="about" onChange={this.onChange} />
//               </div>
//               <div className="form-group">
//                 <label>Content</label>
//                 <input type="file" className="form-control input"  placeholder="submit txt or docx file" name="content" onChange={this.changes} ref={ref=> this.fileInput = ref}/>
//               </div>
//               <div className="form-group">
//                 <label>Date</label>
//                 <input type="date" className="form-control input" id="inputAddress2" placeholder="date" value={this.state.date} name="date" onChange={this.onChange} />
//               </div>

//               <button type="submit" className="btn btn-primary" type="submit">Submit</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default AddPoem
import React, { Component } from 'react';
import axios from 'axios';
// import pic from '../../photos/sa15.JPG';
import logo from "../../photos/newlogo.jpeg"
import styles from "./Additems.module.css"
class AddPoem extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.changes = this.changes.bind(this)
    this.warningref=React.createRef()
    this.state = {
      poet: '',
      content: null,
      title: '',
      about:'',
      date: new Date()
    }
  }
  changes=async e=> {
    e.preventDefault()
    console.log(e.target.files[0])
    this.setState({
      content:e.target.files[0]
    })
    
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  onSubmit=async e=> {
    e.preventDefault()
    const data=new FormData()
    data.set('encType','multipart/form-data')
    data.append('content',this.state.content)
    /*console.log(data.get('content'))
    data.append('title',this.state.title)
    data.append('poet',this.state.poet)
    data.append('date',this.state.date)
    console.log(data.get('content'))
    const poem=data*/
    const poem = {
      poet: this.state.poet,
      content: data,
      title: this.state.title,
      about:this.state.about,
      date: this.state.date
    }
    console.log(this.state.content)
    //console.log(poem)
    //console.log(poem)
    axios.post('/poem/add',poem,{
      headers:{
        'encType': 'multipart/form-data'
      }
    })
      .then(res => {
        this.props.history.push("things")
        console.log(res.data)
      })
      .catch(err => {console.log('ERROR:' + err)
      this.warningref.current.innerText="*Opps not you Sorry! its our fault!Please try again in a while*"
    })
    // window.location = '/addpoem'
  }
  render() {
    return (
      <div className={styles.addpage} data-aos="fade-down">
        <img src={logo} alt="savishkar logo" />
               <form  encType="multipart/form-data" action="/poem/add" method="post" className={styles.addform}>
                  <h2>Add a poem</h2>
                  <p ref={this.warningref} ></p>
                  <input type="text"  placeholder="Title" name="title" value={this.state.title} onChange={this.onChange} required/>
                  <input type="text"  placeholder="Poet" name="poet" value={this.state.poet} onChange={this.onChange} required/>
                  <input type="text"  placeholder="Please add the description" name="about" onChange={this.onChange} required/>
                  {/* <input type="file"  placeholder="Submit .txt or .docx file" name="content" onChange={this.changes} ref={ref=> this.fileInput = ref}/> */}
                  <input type="file" className={styles.customfileinput} name="content" onChange={this.changes} ref={ref=> this.fileInput = ref} required/>   
                  <input type="date" id="inputAddress2" placeholder="Date" value={this.state.date} name="date" onChange={this.onChange} required/>
                  <button type="submit">Submit</button>
               </form>            
      </div>
    )
  }
}

export default AddPoem
  // <div>
      //   <div className="row background1">
      //     <div className="col-md-6 col-sm-6 back">
      //       <img src={pic} alt='sorry couldnt load' className="img-fluid" />
      //     </div>
      //     <div className="col-md-6 col-sm-6">
      //       <form  encType="multipart/form-data" action="/poem/add" method="post">
      //         <div className="form-row">
      //           <div className="form-group col-md-6">
      //             <label>Title</label>
      //             <input type="text" className="form-control input"  placeholder="title" name="title" value={this.state.title} onChange={this.onChange} />
      //           </div>
      //           <div className="form-group col-md-6">
      //             <label>Poet</label>
      //             <input type="text" className="form-control input"  placeholder="poet" name="poet" value={this.state.poet} onChange={this.onChange} />
      //           </div>
      //         </div>
      //         <div className="form-group">
      //           <label>Description</label>
      //           <input type="text" className="form-control input"  placeholder="please add the description" name="about" onChange={this.onChange} />
      //         </div>
      //         <div className="form-group">
      //           <label>Content</label>
      //           <input type="file" className="form-control input"  placeholder="submit txt or docx file" name="content" onChange={this.changes} ref={ref=> this.fileInput = ref}/>
      //         </div>
      //         <div className="form-group">
      //           <label>Date</label>
      //           <input type="date" className="form-control input" id="inputAddress2" placeholder="date" value={this.state.date} name="date" onChange={this.onChange} />
      //         </div>
      //         <button type="submit" className="btn btn-primary" type="submit">Submit</button>
      //       </form>
      //     </div>
      //   </div>
      // </div>