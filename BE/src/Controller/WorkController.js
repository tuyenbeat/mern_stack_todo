const WorkModel = require('../Model/WorkModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class WorkController {
	async getList(req, res, next) {
		try {
			const data = await WorkModel.find({})
			res.json({message: "get list work", data})
		} catch (error) {
			res.json({ message: error });
		}
	}
}

module.exports = new WorkController();
