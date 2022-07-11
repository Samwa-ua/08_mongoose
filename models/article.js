const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: {type: String, required: true, minlength: 5, maxlength: 400, index: 'text'},
  subtitle: {type: String, minlength: 5},
  description: {type: String, minlength: 5, maxlength: 5000, required: true},
  owner: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  category: {type: String, required: true, enum: ['sport', 'games', 'history']},
  createdAt: {type: Date, default: Date.now, require: true},
  updatedAt: {type: Date, default: Date.now, require: true}
});

module.exports = mongoose.model('Article', ArticleSchema);
