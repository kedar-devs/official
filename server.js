const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const multer=require('multer')
const fs=require('fs')
var path=require('path')
require('dotenv').config();

const app=express()
const port=process.env.PORT || 3000
app.use(cors())
mongoose.set('useFindAndModify', false);

app.use(express.json())
app.use('/uploads/painting',express.static(path.join(__dirname+'/uploads/painting')))
app.use('/uploads/poems',express.static(path.join(__dirname+'/uploads/poems')))
app.use('/uploads/stories',express.static(path.join(__dirname+'/uploads/stories')))
app.use('/uploads/videos',express.static(path.join(__dirname+'/uploads/videos')))
//app.use(express.static(path.join(__dirname+'/uploads/stories')))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
const uri=process.env.ATLAS_URI
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true, useUnifiedTopology: true })
.then(()=>console.log('successful connection'))
.catch(err=>console.log('Error:'+err))

const connection=mongoose.connection
connection.once('open',()=>{
    console.log('connection established successfully')
})

const userRouter=require('./routes/user')
const adminRouter=require('./routes/admin')
const poemRouter=require('./routes/poem')
const paintRouter=require('./routes/paint')
const storyRouter=require('./routes/story')
const videoRouter=require('./routes/video')
const { dirname } = require('path')

app.use('/user',userRouter)
app.use('/admin',adminRouter)
app.use('/poem',poemRouter)
app.use('/paint',paintRouter)
app.use('/story',storyRouter)
app.use('/video',videoRouter)

if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static("savish/build"))
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"savish","build","index.html"))
    })
}
app.listen(port,()=>{
    console.log(`server established successfully: ${port}`)
    
})
app.use((req, res, next) => {
    // Error goes via `next()` method
    setImmediate(() => {
        next(new Error('Something went wrong'));
    });
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});