const mongoose = require('mongoose');

const EXAMSchema = new mongoose.Schema({
    Category: {
        type: String, 
        required: true
    },
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
   
});

module.exports = mongoose.model('Cetegory', EXAMSchema); 