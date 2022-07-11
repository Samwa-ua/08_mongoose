const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserShema = new Schema({
  firstName: {type: String, required: true, minlength: 4, maxlength: 50},
  lastName: {type: String, required: true, minlength: 3, maxlength: 60},
  roles: [
    {type: String, role: 'admin'},
    {type: String, role: 'writer'},
    {type: String, role: 'guest'}
  ],
  createdAt: {type: Date, default: Date.now},
  numberOfArticles: {type: Number, default: 0},
  nickname: {type: String, default: 0}
});

module.exports = mongoose.model('User', UserShema);
