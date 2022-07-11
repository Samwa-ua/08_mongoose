const Article = require('../models/article');

async function getArticle(req, res) {
  const article = await Article.find();
  return res.json(article);
}

module.exports = {getArticle};
// module.exports = { getArticle, createArticle, editArticle, deleteArticle };
