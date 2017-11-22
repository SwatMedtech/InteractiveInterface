const express = require('express');
const router = express.Router();

const tutorial = require('../models/tutorial');

router.post('/tutorial',(req,res,next)=>{
    const newTutorial=new tutorial({
        name:req.body.name,
        content:req.body.content,
        number: req.body.number
    });
    tutorial.addLab(newLabCourse,(err)=>{
        if(err){
            res.json({success:false, msg:'failed to add new lab course !!'});
        }else { res.json({success:true, msg:'success to add new lab course !!'});
        }
    });
});

module.exports=router;