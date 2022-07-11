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

async function filter(req, res) {
  try {
    let article = {};
    const {title, subtitle, description, owner, category, createdAt, updatedAt} = req.query;
    if (req.query === {} || req.query === null) {
      await Article.find().populate('owner');
    } else {
      if (title) {
        article['title'] = title;
      }
      if (subtitle) {
        article['subtitle'] = subtitle;
      }
      if (description) {
        article['description'] = description;
      }
      if (owner) {
        article['owner'] = owner;
      }
      if (category) {
        article['category'] = category;
      }
      if (createdAt) {
        article['createdAt'] = createdAt;
      }
      if (updatedAt) {
        article['updatedAt'] = updatedAt;
      }
      if (title) {
        article['title'] = title;
      }
    }
    const articles = await Article.find(article).populate('owner');
    return res.json(articles);
  } catch (err) {
    console.log(err);
    next(err);
  }
}

async function deleteArticle(req, res) {
  try {
    console.log(req.params);
    await Article.deleteOne({_id: req.params.articleId});
    return res.json('Article was successfully deleted');
  } catch (e) {
    console.log(e.message);
    res.send(e.message);
  }
}

module.exports = {getArticle, createArticle, filter, deleteArticle};
