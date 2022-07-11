const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.get('/', userController.getAll);
router.post('/', userController.createUser);
router.get('/:id', userController.getUser);

module.exports = router;
