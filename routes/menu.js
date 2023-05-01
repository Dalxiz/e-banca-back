var express = require ('express');
var menuController = require('../controllers/menuController');

var api = express.Router();

api.post('/menus', menuController.registro_menu);
api.post('/ingreso_menu', menuController.ingreso_menu);
api.get('/listar_menu', menuController.listar_menu);

module.exports = api;
