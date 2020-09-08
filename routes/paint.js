const router=require('express').Router();
const cloudinary=require('cloudinary').v2;
let Paints=require('../models/paint.model');
let multer=require('multer'),
    uuidv4=require('uuidv4'),
    express=require('express')
cloudinary.config({
    cloud_name:'savishkar',
    api_key:'485787349522969',
    api_secret:'zOTZ3DN66ch5LSY7cqcjf5yVu3E'
})
const DIR='./uploads/painting/';


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
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});
/*var upload=multer({
    storage:GoogleDriveStorage({
        drive:drive,
        parents:'id-parents',
        filename:(req,file,cb)=>{
            let filename=file.originalname.toLowerCase().split(' ').join('-');
            cd(null,uuidv4+'-'+filename);
        }
    }),
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
})*/

router.post('/add',upload.single('content'),(req,res)=>{
    const url=req.protocol+'://'+req.get('host')
    const title=req.body.title
    //const content=url+'/uploads/painting/'+req.file.filename
    var content=url+'/uploads/painting/'+req.file.filename
    //res.send(res.file.filename)
    const painter=req.body.painter
    const date=Date(req.body.date)

    const newUser=new Paints({title,content,painter,date})
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
    /*newUser.save()
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
    })*/

})
router.route('/').get(async(req,res)=>{
    Paints.find()
    .then(paint=>res.json(paint))
    .catch(err=>res.status(400).json('Error:'+err))
})
router.route('/:id').get((req,res)=>{
    Paints.findById(req.params.id)
    .then(paint=>res.json(paint))
    .catch(err=>res.status(400).json('Error:'+err))
})
router.post('/adduser',(req,res)=>{
    console.log(req.body)
    
    const title=req.body.title
    const content=req.body.content
    const painter=req.body.painter
    const date=Date(req.body.date)

    const newUser=new Paints({title,content,painter,date})

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
router.route('/:id').delete((req,res)=>{
    Paints.findByIdAndDelete(req.params.id)
    .then(()=>res.json('PAINTING DELETED'))
    .catch(err => res.status(400).json('Error:'+err))
})
router.post('/update/:id',(req,res)=>{
    Paints.findById(req.params.id)
    const url=req.protocol+'://'+req.get('host')
    .then(paint=>{
        
        paint.title=req.body.title
        paint.content=url+'/uploads/painting/'+req.file.filename
        paint.painter=req.body.painter
        paint.date=Date(req.body.date)
        
        paint.save()
        .then(()=>res.json('update was successful'))
        .catch(err=>res.status(400).json('Error:'+err))


    })
    .catch(err => res.status(400).json('Error:'+err))
    
})
module.exports=router;