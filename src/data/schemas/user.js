const { Schema, model }  = require('mongoose');
const jwt = require('jsonwebtoken');

const secret = "oqjnafasdlknfqwfnrew3gofnwer";

const userSchema = new Schema({
    name:  {type: String, required: true}, 
    email: {type: String},
    password:   String,
});



userSchema.methods.comparePassword = function(password) {
    console.log(password, this.password);
	return password === this.password;
};

// * Method to generate the JWT (You choose the name)
userSchema.methods.generateJWT = function() {
	const today = new Date();
	const expirationDate = new Date();

	expirationDate.setDate(today.getDate() + 60);
	
	let payload = {
		id: this._id,
		name: this.firstName,
		email: this.email
	};
	// * This method is from the json-web-token library (who is in charge to generate the JWT
	return jwt.sign(payload,secret, {
		expiresIn: parseInt(expirationDate.getTime() / 1000, 10)
	});
};


const User = model('user', userSchema);

module.exports = User;