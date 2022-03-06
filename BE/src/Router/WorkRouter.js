const express = require('express');
const router = express.Router();
const authMiddle = require('../Helpers/MiddleAuth');
const workController = require('../Controller/WorkController');

router.use(authMiddle);
router.get('/', workController.getList);

module.exports = router;
