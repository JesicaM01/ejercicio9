// Ejercicio 10: Mostrar el día de la semana

// Pide al usuario que ingrese un número del 1 al 7.
let numero = parseInt(prompt("Ingresa un número del 1 al 7:"));

// Verifica si el número es válido y muestra el día de la semana correspondiente.
if (numero >= 1 && numero <= 7) {
  let dia;
  if (numero === 1) {
    dia = "Lunes";
  } else if (numero === 2) {
    dia = "Martes";
  } else if (numero === 3) {
    dia = "Miércoles";
  } else if (numero === 4) {
    dia = "Jueves";
  } else if (numero === 5) {
    dia = "Viernes";
  } else if (numero === 6) {
    dia = "Sábado";
  } else if (numero === 7) {
    dia = "Domingo";
  }
  alert("El día correspondiente es: " + dia);
} else {
  alert("El número ingresado no es válido. Por favor, ingresa un número del 1 al 7.");
}