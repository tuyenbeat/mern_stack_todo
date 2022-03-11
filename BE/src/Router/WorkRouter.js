const express = require('express');
const router = express.Router();
const authMiddle = require('../Helpers/MiddleAuth');
const workController = require('../Controller/WorkController');

router.use(authMiddle);
router.get('/', workController.getList);
router.get('/count', workController.getCount);
router.post('/', workController.addList);
router.put('/:id', workController.editList);
router.delete('/:id', workController.deleteList);

module.exports = router;
