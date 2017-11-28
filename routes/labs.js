const express = require('express');
const router = express.Router();

const lab = require('../models/lab');


router.get('/lab',(req,res,next)=> {

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

    const newLab=new lab ({

        name:req.body.name,
        number: req.body.number,
        labcourseNumber: req.body.labcourseNumber,
        experiment: req.body.experiment,
        tutorial: req.body.tutorial,
        prelab: req.body.prelab,

    });

    lab.addLab(newLab,(err)=>{
        if(err){
            res.json({success:false, msg:'failed to add new lab course !!'});
        }else { res.json({success:true, msg:'success to add new lab course !!'});
        }
    });
});


router.put('/lab:id', (req,res)=>{

    lab.getLabById(req.params.id, (err,lab)=>{
        lab.name= req.body.name;
        lab.number = req.body.number;
        lab.labcourseNumber= req.body.labcourseNumber;
        lab.experiment= req.body.experiment;
        lab.tutorial= req.body.tutorial;
        lab.prelab= req.body.prelab;

        lab.save((err,updatedLab) => {
            console.log(updatedLab);
            if(err){
                res.json({success:false, msg:'failed to update lab'});
            }else{
                res.json({success:true, msg:'The Lab was successfully updated'});
            }
        });
    });
});


router.delete('/lab:id', (req, res)=>{
    lab.getLabById(req.params.id, (err, lab)=>{
        lab.remove((err)=>{
            if (err){
                res.json({success:false, msg:'Failed to delete lab'});
            }
            else{
                res.json({success:true, msg:'The Lab was successfully deleted'});
            }
        });
    });
});


module.exports=router;