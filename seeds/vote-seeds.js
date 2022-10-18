const { Vote } = require('../models');

const votedata = [
  {
    comment_id: 1,
    user_id: 1,
  },
  {
    comment_id: 2,
    user_id: 1,
  },
];

const seedVote = () => Vote.bulkCreate(votedata);

module.exports = seedVote;
