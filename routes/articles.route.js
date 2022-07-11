const express = require('express');
const router = express.Router();

const articleController = require('../controllers/article.controller');

router.get('/', articleController.getArticle);
// router.post('/', articleController.createArticle);
// router.put('/:articleId', articleController.editArticle);
// router.delete('/:articleId', articleController.deleteArticle);

module.exports = router;
