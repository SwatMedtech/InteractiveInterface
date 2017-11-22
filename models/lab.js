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
    labcourse :{},

    url:{
        type: String,
        required:true
    },

});

const Lab = module.exports = mongoose.model('Lab', labSchema);

module.exports.getLabById = function(id, callback){
    Lab.findById(id, callback);
};

module.exports.getLabByName = function(name, callback){
    const query = {name:name}
    Lab.findOne(query, callback);
};



module.exports.addLab= function (newTutorial,callback) {

    newTutorial.save(callback);

};