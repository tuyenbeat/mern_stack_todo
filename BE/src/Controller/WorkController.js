const WorkModel = require('../Model/WorkModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const DecodeToken = require('../Helpers/DecodeToken');

class WorkController {
	async getList(req, res, next) {
		try {
			const data = await WorkModel.find({userId: DecodeToken(req)})
			res.json(data)
		} catch (error) {
			res.json({ message: error });
		}
	}
	async addList(req, res, next) {
		try {
			const userId =  DecodeToken(req)
			const data = await WorkModel.create({...req.body, userId})
			res.json(data)
		} catch (error) {
			res.json({ message: error });
		}
	}
}

module.exports = new WorkController();
