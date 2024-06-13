const mongoose = require('mongoose');

const placeSchema = mongoose.Schema({
    name:{
        type:String
    },
    city:{
        type:String
    },
    address:{
        type:String
    },
    km:{
        type:String
    }

},
{
    timestamps:true
}

);

module.exports = mongoose.model('place' , placeSchema);