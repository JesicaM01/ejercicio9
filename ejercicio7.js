// Ejercicio 7: Convertir peso de kilogramos a libras

// Definimos la constante de conversión.
const LIBRAS_POR_KG = 2.20462;

// Pedimos al usuario que ingrese su peso en kilogramos.
let pesoKg = parseFloat(prompt("Ingresa tu peso en kilogramos:"));

// Verificamos si la entrada es un número válido.
if (isNaN(pesoKg) || pesoKg <= 0) {
  alert("Por favor, ingresa un peso válido y mayor que cero.");
} else {
  // Realizamos la conversión.
  let pesoLibras = pesoKg * LIBRAS_POR_KG;

  // Mostramos el resultado con un mensaje, sin redondear.
  alert(pesoKg + " kilogramos equivalen a " + pesoLibras + " libras.");
}