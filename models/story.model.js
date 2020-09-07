const mongoose=require('mongoose')

const Schema=mongoose.Schema

const storySchema=new Schema({
    title:{type:String,required:true},
    content:{type:String,required:true},
    Author:{type:String,required:true},
    about:{type:String,required:false},
    date:{type:Date,required:true}
},{
    timestamps:true
})

const story=mongoose.model('story',storySchema)

module.exports=story