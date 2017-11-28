const mongoose = require('mongoose');


const labCourseSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    number:{
        type:Number,
        required:true
    },

    content:{
        type: String,
        required:true
    },

});

const Lab = module.exports = mongoose.model('LabCourse', labCourseSchema);

module.exports.getLabCourseById = function(id, callback){
    Lab.findById(id,callback);
};

module.exports.getUserByName = function(id, callback){
    const query = {_id:id}
    Lab.findOne(query, callback);
};

module.exports.addLab = function (newLabCourse,callback) {

    newLabCourse.save(callback);

};