const userModel = require('../Model/UserModel');
const bcrypt = require('bcrypt');
const SendMail = require('../Helpers/SendMail');
const randomstring = require('randomstring');

class userController {
	async activeUser(req, res, next) {
		try {
			const { username, key } = req.query;
			const { keyActive } = await userModel.findOne({ username }, { keyActive: 1, _id: 0 });
			if (keyActive === key) {
				await userModel.findOneAndUpdate({ username }, { isActive: true });
				return res.json({ message: 'auth account success' });
			}
			res.status(403).json({ message: 'register user fail' });
		} catch (error) {
			res.json({ message: error });
		}
	}
	async addUser(req, res, next) {
		try {
			const { username, password, email } = req.body;
			const hashPassword = await bcrypt.hash(password, 10);
			const keyActive = randomstring.generate();
			await userModel.create({ username, password: hashPassword, email, keyActive });
			await SendMail(email, username, keyActive);
			res.json({ message: 'register user success' });
		} catch (error) {}
	}

	editUser(req, res, next) {
		res.send('editUser');
	}

	deleteUser(req, res, next) {
		res.send('deleteUser');
	}
}

module.exports = new userController();
