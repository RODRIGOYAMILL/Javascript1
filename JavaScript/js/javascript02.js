/*Descripción:ejemplo:
1=Solicitar por la página web un color, imprimir en consola
2= solicitar 2 numeros e imprimir la suma en consola 
Desarrollador:Rodrigo Yamill Rdoriguez Avila
Fecha:2024-04-15
Cambios:ninguno
*/ 
// Solicitar color al usuario y mostrarlo en consola
var color = prompt("Ingresa un color:");
console.log("El color seleccionado es: " + color);

// Solicitar dos números al usuario
var numero1 = parseFloat(prompt("Ingresa el primer número:"));
var numero2 = parseFloat(prompt("Ingresa el segundo número:"));

// Calcular la suma
var suma = numero1 + numero2;

// Mostrar la operación y la suma en la consola
console.log("los numeros sumados son: " + numero1 + " + " + numero2);
console.log("La suma es: " + suma);