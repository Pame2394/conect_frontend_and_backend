const express = require('express'); //Importamos la dependencia express que permite atender peticiones (req) y devolver respuestas (res)
const router = express.Router();
const Usuario = require('../models/mascota.model');

router.post('/registrar-mascota', (req, res) => {
    //Obtener los datos que vienen en el cuerpo de la petición
    //let nombre = req.body.nombre;
    //let correo = req.body.correo;
    //let genero = req.body.genero;

    let mascotaNuevo = new Usuario({
        "nombre" : req.body.nombre,
        "edad" : req.body.edad,
        "raza" : req.body.raza,
        "color" : req.body.color,
        "imagen" : req.body.imagen,
        "sexo" : req.body.sexo,
        "padecimientos": req.body.padecimientos
        
    });

    mascotaNuevo.save(error => {
        if (error) {
            res.json({
                "msj": "El usuario no se pudo registrar",
                error
                

            }); 

        } else {
            res.json({
                "msj": "Usuario registrado correctamente"
            });
        }
    });

});

router.get('/mascotas-listar', (req, res) => {
    Usuario.find((error, lista) => {
        if (error) {
            res.json({
                "msj": "Los usuarios no se pudieron listar",
                error
            });
        } else {
            res.json({
                "msj": "Usuarios listado correctamente",
                lista
            });
        }
    });
});


module.exports = router;
//Siempre debe ir al final, si no se coloca da el siguiente error: "throw new TypeError('Router.use() requires a middleware function but got a ' + gettype(fn))"