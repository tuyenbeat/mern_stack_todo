const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkModel = new Schema({
	title: String,
	content: String,
	userId: String,
	deleteAt: {type: Date, default: Date.now()},
	type: String,
	isDelete: {type: Boolean, default: false}
}, {timestamps: true});

module.exports = mongoose.model('list', WorkModel)
