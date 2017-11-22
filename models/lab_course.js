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

const Lab = module.exports = mongoose.model('Lab', labCourseSchema);

module.exports.getUserById = function(id, callback){
    Lab.findById(id, callback);
};

module.exports.getUserByName = function(name, callback){
    const query = {name:name}
    Lab.findOne(query, callback);
};

module.exports.addLab = function (newLab,callback) {

    newLab.save(callback);

};