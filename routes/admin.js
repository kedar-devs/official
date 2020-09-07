const router=require('express').Router();
const jwt=require('jsonwebtoken');
//const bcrypt=require('bcryptjs')
//const validateLogin=require("../../backend/routes/login");
let Admin=require('../models/admin.model');

const keys=process.env.ATLAS_URI;
process.env.SECRET_KEY='secret'



router.route('/login').post((req,res)=>{
    let userData=req.body
    Admin.findOne({username:userData.username},(error,admin)=>{
        if(error){
            console.log(error)
        }else{
            if(!admin){
                res.status(401).send('invalid username')
            }
            else{
                if(admin.password != userData.password){
                    res.status(401).send('invalid password')    
                }else{
                    const payload={
                        id:admin.id
                    }
                    let token=jwt.sign(payload,process.env.SECRET_KEY,{
                        expiresIn:315556926
                    })
                    res.status(200).send({token})
                    //this._router.navigate('/things')
                     
                }     
            }
        }
    })
    /*
    const {errors, isValid}=validateLogin(req.body)
    if(!isValid){
        return res.status(400).json(errors)
    }

    const username=req.body.username
    
    const password=req.body.password

    Admin.findOne({username}).then(admin=>{
        if(!admin){
            return res.status(404).json({usernamenotfound:"username not found"})

        }
        if(password===admin.password)
        {
            then(isMatch =>{
            if(isMatch){
                const payload={
                    id:admin.id,
                    username:admin.username
                }
                jwt.sign(payload,process.env.SECRET_KEY,{
                    expiresIn:315556926
                },
                (err,token) => {
                    res.json({
                        success:true,
                        token:"bearer"+token
                    })
                }
                )

            }else{
                return res.status(400).json({passwordincorrect:"password incorrect"})
            }
        })
    }})
*/
})



module.exports=router;