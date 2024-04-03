
var nombre = "Gisele";
var apellido = "Ortiz";
var sueldoActual = 25000; 


var porcentajeAumento;

if (sueldoActual < 33000) {
  porcentajeAumento = 20;
} else {
  porcentajeAumento = 15;
}


var nuevoSueldo = sueldoActual + (sueldoActual * porcentajeAumento) / 100;


console.log("Nombre del trabajador: " + nombre);
console.log("Apellido del trabajador: " + apellido);
console.log("Sueldo actual del trabajador: $" + sueldoActual);
console.log("Porcentaje de aumento otorgado: " + porcentajeAumento + "%");
console.log("Su nuevo sueldo es: $" + nuevoSueldo);