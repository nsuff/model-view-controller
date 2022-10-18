const seedUsers = require('./user-seeds');
const seedPost = require('./post-seeds');
const seedComments = require('./comment-seeds');
const seedVote = require('./vote-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
  await sequelize.sync({ force: true });
  await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
  console.log('----------------------');

  await seedUsers();
  console.log('----------------------');

  await seedPost();
  console.log('----------------------');

  await seedComments();
  console.log('--------------');

  await seedVote();
  console.log('----------------------');


  process.exit(0);
};

seedAll();
