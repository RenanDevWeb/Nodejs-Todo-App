const Sequelize = require('sequelize');
const connection = require('../database/database');

const Action = connection.define('actions', {
    action:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    // done:{
    //     type:Sequelize.BOOLEAN,
    //     allowNull: false
    // }
}); 

// Action.sync({force: true});

module.exports = Action;