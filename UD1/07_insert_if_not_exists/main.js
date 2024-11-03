function insertarSiNoExiste(lista, elemento, posicion) {
    // Si el elemento se encuentra en la lista, retorna la lista sin cambios
    if (!lista.includes(elemento)) {
        // Si la posición es true, inserta al inicio; si es false, inserta al final
        if (posicion) {
            lista.unshift(elemento);
        } else {
            lista.push(elemento);
        }
    }
    return lista;
}

// Lista de elementos
let listaFrutas = ['pera', 'manzana'];
insertarSiNoExiste(listaFrutas, 'pera', false);
insertarSiNoExiste(listaFrutas, 'melón', false);
insertarSiNoExiste(listaFrutas, 'melocotón', true);

// Imprime la lista
console.log(listaFrutas);

insertarSiNoExiste();
