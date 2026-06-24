function sumaDigitos(n) {
// TODO: Implementar el Caso Base

// Si el numero tiene un solo digitos (menor a 10) la suma de sus digitos es la misma 
if (n < 10){
    return n
}

// TODO: Implementar el Caso Recursivo
// Se usa el modulo %10 para obtener el ultimo digito despues se 
//suma ese resultado mas el resultado de la funcion con Math.floor(n / 10) 
//que redondea un número hacia abajo al entero más grande menor o igual al número dado.
return (n % 10) + sumaDigitos(Math.floor(n/10))

//
}

// Casos de prueba para validación console.assert(sumaDigitos(1243) === 10, "Error en sumaDigitos(1243)");
console.assert(sumaDigitos(0) === 0, "Error en sumaDigitos(0)"); console.assert(sumaDigitos(9) === 9, "Error en sumaDigitos(9)"); console.log("Ejercicio 1.1 superado.");