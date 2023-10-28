const Model1 = require('./Model1');
const Model2 = require('./Model2');
const Model3 = require('./Model3');

Model1.hasMany(Model3, {
    foreignKey: 'keyNumber',
});

Model3.belongsTo(Model2, {
    foreignKey: 'keyNumber'
})

module.exports = { Model1, Model2, Model3 };