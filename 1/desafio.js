
var nombre = "Gloria";
var apellido = "Medina";
var sueldoActual = 20000;
var porcentajeAumento = 25; 


var calculoAumento = (sueldoActual * porcentajeAumento) / 100;


var nuevoSueldo = sueldoActual + calculoAumento;


console.log("Hola, estimad@ " + nombre + " " + apellido);
console.log("En base a su sueldo actual:");
console.log("$" + sueldoActual);
console.log("Ha recibido un aumento del " + porcentajeAumento + "%:");
console.log("$" + calculoAumento);
console.log("y su nuevo sueldo es de: $" + nuevoSueldo);