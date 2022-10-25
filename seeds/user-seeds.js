const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
    {
        username: 'test',
        email: 'test@gmail.com',
        password: 'test'
    },
    {
        username: 'TestUser',
        email: 'user@user.org',
        password: 'TestPassword'
    }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;