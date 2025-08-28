// Ejercicio 2: Verificar si un número está en un rango
// Definimos el rango usando constantes.

const RANGO_MINIMO = 10;
const RANGO_MAXIMO = 50;

// Pedimos un número al usuario
let numero = parseInt(prompt("Por favor, ingresa un número:"));

// Verificamos si el número está dentro del rango
if (numero >= RANGO_MINIMO && numero <= RANGO_MAXIMO) {
  alert("El número está en el rango.");
} else {
  alert("El número no está en el rango.");
}