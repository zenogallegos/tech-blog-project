const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

Post.hasMany(Comment, {
  foreignKey: 'id',
});

User.hasMany(Post, {
  foreignKey: 'id'
});

User.hasMany(Comment, {
    foreignKey: 'id'
});

module.exports = { User, Post, Comment };