window.addEventListener("load", function() {
    // Referencias a los elementos del formulario
    const botonEnviar = document.getElementById("submit");
    const checkCondiciones = document.getElementById("condiciones");
    const checkPrivacidad = document.getElementById("privacidad");
    const radioOpcionSi = document.getElementById("pregunta_si");
    const radioOpcionNo = document.getElementById("pregunta_no");
    const selectorOpciones = document.getElementById("opciones");
    const inputNombre = document.forms["main_form"]["name"];
    const inputApellidos = document.forms["main_form"]["surname"];
    const inputDescripcion = document.forms["main_form"]["description"];

    botonEnviar.disabled = true;
    selectorOpciones.disabled = true;

    // FUNCIONES
    function actualizarEstadoBotonEnviar() {
        botonEnviar.disabled = !(checkCondiciones.checked && checkPrivacidad.checked);
    }

    // El selector de opciones solo estará habilitado si se selecciona "sí" en el primer radio
    function actualizarEstadoSelector() {
        selectorOpciones.disabled = !radioOpcionSi.checked;
    }

    function validarFormulario(evento) {
        const nombre = inputNombre.value.trim();
        const apellidos = inputApellidos.value.trim();

        // Implementar algún mecanismo para prevenir el doble envío
        if (nombre === "" || apellidos === "") {
            alert("Por favor, rellena los campos de Nombre y Apellidos.");
            evento.preventDefault();
            return;
        }

        botonEnviar.disabled = true;
    }

    // Limitar el tamaño máximo de la descripción a 80 caracteres
    inputDescripcion.addEventListener("input", function() {
        if (inputDescripcion.value.length > 80) {
            inputDescripcion.value = inputDescripcion.value.slice(0, 80);
            alert("La descripción no puede superar los 80 caracteres.");
        }
    });

    // Asignar eventos
    checkCondiciones.addEventListener("change", actualizarEstadoBotonEnviar);
    checkPrivacidad.addEventListener("change", actualizarEstadoBotonEnviar);
    radioOpcionSi.addEventListener("change", actualizarEstadoSelector);
    radioOpcionNo.addEventListener("change", actualizarEstadoSelector);

    botonEnviar.addEventListener("click", function(evento) {
        validarFormulario(evento);
    });
});
