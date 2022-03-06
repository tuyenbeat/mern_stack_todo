const express = require('express');
const router = express.Router();
const UserController = require('../Controller/UserController');
const MiddleAuth = require('../Helpers/MiddleAuth');

router.get('/', UserController.activeUser);
router.post('/', UserController.addUser);
router.use(MiddleAuth);
router.patch('/:username', UserController.editUser);
router.delete('/:username', UserController.deleteUser);

module.exports = router;
