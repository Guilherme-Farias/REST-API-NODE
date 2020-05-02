const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    return res.send({
        mensagem:"Hello world"
    })
});



module.exports = routes;