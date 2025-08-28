// Ejercicio 9: Calcular área y perímetro de un círculo

// Define la constante PI.
const PI = 3.14159;

// Pide al usuario que ingrese el radio del círculo.
let radio = parseFloat(prompt("Ingresa el radio del círculo:"));

// Verifica si la entrada es un número válido y positivo.
if (isNaN(radio) || radio <= 0) {
  alert("Por favor, ingresa un valor de radio válido y positivo.");
} else {
  // Calcula el área.
  let area = PI * radio * radio; // O PI * Math.pow(radio, 2);

  // Calcula el perímetro (circunferencia).
  let perimetro = 2 * PI * radio;

  // Muestra los resultados.
   alert(` El area del circulo es: ${area.toFixed(2)}`);
   alert(` El perimetro del circulo es: ${perimetro.toFixed(2)}`);
}