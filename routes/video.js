const router=require('express').Router();
let Videos=require('../models/video.model');

router.route('/').get((req,res)=>{
    Videos.find()
    .then(video=>res.json(video))
    .catch(err=>res.status(400).json('Error:'+err))
})
router.post('/add',(req,res)=>{
    const title=req.body.title
    const content=req.body.content
    const creator=req.body.creator
    const date=Date(req.body.date)

    const newUser=new Videos({title,content,creator,date})

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
router.route('/').get((req,res)=>{
    Videos.find()
    .then(video=>res.json(video))
    .catch(err=>res.status(400).json('Error:'+err))
}
)
router.route('/:id').get((req,res)=>{
    Videos.findById(req.params.id)
    .then(video=>res.json(video))
    .catch(err=>res.status(400).json('Error:'+err))
})

router.post('/update/:id',(req,res)=>{
    videos.findById(req.params.id)
    
    .then(video=>{
        video.title=req.body.title
        video.content=req.body.content
        video.creator=req.body.creator
        video.date=Date(req.body.date)

        video.save()
        .then(()=>res.json('updated successfully'))
        .catch(err=>res.status(400).json('Error:'+err))

    })
    .catch(err => res.status(400).json('Error:'+err))

})

router.route('/:id').delete((req,res)=>{
    Videos.findByIdAndDelete(req.params.id)
    .then(()=>res.json('deletion was succuessful'))
    .catch(err => res.status(400).json('Error:'+err))

})
module.exports=router;