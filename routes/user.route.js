const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

router.get('/', userController.getAll);
router.post('/', userController.createUser);
router.get('/:userId', userController.getUser);
router.put('/:userId', userController.editUser);
router.delete('/:userId', userController.deleteUser);

module.exports = router;
