const express = require('express');
const route = express.Router();

//meus controles

//users
const userController = require('./src/controllers/userControllers/useController');
const loginController = require('./src/controllers/loginController/loginController');
//posts
const postController = require('./src/controllers/postController/postController')
const requiredLogin = require('./src/middleware/middleware')

//user
route.post('/register', userController.store)
route.put('/register/:id', requiredLogin, userController.updated)


route.post('/login', loginController.login)

//post
route.get('/post', postController.store)

module.exports = route;