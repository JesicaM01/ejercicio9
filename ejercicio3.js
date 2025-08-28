// Ejercicio 3
// Declaramos las dos variables
let condicion1 = prompt("Escribe el primer valor (true o false):") == "true";
let condicion2 = prompt("Escribe el segundo valor (true o false):") == "true";

// Combinación de las dos
let resultado1 = condicion1 && condicion2;
alert("El resultado de 'ambas son verdaderas' es: " + resultado1);

// Combinación de una u otra
let resultado2 = condicion1 |

| condicion2;
alert("El resultado de 'una de las dos es verdadera' es: " + resultado2);

// Lo contrario al primer valor
let resultado3 =!condicion1;
alert("El resultado de lo 'contrario al primer valor' es: " + resultado3);

// Lo contrario al segundo valor
let resultado4 =!condicion2;
alert("El resultado de lo 'contrario al segundo valor' es: " + resultado4);