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
        res.json(s);
    });
});

router.post('/labCourse',(req,res,next)=>{
    console.log(req.body);
    const newLabCourse=new labCourse({
        name:req.body.labName,
        content:req.body.description,
        number: req.body.number
    });
    labCourse.addLab(newLabCourse,(err)=>{
        if(err){
            console.log(err);
            res.json({success:false, msg:'failed to add new lab course !!'});
        }else { res.json({success:true, msg:'success to add new lab course !!'});
        }
    });
});



module.exports=router;