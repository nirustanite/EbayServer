const db = require('../db');
const Sequelize = require('sequelize');

const User = db.define('user', {
    firstName:{
        type:Sequelize.STRING,
        allowNull:false
    },
    lastName:{
        type:Sequelize.STRING,
        allowNull:false
    },
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