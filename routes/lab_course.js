const express = require('express');
const router = express.Router();

const labCourse = require('../models/lab_course');

router.get('/labCourse',(req,res,next)=> {

    console.log("boom");
    labCourse.find({}, function (err, labs) {
        let s = {};
        i=-1;
        labs.forEach(lab=>{
            s[++i] = lab;
        });
        res.send(s);
    });
});

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