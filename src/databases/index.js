const {Sequelize} = require('sequelize');

const User = require("../models/UserModel/UserModel");

const databaseConfig = require('../config/databases');




const connection = new Sequelize(databaseConfig);

User.Init(connection)


