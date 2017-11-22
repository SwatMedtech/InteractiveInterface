const express = require('express');
const router = express.Router();

const lab = require('../models/lab');


router.get('/lab',(req,res,next)=> {

    console.log("boom");
    lab.find({}, function (err, labs) {
        let s = {};
        i=-1;
        labs.forEach(la =>{
            s[++i] = la;
        });
        res.send(s);
    });
});



router.post('/lab',(req,res,next)=>{
    const newLab=new lab({
        name:req.body.name,
        content:req.body.content,
        number: req.body.number
    });
    lab.addLab(newLab,(err)=>{
        if(err){
            res.json({success:false, msg:'failed to add new lab course !!'});
        }else { res.json({success:true, msg:'success to add new lab course !!'});
        }
    });
});

module.exports=router;