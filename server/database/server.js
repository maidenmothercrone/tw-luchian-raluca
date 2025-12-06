const {Sequelize} = require('sequelize');
const models = require('./models');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database/db.sqlite',
    logging: false

})

sequelize.sync()
.then(() => {
    console.log('Database & tables created!');
})
.catch((err) => {
    console.error('Unable to create tables, shutting down...', err);
})

module.exports = {sequelize, models};