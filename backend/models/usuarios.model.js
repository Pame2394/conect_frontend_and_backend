const mongoose = require("mongoose");

const schemaUsuario = mongoose.Schema(
    {
        "nombre": {type: String, required: true},
        "correo": {type: String, required: true, unique: true},
        "genero": {type: String, required: true, unique: true},
        "contrasena" : {type: Number, required: false, unique: true}
    
    });

    let  modelo = mongoose.model("Usuario", schemaUsuario, "usuarios");
    module.exports = modelo;