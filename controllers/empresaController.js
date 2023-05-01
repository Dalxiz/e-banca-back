var Empresa = require('../models/empresa');

const registro_empresa = async function(req, res){
    let data = req.body;

    let empresas = await Empresa.find({nombre_empresa : data.nombre_empresa});

    console.log(data);

    if(empresas.length >= 1){
        res.status(200).send({data:undefined, message: 'Empresa ya registrada'});
    }else{
        let empresas = await Empresa.create(data);
        res.status(200).send({data:empresas, message: 'Empresa registrada con exito!!'});
    }
}

const empresa_view = async function(req,res){
    let data = req.body;
    let empresas = await Empresa.find({nombre_empresa : data.nombre_empresa});

    if(empresas.length >=1){
        res.status(200).send({data:empresas[0], message: 'menu registrado!!'});
    }else{
        res.status(200).send({data:undefined, message: 'menu no registrado :('});
    }
}

const listar_empresa = async function(req,res){
        let empresas = await Empresa.find();
        
        if(empresas.length >=1){
            console.log(empresas);
            res.status(200).send(empresas);
        }else{
            res.status(200).send({data:undefined, message: 'No existen Empresas :('});
        }
        
    
}


module.exports = {
    registro_empresa,
    empresa_view,
    listar_empresa
}