const inputNombre = document.querySelector('#txt-nombre-plato');
const inputIngredientes = document.getElementById('txt-ingredientes');
const inputPrecio = document.getElementById('txt-precio');
const btnRegistrar = document.getElementById('btn-registrar');

const validar = () => {
    let error = false;

    if (inputNombre.value == '') {
        error = true;
        inputNombre.classList.add('input-error');
    } else {
        inputNombre.classList.remove('input-error');
    }
    if (inputIngredientes.value == '') {
        error = true;
        inputIngredientes.classList.add('input-error');
    } else {
        inputIngredientes.classList.remove('input-error');
    }
    if (inputPrecio.value == '' || inputPrecio.value <= 0) {
        error = true;
        inputPrecio.classList.add('input-error');
    } else {
        inputPrecio.classList.remove('input-error');
    }

    
    /*
        Validaciones de todos los campos:
            1. Validación del correo
                Si el campo de correo esta vacío:
                    - variable error pasa a true
                    - el borde de el campo de correo se pinta de rojo u otro color (menos azul o verde)
                Si no (el campo está lleno):
                    - Asegurarnos de que no este pintado el borde de rojo
            2. Validación del nombre
            3. Validación del género
    */

    //Si hay error (error == true) se muestra un mensaje y no se permite obtener los datos
    //Si no hay error (error == false), entonces se obtienen los datos del formulario 
    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Datos ingresados incorrectamente',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    } else {
        obtenerDatos();
    }

};

const obtenerDatos = () => {
    //Variable de tipo JSON
    let plato = {
        'nombre': inputNombre.value,
        'ingredientes': inputIngredientes.value,
        'precio': inputPrecio.value
    };

    registrarDatos("registrar-plato", plato, "listar-plato.html");
};
console.log(btnRegistrar)
btnRegistrar.addEventListener('click', validar);