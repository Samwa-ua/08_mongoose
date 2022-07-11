const express = require('express');
const router = express.Router();

const articleController = require('../controllers/article.controller');

router.post('/', articleController.createArticle);
router.get('/', articleController.filter);
router.get('/', articleController.getArticle);
router.delete('/:articleId', articleController.deleteArticle);

module.exports = router;
