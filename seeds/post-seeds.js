const { Post } = require('../models');

const postdata = [
    {
        description: "link for testing 1",
        user_id: 1
    },
    {
        description: "testtttttttttttttttttttttttttttt",
        user_id: 2
    }
]

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;