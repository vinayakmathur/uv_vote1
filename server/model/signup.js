const mongoose = require('mongoose');


console.log(emailRegexp.test(emailToValidate));
const userSchema = mongoose.Schema({
    name: {
        type: String
    },
    email:{
        type:String
    },
    password: {
        type: String
    },
    
    address: {
        type: String
    },
    city: {
        type: String
    },
    
},
);
module.exports = mongoose.model('users', userSchema);