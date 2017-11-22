const express = require('express');
const router = express.Router();

const tutorial = require('../models/tutorial');


router.get('/tutorial',(req,res,next)=> {

    console.log("boom");
    tutorial.find({}, function (err, tutorials) {
        let s = {};
        i=-1;
        labs.forEach(tutorials =>{
            s[++i] = tuto;
        });
        res.send(s);
    });
});



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