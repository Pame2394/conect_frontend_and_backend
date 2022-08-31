const mongoose = require("mongoose");

const schemaMascota = mongoose.Schema(
    {
        
        "nombre" : {type: String, required: true },
        "edad" : {type: Number, required: true},
        "raza" : {type: String, required: true},
        "color" : {type: String, required: true},
        "imagen" : {type: String, required: true},
        "sexo" : {type: String, required: true},
        "padecimientos" : {type: String, required: true}
    
    });

    let  modelo = mongoose.model("Mascota", schemaMascota, "mascota");
    module.exports = modelo;

