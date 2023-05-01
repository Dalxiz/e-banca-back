var Menu = require('../models/menu');

const registro_menu = async function(req,res){
    let data = req.body;

    let menus = await Menu.find({nombre : data.nombre});

    console.log(data);

    if (menus.length >= 1) {
        res.status(200).send({data:undefined, message: 'menu ya creado'});
    }else{
        let menus =  await Menu.create(data);
        res.status(200).send({data:menus, message: 'menu registrado correctamente'});
    }
}


const ingreso_menu = async function(req,res){
    let data = req.body;
    let menus = await Menu.find({nombre : data.nombre});

    if(menus.length >=1){
        res.status(200).send({data:menus[0], message: 'menu registrado!!'});
    }else{
        res.status(200).send({data:undefined, message: 'menu no registrado :('});
    }
};

const listar_menu = async function(req,res){
    let menus = await Menu.find();
    if (menus.length >=1) {
        res.status(200).send(menus);
    }else{
        res.status(200).send({data: undefined, message:'No existen menus en BD'});
    }
}

module.exports = {
    ingreso_menu,
    registro_menu,
    listar_menu
}