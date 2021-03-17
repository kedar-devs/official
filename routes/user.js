const router=require('express').Router();
let User=require('../models/user.model');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const saltRound=8;
//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
const nodemailer=require('nodemailer');
const sendgridTrans=require('nodemailer-sendgrid-transport')
const crypto=require('crypto');
var cloudinary=require('cloudinary').v2
cloudinary.config({
    cloud_name:'savishkar',
    api_key:'485787349522969',
    api_secret:'zOTZ3DN66ch5LSY7cqcjf5yVu3E'
})
process.env.SENDGRID_API_KEY="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"
const transporter=nodemailer.createTransport({
    service:'Gmail' ,
    
    auth:{
        user:'savishkargec@gmail.com',
        pass:'For@*Web123'
   }
})
let multer=require('multer'),
    uuidv4=require('uuidv4'),
    express=require('express');
    var fs = require('fs');
const keys=process.env.ATLAS_URI;
process.env.SECRET_KEY='secret'
const DIR='./uploads/videos/';

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,DIR);
    },
    filename:(req,file,cb)=>{
        const filename=file.originalname.toLowerCase().split(' ').join('-');

        cb(null,uuidv4+'-'+filename)
    }
})
var upload = multer({
    storage: storage,
    
});

router.route('/').get((req,res)=>{
    User.find()
    .then(user=>res.json(user))
    .catch(err=>res.status(400).json('Error:'+err))
})
router.route('/add').post((req,res)=>{
    User.findOne({email:req.body.email},(err,user)=>{
        if(!user)
        {
            console.log(req.body.email)
            const firstname=req.body.firstname
            const lastname=req.body.lastname
            const email=req.body.email
            const password=req.body.password
            const content=' '
            const title=' '
            const description=' '
            const type=' '
            const resetToken=' '
            const expiresToken=' '
            const newUser=new User({firstname,lastname,email,password,content,title,description,type,resetToken,expiresToken})
            bcrypt.hash(newUser.password,saltRound,(err,hash)=>{
                if (err) throw err;
                newUser.password=hash;
                newUser.save((err,user)=>{
                    if(err){
                        console.log(err)
                    }
                    else{
                        let payload={subject:user.email}
                     let token=jwt.sign(payload,process.env.SECRET_KEY)
                     res.status(200).send({token})
                    }
                }) 
            })
            
             
             /*.then(res=>{
                 console.log(res.email)
                 let payload={subject:res.email}
                 let token=jwt.sign(payload,process.env.SECRET_KEY)
                 res.status(200).send({token})
             })
             .catch(err=> res.status(400).json('Error:'+err))*/

        }
        else if(user){
            res.status(401).send('User Already exists')
        }
    })
    
})
router.post('/login',(req,res)=>{

    User.findOne({email:req.body.email},(err,user)=>{
         
        if(err){
            console.log(err)
        }
        else{
            if(!user){
                res.status(401).send('invalid Email')
            }else{
                bcrypt.compare(req.body.password,user.password).then(isMatch=>{
                    if(isMatch){
                            let payload={subject:user._id}
                            let token=jwt.sign(payload,process.env.SECRET_KEY)
            
                            res.status(200).send({user,token})
                        
                        
                    }
                    else{
                        res.status(401).send('invalid Password')
                    }
                })
            }
        }
    })
})
router.post('/addcontent/:id',upload.single('content'),(req,res)=>{
    const url=req.protocol+'://'+req.get('host')
    console.log(req.params.id)
    User.findById(req.params.id)
    .then(user=>{
        
        console.log("in then")
        user.content=url+'/uploads/videos/'+req.file.filename
        user.title=req.body.title
        user.discription=req.body.discription
        user.type=req.body.type

        cloudinary.uploader.upload(user.content,{resource_type:"raw"},(err,result)=>{
            if(err){
    
                res.status(500).json(err)
            }
            else{
                user.content=result.url
                user.save()
                .then(result => {
                    res.status(201).json({
                    message: "User registered successfully!",
                    userCreated: {
                        title:result.title,
                        content:result.content
                    }
                })
            })
            .catch(err => {
                console.log(err),
                    res.status(500).json({
                        error: err
                    });
            })
            }
        })
    })
    .catch(err=>res.status(400).json('Error outside post:'+err))
})
router.post('/deletecontent/:id',(req,res)=>{
    
    console.log(req.body)
    User.findById(req.params.id)
    .then(user=>{
        
        user.content=' '
        
        user.save()
        .then(result=>res.status(200).json('Success'))
        .catch(err=>res.status(400).json('Error inside post:'+err))
    })
    .catch(err=>res.status(400).json('Error outside post:'+err))
})

router.post('/removecontent/:id',(req,res)=>{
    
    console.log(req.body)
    User.findById(req.params.id)
    .then(user=>{
        cloudinary.uploader.destroy(req.body.content, function(err,result) { 
            if (err) throw err;

            console.log(result)
            
        });
        user.content=' '
        
        user.save()
        .then(result=>res.status(200).json('Success'))
        .catch(err=>res.status(400).json('Error inside post:'+err))
    })
    .catch(err=>res.status(400).json('Error outside post:'+err))
})
router.delete('/delete/:id',(req,res)=>{
    User.findByIdAndDelete(req.params.id)
    .then(()=>res.status(200).json('Deleted successfully'))
    .catch(err=>res.status(400).json('Error:'+err))
})
router.post('/forgot-password',(req,res)=>{
    crypto.randomBytes(32,(err,buffer)=>{
        if(err){
            console.log(err)
        }
        else{
            const token =buffer.toString("hex")
            User.findOne({email:req.body.email},(err,user)=>{
            if(err || !user){
                res.status(422).send('No user with this email id available')
            }
            else{
                user.resetToken=token
                user.expiresToken=Date.now()+3600000
                user.save()
                .then(user=>{
                    console.log('hello')
                    transporter.sendMail({
                        to:user.email,
                        from:"savishkargec@gmail.com",
                        subject:"password reset",
                        html:`
                        <p>Hi ${user.firstname}, forgot your password.<br/> Don't worry we got you covered</p>
                        <h5><a href="https://savishkaar.herokuapp.com/update-password/${token}">click here</a></h5>
                        <p>link expires in one hour, thank you</p>
                        `
                    },(err,result)=>{
                        if(err){
                            console.log(err)
                        }
                        else{
                            res.send("success")
                        }
                        transporter.close()
                    })

                    res.send({
                        message: 'An email has been sent to the provided email with further instructions.'
                    });
                    
                })
                .catch(err=>res.status(400).json('Error:'+err))

                    
               }
        })
        }
    })
    
})
router.post('/new-password',(req,res)=>{
    console.log(req.body)
    const password=req.body.password
    const sentToken=req.body.token
    console.log(sentToken)
    User.findOneAndUpdate({resetToken:req.body.token})
    .then(user=>{
                
                console.log('in here')
                bcrypt.hash(password,saltRound,(err,hash)=>{
                    if (err) throw err;
                    console.log(hash)
                    user.password=hash;
                    user.resetToken=' ';
                    user.expiresToken=' ';
                    user.save()
                    .then(result=>res.status(200).json("success"))
                    .catch(err=>{
                        console.log(err);
                        res.status(400).json('Error:'+err)})
                })
    })
    .catch(err=>{
        console.log(err)
        res.status(400).json('oopsy doopsy sorry'+err)})



})
module.exports=router;