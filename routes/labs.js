const express = require('express');
const router = express.Router();

const lab = require('../models/lab');


router.get('/lab',(req,res,next)=> {

    lab.find({}, function (err, labs) {
        let s = [];
        let i=-1;
        labs.forEach(la =>{
            s[++i] = la;
        });
        res.send(s);
    });
});



router.post('/lab',(req,res,next)=>{

    const newLab=new lab ({

        name:req.body.labName,
        number: req.body.labNumber,
        experiment: req.body.experiment,
        preLab: req.body.preLab,
        labCourse: req.body.labCourse,

    });
    lab.addLab(newLab,(err)=>{
        if(err){
            res.json({success:false, msg:'failed to add new lab '});
        }else { res.json({success:true, msg:'A new Lab has been Added Successfully :D !!'});
        }
    });
});


router.put('/lab/:id', (req,res)=>{

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


router.delete('/lab/:id', (req, res)=>{
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