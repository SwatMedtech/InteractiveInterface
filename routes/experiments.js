const express = require('express');
const router = express.Router();

const experiment = require('../models/tutorial');


router.get('/experiment',(req,res,next)=> {

    console.log("boom");
    experiment.find({}, function (err, experiments) {
        let s = {};
        i=-1;
        tutorials.forEach(exp =>{
            s[++i] = exp;
        });
        res.send(s);
    });
});



router.post('/experiment',(req,res,next)=>{
    const newExperiment=new experiment({
        name:req.body.name,
        content:req.body.content,
        number: req.body.number
    });
    experiment.addExperiment(newExperiment,(err)=>{
        if(err){
            res.json({success:false, msg:'failed to add new lab course !!'});
        }else { res.json({success:true, msg:'success to add new lab course !!'});
        }
    });
});

module.exports=router;