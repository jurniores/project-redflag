const express = require('express');
const route = express.Router();

//meus controles

//users
const userController = require('./src/controllers/userControllers/useController');
const loginController = require('./src/controllers/loginController/loginController');
//posts
const postController = require('./src/controllers/postController/postController');
//views
const viewsController = require('./src/controllers/viewsController/viewsController');
const requiredLogin = require('./src/middleware/middleware');


//user
route.post('/register', userController.store)
route.put('/register/:id', requiredLogin, userController.updated)
//route.get('/register', requiredLogin, userController.index)
route.delete('/register/:id', requiredLogin, userController.delete)




route.post('/login', loginController.login)

//post
route.get('/posts', postController.index)
route.post('/posts', requiredLogin, postController.store)
route.get('/posts/:id', postController.show)
route.delete('/posts/:id', requiredLogin, postController.delete)
route.put('/posts/:id',requiredLogin, postController.updated)
route.get('/search', postController.Search)


//views
route.get('/views',requiredLogin, viewsController.index)
route.post('/views',requiredLogin, viewsController.store)
route.put('/views/:id',requiredLogin, viewsController.updated)
route.delete('/views/:id',requiredLogin, viewsController.delete)
route.get('/views/:id',requiredLogin, viewsController.show)

module.exports = route;