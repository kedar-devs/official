const router=require('express').Router();
let Storys=require('../models/story.model');
let multer=require('multer'),
    uuidv4=require('uuidv4'),
    express=require('express')

const DIR='./uploads/stories/';

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
    Storys.find()
    .then(story=>res.json(story))
    .catch(err=>res.status(400).json('Error:'+err))
})
router.post('/add',upload.single('content'),(req,res)=>{
    const url=req.protocol+'://'+req.get('host')
    const title=req.body.title
    const content=url+'/uploads/stories/'+req.file.filename
    const Author=req.body.Author
    const about=req.body.about
    const date=Date(req.body.date)

    const newUser=new Storys({title,content,Author,about,date})

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
router.post('/adduser',(req,res)=>{
    
    const title=req.body.title
    const content=req.body.content
    const Author=req.body.Author
    const about=req.body.about
    const date=Date(req.body.date)

    const newUser=new Poems({title,content,Author,date,about})

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
    Storys.findById(req.params.id)
    .then(story=>res.json(story))
    .catch(err=>res.status(400).json('Error:'+err))
})

router.post('/update/:id',upload.single('content'),(req,res)=>{
    Storys.findById(req.params.id)
    const url=req.protocol+'://'+req.get('host')
    .then(story=>{
        story.title=req.body.title
        story.content=url+'/uploads/stories/'+req.file.filename
        story.Author=req.body.Author
        story.date=Date(req.body.date)

        story.save()
        .then(()=>res.json('updated successfully'))
        .catch(err=>res.status(400).json('Error:'+err))

    })
    .catch(err => res.status(400).json('Error:'+err))

})

router.route('/:id').delete((req,res)=>{
    Storys.findByIdAndDelete(req.params.id)
    .then(()=>res.json('deletion was succuessful'))
    .catch(err => res.status(400).json('Error:'+err))

})

module.exports=router;