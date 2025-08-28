// Pide al usuario que ingrese tres números.
let numero1 = parseInt(prompt("Ingresa el primer número:"));
let numero2 = parseInt(prompt("Ingresa el segundo número:"));
let numero3 = parseInt(prompt("Ingresa el tercer número:"));

// Usa una estructura if-else if-else para comparar los números.
let mayor;

if (numero1 >= numero2 && numero1 >= numero3) {
  mayor = numero1;
} else if (numero2 >= numero1 && numero2 >= numero3) {
  mayor = numero2;
} else {
  mayor = numero3;
}

// Muestra el resultado.
alert("El número mayor es: " + mayor);