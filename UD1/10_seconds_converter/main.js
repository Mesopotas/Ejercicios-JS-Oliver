function convertirATiempoCompleto(segundosTotales) {
    let horas = Math.floor(segundosTotales / 3600);
    let minutos = Math.floor((segundosTotales % 3600) / 60);
    let segundosRestantes = segundosTotales % 60;

    console.log(`${horas} horas, ${minutos} minutos, ${segundosRestantes} segundos`);
}

let segundosIniciales = 7265;
convertirATiempoCompleto(segundosIniciales);
