const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    host: './dev.sqlite',
})

//To use memory database, uncomment the following:
//const sequelize = new Sequelize('sqlite::memory:');

module.exports = sequelize
