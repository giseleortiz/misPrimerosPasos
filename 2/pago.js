let pagoMes = 12000; 
let consumoKWH = 450; 


let totalAPagar = consumoKWH > 300 ? pagoMes * 1.2 : pagoMes;


let mensaje = `Debido a que su hogar tuvo un consumo de ${consumoKWH}kWh, en base al ajuste tarifario (hogares con consumo mayor a 300kWh por mes tendrán un aumento del 20%), cumplimos con informarle que se ha ajustado el total a pagar, que será de $${totalAPagar}`;

console.log(mensaje);