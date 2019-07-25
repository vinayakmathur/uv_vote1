const mongoose = require('mongoose');

const emailToValidate = 'a@a.com';
const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

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