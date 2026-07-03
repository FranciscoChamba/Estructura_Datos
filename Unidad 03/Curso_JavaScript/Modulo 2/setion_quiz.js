/**
 * Pregunta 1: Juguemos a ser floristas. Declara seis variables, recordando nombrarlas según su propósito:
 * el precio de una sola rosa (8) y el número de rosas que tienes (70)
 * el precio de un solo lirio (10) y el número de lirios que tienes (50)
 * el precio de un solo tulipán (2) y el número de tulipanes que tienes (120)
 * * Ahora declara tres variables, una para cada rosa, lirio y tulipán que tengas, en las que almacenarás su precio total. Inserta los valores
 * correspondientes en las variables usando las variables declaradas en el paso anterior. Finalmente, declara una variable en la que
 * almacenarás el precio de todas tus flores (nuevamente, usa las variables anteriores para la inicialización). Muestra toda la información del
 * inventario en la consola de la siguiente forma:
 */

let unicRose = 8;
let unicLily = 10;
let unicTulip = 2;

let numberOfRoses = 70;
let numberOfLilies = 50;
let numberOfTulips = 120;

let rosesValue = unicRose * numberOfRoses;
let liliesValue = unicLily * numberOfLilies;
let tulipsValue = unicTulip * numberOfTulips;

let total = rosesValue + liliesValue + tulipsValue;

console.log("Rose – unit price:", unicRose, ", quantity:", numberOfRoses, ", value:", rosesValue);
console.log("Lily – unit price:", unicLily, ", quantity:", numberOfLilies, ", value:", liliesValue);
console.log("Tulip – unit price:", unicTulip, ", quantity:", numberOfTulips, ", value:", tulipsValue);
console.log("Total: ", total);

/**
 * Pregunta 2: Modifique el código del ejemplo anterior.
 * Supongamos que los precios de las flores serán constantes (no cambiarán). Declara e inicializa las variables restantes del mismo modo
 * que en el ejemplo anterior. Muestra toda la información recopilada en la consola. Ahora, reduce la cantidad de rosas en 20 y la de lirios
 * en 30
 * Vuelva a mostrar toda la información recopilada en la consola.
 */


const rosePrice = 8;
const lilyPrice = 10;
const tulipPrice = 2;


numberOfRoses = 70;
numberOfLilies = 50;
numberOfTulips = 120;

rosesValue = rosePrice * numberOfRoses;
liliesValue = lilyPrice * numberOfLilies;
tulipsValue = tulipPrice * numberOfTulips;

total = rosesValue + liliesValue + tulipsValue;

console.log("Rose – unit price:", rosePrice, ", quantity:", numberOfRoses, ", value:", rosesValue);
console.log("Lily – unit price:", lilyPrice, ", quantity:", numberOfLilies, ", value:", liliesValue);
console.log("Tulip – unit price:", tulipPrice, ", quantity:", numberOfTulips, ", value:", tulipsValue);
console.log("Total: ", total);


numberOfRoses = numberOfRoses - 20;
numberOfLilies = numberOfLilies - 30;


rosesValue = rosePrice * numberOfRoses;
liliesValue = lilyPrice * numberOfLilies;
tulipsValue = tulipPrice * numberOfTulips;

total = rosesValue + liliesValue + tulipsValue;

console.log("Rose – unit price:", rosePrice, ", quantity:", numberOfRoses, ", value:", rosesValue);
console.log("Lily – unit price:", lilyPrice, ", quantity:", numberOfLilies, ", value:", liliesValue);
console.log("Tulip – unit price:", tulipPrice, ", quantity:", numberOfTulips, ", value:", tulipsValue);
console.log("Total: ", total);