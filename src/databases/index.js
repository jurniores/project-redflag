const {Sequelize} = require('sequelize');

const User = require("../models/userModel");

const databaseConfig = require('../config/databases');




const connection = new Sequelize(databaseConfig);

User.Init(connection)


