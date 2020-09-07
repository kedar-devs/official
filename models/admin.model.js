const mongoose=require('mongoose')
 
const Schema=mongoose.Schema;

const adminSchema=new Schema({
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    }

})

const admin=mongoose.model('admin',adminSchema)

module.exports=admin