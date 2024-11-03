function tipoTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA <= 0 || ladoB <= 0 || ladoC <= 0) {
        return "Los lados deben ser mayores que cero";
    }

    if (ladoA === ladoB && ladoB === ladoC) {
        return "Equilátero";
    } else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
        return "Isósceles";
    } else {
        return "Escaleno";
    }
}

console.log(tipoTriangulo(1, 2, 3));
console.log(tipoTriangulo(4, 7, 10));
console.log(tipoTriangulo(5, 5, 5));
console.log(tipoTriangulo(5, 5, 7));
console.log(tipoTriangulo(5, 5, -7));
