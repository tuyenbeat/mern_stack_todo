const userModel = require('../Model/UserModel');

const MiddleLogin = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const {isActive} = await userModel.findOne({ username }, { isActive: 1, _id: 0 });
    if(!isActive) return res.status(403).json({ message: 'Unauthenticated account, Please check your email again'})
    next()
} catch (error) {
    res.json({ message: error });
  }

}

module.exports = MiddleLogin