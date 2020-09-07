const mongoose=require('mongoose')

const Schema=mongoose.Schema

const poemSchema=new Schema({
    title:{type:String,required:true},
    content:{type:String,required:true},
    poet:{type:String,required:true},
    about:{type:String,required:false},
    date:{type:Date,required:true}
},{
    timestamps:true
})

const poem=mongoose.model('poem',poemSchema)

module.exports=poem