function siguientePar(n) {
    while (n % 2 !== 0) {
        n++; // Si es impar, seguimos incrementando hasta encontrar el siguiente par
    }
    console.log(n);
}

// Ejemplo de uso:
let numero = 7;
siguientePar(numero);