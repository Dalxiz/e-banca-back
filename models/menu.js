var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MenuSchema = Schema({
    nombre : { type : String , required : true},
    patch : { type : String , required : true},
    icon : { type : String , required : true},
    estado : {type: Boolean,default : true, required: true}
});

module.exports = mongoose.model('menu', MenuSchema);