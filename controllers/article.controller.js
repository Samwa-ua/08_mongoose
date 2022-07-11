const Article = require('../models/article');
const User = require('../models/user');
const utilError = require('../config/errorHelper');

async function getArticle(req, res) {
  try {
    const article = await Article.find();
    return res.json(article);
  } catch (e) {
    console.log(e.messsage);
    res.send(e.messsage);
  }
}
async function createArticle(req, res) {
  try {
    const {owner, article: newArticle} = req.body;
    const user = await User.findOne({_id: owner});
    if (!user) {
      throw utilError.badRequest('Doesn`t exist');
    }
    const article = await Article.create({...newArticle, owner});
    user.numberOfArticles++;
    await user.save();
    return res.json(article);
  } catch (e) {
    console.log(e.messsage);
    res.send(e.messsage);
  }
}
async function deleteArticle(req, res) {
  try {
    console.log(req.params);
    const article = await Article.deleteOne({_id: req.params.articleId});
    return res.json('Article was successfully deleted');
  } catch (e) {
    console.log(e.message);
    res.send(e.message);
  }
}

module.exports = {getArticle, createArticle, deleteArticle};
// module.exports = { getArticle, createArticle, editArticle, deleteArticle };
