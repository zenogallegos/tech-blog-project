const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

User.hasMany(Post, {
  foreignKey: 'created_by'
});

User.hasMany(Comment, {
    foreignKey: 'created_by'
});

module.exports = { User, Post, Comment };