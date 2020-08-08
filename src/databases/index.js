const {Sequelize} = require('sequelize');

const User = require("../models/UserModel/UserModel");
const Post = require('../models/PostsModel/PostsModel');

const databaseConfig = require('../config/databases');

const models = [User, Post]


const connection = new Sequelize(databaseConfig);

models.forEach((models)=>models.Init(connection))

User.associate(Post)
Post.associate(User)

