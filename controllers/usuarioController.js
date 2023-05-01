var Usuario = require('../models/usuario');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('../helpers/jwt');

const registro_usuario_admin = async function(req,res){
    if (req.user) {
        let data = req.body;

        let usuarios = await Usuario.find({email : data.email});

        if (usuarios.length >= 1) {
            res.status(200).send({data: undefined, message:'correo electronico ya existe'});
        }else{
            bcrypt.hash('123456', null, null, async function(err,hash){
                if(err){
                    res.status(200).send({data: undefined, message:'contraseña no se pudo encryptar'});
                }else{
                    console.log(hash);
        
                    data.password = hash;
                    let usuario = await Usuario.create(data);
                    res.status(200).send({data: usuario});            
                }
            });   
        }   
        
    } else {
        res.status(500).send({data: undefined, message:'ErrorTokens'});
    } 
}

const login_usuario = async function(req,res){
    var data = req.body;
    var usuarios = await Usuario.find({email: data.email});
    
    if(usuarios.length >=1){
        bcrypt.compare(data.password, usuarios[0].password, async function(err, check){

            //crear for con la validacion de 3 contraseñas
            if(check){
                if (!usuarios.rol) {
                    res.status(200).send({
                        token:jwt.createToken(usuarios[0]),
                        usuario:usuarios[0]});
                }else{
                    res.status(200).send({data: undefined, message:'Usuario bloqueado'});
                }
            }else{                
                res.status(200).send({data: undefined, message:'Contraseña incorrecta'});
            }
        });
    }else{
        res.status(200).send({data: undefined, message:'Correo no encontrado'});
    }
}

const listar_usuario_admin = async function(req,res){
    if(req.user){
        let usuarios = await Usuario.find();
        res.status(200).send(usuarios);
    }else{
        res.status(500).send({data: undefined, message:'ErrorTokens'});
    }
}

module.exports = {
    registro_usuario_admin,
    login_usuario,
    listar_usuario_admin
}