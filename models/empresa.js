var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmpresaSchema = Schema({
    nombre : {type : String, required : true},
    direccion : {type : String, required : true},
    telefono : { type : String, required : true},
    email : {type : String, required : true },
    logo : {type : String, required : true }
});


module.exports = mongoose.model('empresa' , EmpresaSchema);