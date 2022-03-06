const userModel = require('../Model/UserModel');
const jwt = require("jsonwebtoken")
const MiddleAuth = async (req, res, next) => {
  try {
    const token = req.headers['authorization'].split(' ')[1]
    const data = await jwt.verify(token, process.env.ACCESSTOKEN_KEY)
    next()
} catch (error) {
    res.json({ message: "token expires" });
  }

}

module.exports = MiddleAuth