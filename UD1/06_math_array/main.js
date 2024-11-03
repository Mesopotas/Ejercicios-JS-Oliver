const listaNumeros = [10, 5, 8, 3, 15, 7];

function analizarListaNumeros(arrayNumeros) {
    const sumaTotal = arrayNumeros.reduce(function(acumulador, numero) {
        return acumulador + numero;
    }, 0);

    let numeroMaximo = arrayNumeros[0];
    let numeroMinimo = arrayNumeros[0];

    for (let i = 1; i < arrayNumeros.length; i++) {
        if (arrayNumeros[i] > numeroMaximo) {
            numeroMaximo = arrayNumeros[i];
        }
        if (arrayNumeros[i] < numeroMinimo) {
            numeroMinimo = arrayNumeros[i];
        }
    }

    const promedio = sumaTotal / arrayNumeros.length;

    console.log("Suma:", sumaTotal);
    console.log("Número más grande:", numeroMaximo);
    console.log("Número más pequeño:", numeroMinimo);
    console.log("Promedio:", promedio);
}

analizarListaNumeros(listaNumeros);
