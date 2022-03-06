const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkModel = new Schema({
	title: String,
	content: String,
});

module.exports = mongoose.model('list', WorkModel)
