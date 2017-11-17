const express = require('express');
const router = express.Router();

const tutorial = require('./tutori');

router.post('/labCourse',(req,res,next)=>{
    const newLabCourse=new labCourse({
        name:req.body.name,
        content:req.body.content,
        number: req.body.number
    });
    labCourse.addLab(newLabCourse,(err)=>{
        if(err){
            res.json({success:false, msg:'failed to add new lab course !!'});
        }else { res.json({success:true, msg:'success to add new lab course !!'});
        }
    });
});

module.exports=router;