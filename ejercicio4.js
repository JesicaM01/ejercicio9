// Ejercicio 4: Verificar tu nombre

// Declara la variable 'nombre'.
let nombre;

// Pide al usuario que ingrese su nombre.
nombre = prompt("Por favor, ingresa tu nombre:");

// Reemplaza 'tu_nombre' con tu nombre real para la verificación.
const MI_NOMBRE = "jesica"; 

// Verifica si el nombre ingresado es igual a 'tu_nombre'.
if (nombre === MI_NOMBRE) {
  alert("¡Hola, " + MI_NOMBRE + "! ¡Ese es mi nombre también!");
} else {
  alert("Hola, " + nombre + ". No tenemos el mismo nombre.");
}