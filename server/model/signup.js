const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String
    },
    password: {
        type: String
    },
    city: {
        type: String
    },
    address: {
        type: String
    },
    email:{
        type:String
    }
},
);
module.exports = mongoose.model('User', userSchema);