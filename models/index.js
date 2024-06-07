const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

Comment.belongsTo(Post);
Post.hasMany(Comment);

Post.belongsTo(User);
User.hasMany(Post);

Comment.belongsTo(User);
User.hasMany(Comment);

module.exports = { User, Post, Comment };
