const { Model2 } = require('../models');

const model2data = [
  {
    title: 'Blossoming Apricot',
    artist: 'LedyX',
    exhibition_date: 'March 30, 2018',
    gallery_id: 1,
    filename: '01-blossoming-apricot.jpg',
    description:
      'Branches with pink apricot blossoms against a blue background.',
  },
];

const seedModel2 = () => Model2.bulkCreate(model2data);

module.exports = seedModel2;
