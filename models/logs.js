var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LogsSchema = Schema({
    usuario : { type : String , required : true},
    estado : { type : String , required : true},
    descripcion : { type : String , required : true},
    createAt : {type: Date, default: Date.now},
    key_info : { type : String , required : true}
});

module.exports = mongoose.model('logs', LogsSchema);