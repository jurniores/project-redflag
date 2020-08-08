const {Sequelize} = require('sequelize');

const User = require("../models/UserModel/UserModel");
const Post = require('../models/PostsModel/PostsModel');
const Views = require('../models/ViewsModel/ViewsModel');
const databaseConfig = require('../config/databases');

const models = [User, Post, Views]


const connection = new Sequelize(databaseConfig);

models.forEach((models)=>models.Init(connection))

User.associate(Post)
Post.associate({ User,Views })

