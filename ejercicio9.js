// Ejercicio 1: Comparar dos números

// Pedimos al usuario que ingrese dos números.
// Usamos parseInt() para asegurarnos de que sean números enteros.
let numero1 = parseInt(prompt("Escribe el primer número:"));
let numero2 = parseInt(prompt("Ahora, escribe el segundo número:"));

// Usamos una estructura simple para comparar los números.
if (numero1 > numero2) {
  alert("El primer número es mayor.");
} else {
  // Si la primera condición no se cumple, solo quedan dos opciones:
  // que el segundo número sea mayor o que sean iguales.
  if (numero2 > numero1) {
    alert("El segundo número es mayor.");
  } else {
    alert("Ambos números son iguales.");
  }
}