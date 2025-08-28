// Ejercicio 6: Verificar edad
const MAYORIA_DE_EDAD = 18;

// Pide al usuario que ingrese su edad.
let edad = parseInt(prompt("Por favor, ingresa tu edad:"));

// Verifica si la edad es un número válido.
if (isNaN(edad)) {
  alert("Por favor, ingresa un número válido.");
} else {
  // Compara la edad con la mayoría de edad.
  if (edad >= MAYORIA_DE_EDAD) {
    alert("Tienes " + edad + " años. ¡Eres mayor de edad!");
  } else {
    alert("Tienes " + edad + " años. Eres menor de edad.");
  }
}