const mongoose = require('mongoose');


const experimentSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    number:{
        type:Number,
        required:true
    },
    labnumber :{},
    labcourse :{},

    url:{
        type: String,
        required:true
    },

});

const Experiment = module.exports = mongoose.model('Experiment', experimentSchema);

module.exports.getExperimentById = function(id, callback){
    Experiment.findById(id, callback);
};

module.exports.getExperimentByName = function(name, callback){
    const query = {name:name}
    Experiment.findOne(query, callback);
};



module.exports.addExperiment= function (newExperiment,callback) {

    newExperiment.save(callback);

};