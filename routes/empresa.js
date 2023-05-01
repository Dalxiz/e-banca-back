var express = require('express');
var empresaController = require('../controllers/empresaController');

var api = express.Router();

api.post('/registro_empresa', empresaController.registro_empresa);
api.post('/empresa_view', empresaController.empresa_view);
api.get('/listar_empresa', empresaController.listar_empresa);

module.exports = api;