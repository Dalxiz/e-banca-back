var express = require ('express');
var mongoose = require ('mongoose');
var bodyparser = require ('body-parser');
var port = process.env.port || 4201

var app = express();

var usuario_router = require('./routes/usuario');
var menu_router = require('./routes/menu');
var menu_log = require('./routes/log');
var empresa = require('./routes/empresa');

app.use(bodyparser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyparser.json({limit: '50mb', extended: true}));

mongoose.connect('mongodb://127.0.0.1:27017/db_banca', (err,res)=>{
if (err) {
    console.log(err)
} else {
    app.listen(port, function(){
        console.log('******* bd conectada *********');
        console.log('Servidor Iniciado ' + port);
    });
} 
});

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*'); 
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, OPTIONS');
    res.header('Allow','GET, PUT, POST, DELETE, OPTIONS');
    next();
});

app.use('/api', usuario_router);
app.use('/list_menu', menu_router);
app.use('/res_log', menu_log);
app.use('/res_empresa', empresa);


module.exports = app;
