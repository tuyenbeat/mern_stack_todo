const express = require('express');
const router = express.Router();
const authController = require('../Controller/AuthController');
const MiddleLogin = require('../Helpers/MiddleLogin');

router.post('/login', MiddleLogin, authController.login);

module.exports = router;
