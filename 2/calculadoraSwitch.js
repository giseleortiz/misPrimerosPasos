let valor1 = 10;
let valor2 = 5;
let operacion = "sumar"; 

let resultado;

switch (operacion) {
  case "sumar":
    resultado = valor1 + valor2;
    console.log(`El resultado de sumar ${valor1} + ${valor2} es ${resultado}`);
    break;
  case "restar":
    resultado = valor1 - valor2;
    console.log(`El resultado de restar ${valor1} - ${valor2} es ${resultado}`);
    break;
  case "multiplicar":
    resultado = valor1 * valor2;
    console.log(`El resultado de multiplicar ${valor1} * ${valor2} es ${resultado}`);
    break;
  case "dividir":
    if (valor2 !== 0) {
      resultado = valor1 / valor2;
      console.log(`El resultado de dividir ${valor1} / ${valor2} es ${resultado}`);
    } else {
      console.log("No se puede dividir entre cero.");
    }
    break;
  default:
    console.log("Las operaciones aceptadas son: sumar - restar - multiplicar - dividir");
    break;
}