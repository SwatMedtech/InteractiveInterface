const mongoose = require('mongoose');
var Schema = mongoose.Schema;

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
    labs:[{ type: Schema.Types.ObjectId, ref: 'Lab' }]

});

const Lab = module.exports = mongoose.model('LabCourse', labCourseSchema);

module.exports.getLabCourseById = function(id, callback){
    Lab.findById(id,callback);
};


module.exports.addLab = function (newLabCourse,callback) {

    newLabCourse.save(callback);

};