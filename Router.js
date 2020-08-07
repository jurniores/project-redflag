const express = require('express');
const route = express.Router();

//meus modulos
const userController = require('./src/controllers/userControllers/useController');
const loginController = require('./src/controllers/loginController/loginController');
const requiredLogin = require('./src/middleware/middleware')

//user
route.post('/register', userController.store)
route.put('/register/:id', requiredLogin, userController.updated)
//route.delete('/cadastro', userController.delete)

route.post('/login', loginController.login)

module.exports = route;