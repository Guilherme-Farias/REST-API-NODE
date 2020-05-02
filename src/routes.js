const express = require('express');
const UserController = require('./controllers/UserController');
const AddressesController = require('./controllers/AddressController');
const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/users/:user_id/addresses', AddressesController.index);
routes.post('/users/:user_id/addresses', AddressesController.store);


module.exports = routes;