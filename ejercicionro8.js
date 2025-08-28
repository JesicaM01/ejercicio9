// Ejercicio 8: Clasificar un triángulo

// Pedimos al usuario que ingrese las longitudes de los tres lados.
let lado1 = parseFloat(prompt("Ingresa la longitud del primer lado:"));
let lado2 = parseFloat(prompt("Ingresa la longitud del segundo lado:"));
let lado3 = parseFloat(prompt("Ingresa la longitud del tercer lado:"));

// Verificamos si los valores son válidos y si pueden formar un triángulo.
// La suma de dos lados debe ser siempre mayor que el tercer lado.
if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3) || lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
  alert("Por favor, ingresa longitudes de lados válidas y positivas.");
} else if (lado1 + lado2 <= lado3 || lado1 + lado3 <= lado2 || lado2 + lado3 <= lado1) {
  alert("Las longitudes ingresadas no pueden formar un triángulo.");
} else {
  // Clasificamos el triángulo.
  if (lado1 === lado2 && lado2 === lado3) {
    alert("El triángulo es equilátero.");
  } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    alert("El triángulo es isósceles.");
  } else {
    alert("El triángulo es escaleno.");
  }
}