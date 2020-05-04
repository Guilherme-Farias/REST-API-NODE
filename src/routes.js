const express = require('express');
const UserController = require('./controllers/UserController');
const AddressesController = require('./controllers/AddressController');
const TechsController = require('./controllers/TechController');
const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/users/:user_id/addresses', AddressesController.index);
routes.post('/users/:user_id/addresses', AddressesController.store);

routes.get('/users/:user_id/techs', TechsController.index);
routes.post('/users/:user_id/techs', TechsController.store);
routes.delete('/users/:user_id/techs', TechsController.delete);

module.exports = routes;