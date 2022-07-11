const User = require('../models/user');

async function getAll(req, res, next) {
  try {
    const user = await User.find();
    return res.json(user);
  } catch (e) {
    console.log(e.message);
    res.send(e.message);
  }
}

async function createUser(req, res, next) {
  try {
    const newUser = req.body;
    const user = await User.create(newUser);
    return res.json(user);
  } catch (e) {
    console.log(e.message);
    res.send(e.message);
  }
}

async function getUser(req, res, next) {
  try {
    const user = await User.findById(req.params.id);
    return res.json(user);
  } catch (e) {
    console.log(e.message);
    res.send(e.message);
  }
}

module.exports = {createUser, getAll, getUser};
