const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {

    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
});

const Todo = sequelize.define('Todo', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
},
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
},
});

module.exports = Todo;
