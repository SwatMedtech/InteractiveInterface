const mongoose = require('mongoose');


const tutorialSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    number:{
        type:Number,
        required:true
    },
    labnumber :{},
    labcourse :{
    },

    url:{
        type: String,
        required:true
    },

});

const Tutorial = module.exports = mongoose.model('Tutorial', tutorialSchema);

module.exports.getTutorialById = function(id, callback){
    Tutorial.findById(id, callback);
};

module.exports.getTutorialByName = function(name, callback){
    const query = {name:name}
    Tutorial.findOne(query, callback);
};
module.exports.selectAll = function (callback) {
    tutorialSchema.find();

};
module.exports.addTutorial= function (newTutorial,callback) {

    newTutorial.save(callback);

};