const router=require('express').Router();
let Poems=require('../models/poem.model');
var cloudinary=require('cloudinary').v2
cloudinary.config({
    cloud_name:'savishkar',
    api_key:'485787349522969',
    api_secret:'zOTZ3DN66ch5LSY7cqcjf5yVu3E'
})
let multer=require('multer'),
    uuidv4=require('uuidv4'),
    express=require('express')

const DIR='./uploads/poems/';

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
    Poems.find()
    .then(poem=>res.json(poem))
    .catch(err=>res.status(400).json('Error:'+err))
})
router.post('/add',upload.single('content'),(req,res)=>{
     
    /*if (error) {
        console.log(`upload.single error: ${error}`);
        return res.sendStatus(500);
    }*/
    
    /*if(!req.file){
        next();
    }*/
    console.log(req.body.title)
    const url=req.protocol+'://'+req.get('host')
    const title=req.body.title
    const content=url+'/uploads/poems/'+req.file.filename
    const poet=req.body.poet
    const about=req.body.about
    const date=Date(req.body.date)
    
    const newUser=new Poems({title,content,poet,date,about})
    cloudinary.uploader.upload(newUser.content,(err,result)=>{
        if(err){

            res.status(500).json(err)
        }
        else{
            newUser.content=result.url
            newUser.save()
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
router.post('/adduser',(req,res)=>{
    
    const title=req.body.title
    const content=req.body.content
    const poet=req.body.poet
    const about=req.body.about
    const date=Date(req.body.date)

    const newUser=new Poems({title,content,poet,date,about})

    newUser.save()
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

})
router.route('/:id').get((req,res)=>{
    Poems.findById(req.params.id)
    .then(poem=>res.json(poem))
    .catch(err=>res.status(400).json('Error:'+err))
})

router.route('/:id').delete((req,res)=>{
    Poems.findByIdAndDelete(req.params.id)
    .then(()=>res.json('PAINTING DELETED'))
    .catch(err => res.status(400).json('Error:'+err))
})
router.post('/update/:id',upload.single('content'),(req,res)=>{
    Poems.findById(req.params.id)
    const url=req.protocol+'://'+req.get('host')
    .then(poem=>{
        
        poem.title=req.body.title
        poem.content=url+'/uploads/poems/'+req.file.filename
        poem.poet=req.body.poet
        poem.date=Date(req.body.date)
        
        poem.save()
        .then(()=>res.json('update was successful'))
        .catch(err=>res.status(400).json('Error:'+err))


    })
    .catch(err => res.status(400).json('Error:'+err))
    
})

module.exports=router;