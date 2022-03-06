const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userModel = new Schema({
	username: { type: String },
	password: { type: String },
	email: { type: String },
	isActive: { type: Boolean, default: false},
	keyActive: { type: String },
});

module.exports = mongoose.model('user', userModel)
