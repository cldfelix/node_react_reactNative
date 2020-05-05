const express = require('express');

const sessionController = require('./controllers/sessionController');

const categoriesController = require('./controllers/categoriesController');
const productsController = require('./controllers/productsController');
const usersController = require('./controllers/usersController');
const routes = express.Router();


routes.post('/session', sessionController.create);


routes.get('/categories', categoriesController.index);
routes.post('/categories', categoriesController.create);

routes.get('/products', productsController.index);
routes.post('/products', productsController.create);
routes.get('/products/:id', productsController.getById);
routes.delete('/products/:id', productsController.delete);


routes.get('/users', usersController.index);
routes.post('/users', usersController.create);


module.exports = routes;            