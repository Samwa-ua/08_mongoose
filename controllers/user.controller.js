const Article = require('../models/article');
const User = require('../models/user');

async function getAll(req, res) {
  try {
    const user = await User.find();
    return res.json(user);
  } catch (e) {
    console.log(e.message);
    res.send(e.message);
  }
}

async function createUser(req, res) {
  try {
    const newUser = req.body;
    const user = await User.create(newUser);
    return res.json(['User was successfully created', user]);
  } catch (e) {
    console.log(e.message);
    res.send(e.message);
  }
}

async function getUser(req, res) {
  try {
    const user = await User.findById(req.params.userId);
    return res.json(user);
  } catch (e) {
    console.log(e.message);
    res.send(e.message);
  }
}

async function editUser(req, res) {
  try {
    const user = await User.findById(req.params.userId);
    user.set(req.body);
    await user.save();
    return res.json(['User was successfully edited', user]);
  } catch (e) {
    console.log(e.message);
    res.send(e.message);
  }
}
async function deleteUser(req, res) {
  try {
    const {userId} = req.params;
    await Promise.all([User.deleteOne({_id: userId}), Article.deleteMany({owner: userId})]);
    return res.json('User was successfully deleted');
  } catch (e) {
    console.log(e.message);
    res.send(e.message);
  }
}

module.exports = {createUser, getAll, getUser, editUser, deleteUser};
