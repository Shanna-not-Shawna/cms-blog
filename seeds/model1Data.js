const { Model1 } = require('../models');

const model1data = [
  {
    name: 'Printemps',
    starting_date: 'April 20, 2021 07:00:00',
    ending_date: 'June 21, 2021 17:00:00',
  }
];

const seedModel1 = () => Model1.bulkCreate(model1data);

module.exports = seedModel1;
