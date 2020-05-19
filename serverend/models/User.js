const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    // myapps: {
    //     type: mongoose.SchemaTypes.ObjectId
    // },
    empid: {
        type: String,
        required:true,
        unique:true
    },
    name: {
        type: String
    },
    password: {
        type: String
        
    }
});

module.exports = User = mongoose.model('myapp', UserSchema);