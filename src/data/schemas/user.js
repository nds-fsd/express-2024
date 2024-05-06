const { Schema, model }  = require('mongoose');

const userSchema = new Schema({
    name:  {type: String, required: true}, 
    email: {type: String},
    password:   String,
});


const User = model('user', userSchema);

module.exports = User;