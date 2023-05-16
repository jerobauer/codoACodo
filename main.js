function validarFormulario() {
    var camposConError = [];

    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var telefono = document.getElementById("telefono");
    var email = document.getElementById("email");
    var pais = document.getElementById("pais");
    var ciudad = document.getElementById("ciudad");
    var consulta = document.getElementById("consulta");
    var asunto = document.getElementById("asunto");
    var mensaje = document.getElementById("mensaje");

    if (nombre.value.length > 50 || !/^[\p{L}\s]+$/u.test(nombre.value)) {
        camposConError.push(nombre);
    }

    if (apellido.value.length > 50 || !/^[\p{L}\s]+$/u.test(apellido.value)) {
        camposConError.push(apellido);
    }

    if (telefono.value.length > 50 || telefono.value.length === 0 || isNaN(telefono.value)) {
        camposConError.push(telefono);
    }

    if (email.value.length > 50 || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        camposConError.push(email);
    }

    if (pais.value.length > 0 && (pais.value.length > 50 || !/^[\p{L}\s]+$/u.test(pais.value))) {
        camposConError.push(pais);
    }

    if (ciudad.value.length > 0 && (ciudad.value.length > 50 || !/^[\p{L}\s]+$/u.test(ciudad.value))) {
        camposConError.push(ciudad);
    }

    if (consulta.value === "") {
        camposConError.push(consulta);
    }

    if (asunto.value.length > 50 || asunto.value.length === 0) {
        camposConError.push(asunto);
    }

    if (mensaje.value.length > 1000 || mensaje.value.length === 0) {
        camposConError.push(mensaje);
    }

    if (camposConError.length > 0) {
        var mensajeError = "Por favor, chequee la información ingresada en el/los siguiente/s campo/s: ";

        camposConError.forEach(function (campo, index) {
            campo.style.backgroundColor = "rgb(248, 169, 140)";
            mensajeError += campo.id;

            if (index < camposConError.length - 1) {
                mensajeError += ", ";
            }
        });

        alert(mensajeError);
        return false;
    }

    return true;
}