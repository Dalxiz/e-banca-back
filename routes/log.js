var express = require ('express');
var logController = require('../controllers/logController');

var api = express.Router();

api.post('/registro_log', logController.registro_log);
api.post('/log_view', logController.log_view);

module.exports = api;