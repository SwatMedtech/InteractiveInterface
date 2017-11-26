const express = require('express');
const router = express.Router();

const labCourse = require('../models/lab_course');


router.get('/labCourse',(req,res,next)=> {

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
router.put('/labCourse/:id', (req,res)=>{
    labCourse.getLabCourseById(req.params.id, (err,lab_course)=>{
        lab_course.name = req.body.name;
        lab_course.content = req.body.content;
        lab_course.number = req.body.number;
        lab_course.save((err,updatedLabCourse) => {
            console.log(updatedLabCourse);
            if(err){
                res.json({success:false, msg:'failed to update lab course'});
            }else{
                res.json({success:true, msg:'The Lab Course was successfully updated'});
            }
        });
    });
});
router.delete('/labCourse/:id', (req, res)=>{
   labCourse.getLabCourseById(req.params.id, (err, lab_course)=>{
      lab_course.remove((err)=>{
          if (err) return err;
          else console.log("removed");
      });
   });
});


module.exports=router;