const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'This is a good post',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'This is not a good post.',
    user_id: 2,
    post_id: 1
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;