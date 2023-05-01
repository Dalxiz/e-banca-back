var Log = require('../models/logs');


const registro_log = async function(req,res){
    let data = req.body;

    let logs = await Log.find({usuario: data.key_info});

    console.log(data);

    if(logs.length >= 1){
        res.status(200).send({data:undefined, message: 'log no registrado'});
    }else{
        let log = await Log.create(data);
        res.status(200).send({data: log, message: 'Log registrado'});
    }
}


const log_view = async function(req,res){
    var data = req.body;
    var logs = await Log.find({usuario: data.usuario});
    if(logs.length >= 1){
        res.status(200).send({data: logs, message: 'logs encontrado'});
    }else{
        res.status(200).send({data: logs, message: 'log no encontrado'});
    }
}


module.exports = {
    registro_log,
    log_view
}