function invertirArreglo(arr, inicio, fin) {
    // Caso Base: Si los índices se cruzan o son iguales, terminamos.
    if (inicio >= fin) {
        return;
    }

    // Caso Recursivo:
    // 1. Realizar el intercambio (usando una variable temporal)
    let temporal = arr[inicio];
    arr[inicio] = arr[fin];
    arr[fin] = temporal;

    // 2. Invocar la recursividad acercando los extremos al centro
    invertirArreglo(arr, inicio + 1, fin - 1);
}

// Casos de prueba para validación
let miLista = [10, 20, 30, 40, 50];
invertirArreglo(miLista, 0, miLista.length - 1);

console.assert(JSON.stringify(miLista) === JSON.stringify([50, 40, 30, 20, 10]), "Error en la inversión del arreglo");
console.log("Ejercicio 2.1 superado.");