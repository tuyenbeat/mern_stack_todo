const WorkModel = require('../Model/WorkModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const DecodeToken = require('../Helpers/DecodeToken');

class WorkController {
	async getList(req, res, next) {
		try {
			const data = await WorkModel.find({ userId: DecodeToken(req) });
			res.json(data);
		} catch (error) {
			res.json({ message: error });
		}
	}
	async getCount(req, res, next) {
		try {
			const data = await WorkModel.find({ userId: DecodeToken(req) });
			const count = data.reduce((pre, value) => {
				if(!value.isDelete) return {...pre, [value.type]: pre[value.type] + 1}
				return {...pre, trash: pre.trash + 1}
			}, { '': data.length, todo: 0, inprogress: 0, done: 0, trash: 0 });
			res.json(count)
		} catch (error) {
			res.json({ message: error });
		}
	}
	async addList(req, res, next) {
		try {
			const userId = DecodeToken(req);
			const data = await WorkModel.create({ ...req.body, userId });
			res.json(data);
		} catch (error) {
			res.json({ message: error });
		}
	}
	async deleteList(req, res, next) {
		try {
			const userId = DecodeToken(req);
			const data = await WorkModel.findOneAndUpdate({_id: req.params.id, userId}, {isDelete: true});
			res.json(data);
		} catch (error) {
			res.json({ message: error });
		}
	}
	async editList(req, res, next) {
		try {
			const userId = DecodeToken(req);
			const data = await WorkModel.findOneAndUpdate({_id: req.params.id, userId}, {...req.body});
			res.json(data);
		} catch (error) {
			res.json({ message: error });
		}
	}
}

module.exports = new WorkController();
