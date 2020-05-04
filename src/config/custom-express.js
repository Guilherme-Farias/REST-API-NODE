//configure the app and export to the server.js


const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('../routes');
require('./database');

module.exports = () => {
    const app = express();
    app.use(morgan('dev'))
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    app.use(routes)

    return app;
}