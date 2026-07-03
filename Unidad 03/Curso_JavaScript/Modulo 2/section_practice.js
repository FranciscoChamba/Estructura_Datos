/*
Pregunta 1: Escribe un código que cree variables y las inicialice con valores de Booleano,Número,BigInt,Cadena y tipos indefinidos
utilizando (cuando sea posible) literales y funciones constructoras.
*/

let bolean1 = false;
let bolean2 = Boolean(false);

let num1 = 18;
let num2 = Number(18);

let big1 = 200n;
let big2 = BigInt(400);

let str1 = "How are you?";
let str2 = String("How are you?");

let indef1 = undefined;

/**
 * Pregunta 2: Imprime todos los valores y todos los tipos de esos valores usando registro de consola Intenta usar la interpolación de
 * cadenas para mostrar el valor y el tipo al mismo tiempo con una sola cadena.registro de consola llamar, por ejemplo, en el siguiente
 * formato:1000 [número].
 */

console.log(`${bolean1} [${typeof bolean1}]`);
console.log(`${bolean2} [${typeof bolean2}]`);
console.log(`${num1} [${typeof num1}]`);
console.log(`${num2} [${typeof num2}]`);
console.log(`${big1} [${typeof big1}]`);
console.log(`${big2} [${typeof big2}]`);
console.log(`${str1} [${typeof str1}]`);
console.log(`${str2} [${typeof str2}]`);
console.log(`${indef1} [${typeof indef1}]`);

/**
 * Pregunta 3: Realizar una cadena de conversiones: crear unaBooleanode unBigIntcreado a partir de unNúmeroque fue creado a partir
 * de unCadena. Empiece con el valor"1234". ¿Es posible?
 */

let bo = Boolean( BigInt(Number("1234")));
console.log(`${bo} [${typeof bo}]`);

let sr = "1234";
let nm = Number(sr);
let bg = BigInt(nm);
let bl = Boolean(bg);
console.log(`${bl} [${typeof bl}]`);

// Pregunta 4: Intenta sumar dos valores del mismo tipo y comprueba el tipo resultante. Inténtalo con todos los tipos primitivos.
let boleanSum = true + false;
let numSum = 100 + 200;
let bigSum = 100n + 200n;
let strSum = "He" + "llo";
let indefSum = undefined + undefined;

console.log(`${boleanSum} [${typeof boleanSum}]`);
console.log(`${numSum} [${typeof numSum}]`);
console.log(`${bigSum} [${typeof bigSum}]`);
console.log(`${strSum} [${typeof strSum}]`);
console.log(`${indefSum} [${typeof indefSum}]`);

//Pregunta 5: Intenta sumar dos valores de diferentes tipos y comprueba los resultados.
let bolDiff1 = true + 100; 
let bolDiff2 = true + "100"; 
let numDiff1 = 100 + true;
let numDiff2 = 100 + "200";
let bigDiff1 = 100n + "200"; 
let strDiff1 = "100" + 200;
let strDiff2 = "100" + 200n;
let strDiff3 = "100" + true;
let strDiff4 = "abc" + 200;
let strDiff5 = "abc" + 200n;
let strDiff6 = "abc" + true;

console.log(`${bolDiff1} [${typeof bolDiff1}]`);
console.log(`${bolDiff2} [${typeof bolDiff2}]`);   
console.log(`${numDiff1} [${typeof numDiff1}]`);    
console.log(`${numDiff2} [${typeof numDiff2}]`);    
console.log(`${bigDiff1} [${typeof bigDiff1}]`);
console.log(`${strDiff1} [${typeof strDiff1}]`); 
console.log(`${strDiff2} [${typeof strDiff2}]`);    
console.log(`${strDiff3} [${typeof strDiff3}]`);    
console.log(`${strDiff4} [${typeof strDiff4}]`);    
console.log(`${strDiff5} [${typeof strDiff5}]`);    
console.log(`${strDiff6} [${typeof strDiff6}]`);

//Pregunta 6: Intenta modificar la líneaconst str1 = 42 + "1";para obtener el resultado 43(sin eliminar las comillas alrededor1).
const strResultado = 42 + +"1";
console.log(strResultado);