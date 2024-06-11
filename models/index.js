// import models
const Post = require("./Post");
const Comments = require("./Comments");
const User = require("./User");

// define relationships between the models
Comments.belongsTo(Post);
Post.hasMany(Comments);

Post.belongsTo(User);
User.hasMany(Post);

Comments.belongsTo(User);
User.hasMany(Comments);

module.exports = { User, Post, Comments };
