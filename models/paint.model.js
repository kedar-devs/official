const mongoose=require('mongoose')

const Schema=mongoose.Schema

const paintSchema=new Schema({
    title:{type:String,required:true},
    content:{type:String,required:true},
    painter:{type:String,required:true},
    date:{type:Date,required:true}
},{
    timestamps:true
})

const paint=mongoose.model('paint',paintSchema)

module.exports=paint