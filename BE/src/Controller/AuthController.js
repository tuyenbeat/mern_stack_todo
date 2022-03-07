const userModel = require('../Model/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class AuthController {
	async login(req, res, next) {
		try {
			const { username, password } = req.body;
			const data = await userModel.findOne({ username });
			if (!data) throw new Error('username does not exist');
			const isPassword = await bcrypt.compare(password, data.password);
			const token = await jwt.sign({ id: data['_id'] }, process.env.ACCESSTOKEN_KEY, { expiresIn: '15m' });
			if (isPassword)
				return res.json({ message: 'success', data: { accessToken: token, username, email: data.email } });
			res.json({ message: 'fail' });
		} catch (error) {
			res.json({ message: error });
		}
	}
}

module.exports = new AuthController();
