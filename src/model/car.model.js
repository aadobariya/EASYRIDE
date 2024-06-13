const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
   Name:{
    type:String
   },
   features:{
    type:String
   },
   location:{
    type:String
   }
});

module.exports = mongoose.model('cars' , carSchema);