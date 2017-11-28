const mongoose = require('mongoose');


const labSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    number:{
        type:Number,
        required:true
    },
    labcourseNumber :{
        type:Number,
        required:true
    },

    experiment:{
        type: String,
        required:true
    },
    tutorial: {
        type: String,
        required: false
    },
    prelab: {
        type: String,
        required: false
    }

});

const Lab = module.exports = mongoose.model('Lab', labSchema);

module.exports.getLabById = function(id, callback){
    Lab.findById(id, callback);
};

module.exports.getLabByName = function(name, callback){
    const query = {name:name}
    Lab.findOne(query, callback);
};



module.exports.addLab= function (newLab,callback) {

    newLab.save(callback);

};