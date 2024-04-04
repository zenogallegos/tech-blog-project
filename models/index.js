const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

Comment.belongsTo(Post);
Post.hasMany(Comment);

Post.belongsTo(User);
User.hasMany(Post);

Comment.belongsTo(User)
User.hasMany(Comment);

module.exports = { User, Post, Comment };