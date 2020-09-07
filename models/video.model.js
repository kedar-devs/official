const mongoose=require('mongoose')

const Schema=mongoose.Schema

const videoSchema=new Schema({
    title:{type:String,required:true},
    content:{type:String,required:true},
    creator:{type:String,required:true},
    date:{type:Date,required:true}
},{
    timestamps:true
})

const video=mongoose.model('video',videoSchema)

module.exports=video