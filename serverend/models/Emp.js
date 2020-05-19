const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    // myapp: {
    //     type: mongoose.SchemaTypes.ObjectId,
    //     ref:'myapp'
    // },
    empid:{
        type:String
    },
    name: {
        type: String,
    },
    age: {
        type: String
    },
    email: {
        type: String
        
    },
    address: {
        type: String
        
    },
    mobile: {
        type: Number
        
    },
    password:{
        type:String
    }
});

module.exports = UserEmp = mongoose.model('myappEmp', UserSchema);