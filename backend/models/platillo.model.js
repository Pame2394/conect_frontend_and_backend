const mongoose = require("mongoose");

const schemaPlatillo = mongoose.Schema(
    {
        "nombre": {type: String, required: true},
        "ingredientes" : {type: String, require : true},
        "precio" : {type : String, require: true}
    
    });

    let  modelo = mongoose.model("Platillo", schemaPlatillo, "Platillos");
    module.exports = modelo;