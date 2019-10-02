const db = require('../db');
const Sequelize = require('sequelize');

const User = db.define('user', {
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        field: 'userName'
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        field: 'password'
    }
})


module.exports = User;