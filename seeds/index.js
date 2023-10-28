const sequelize = require('../config/connection');
const seedModel1 = require('./model1Data');
const seedModel2 = require('./model2Data');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedModel1();

  await seedModel2();

  process.exit(0);
};

seedAll();
