const { Schema, model }  = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const secret = "oqjnafasdlknfqwfnrew3gofnwer";

const userSchema = new Schema({
    name:  {type: String, required: true}, 
    email: {type: String},
    password:   String,
});

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
		console.log(this.password);
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
		console.log(this.password);
    }
    next();
});

userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
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