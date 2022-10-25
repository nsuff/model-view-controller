const User = require('./User');
const Vote = require('./Vote');
const Comment = require('./Comment');
const Post = require('./Post');

// create associations
User.hasMany(Post, {
  foreignKey: 'post_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Vote, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Vote.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Comment.hasMany(Vote, {
  foreignKey: 'comment_id',
  onDelete: 'SET NULL'
});

Vote.belongsTo(Comment, {
  foreignKey: 'comment_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
})



module.exports = { User, Post, Vote, Comment };
