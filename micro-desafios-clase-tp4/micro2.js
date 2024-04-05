let pagoMes = +process.argv[2];
let consumoKWH = +process.argv[3];

let mensaje =
  consumoKWH > 300
    ? `Debido a que su hogar tuvo un consumo de ${consumoKWH}kwh, en base al ajuste tarifario
(hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%),
cumplimos con informarle que se ha ajustado el total a pagar, que será de $${pagoMes + (pagoMes * 20 / 100)}`
    : `Se mantiene el subsidio, es decir no tendrá ningún aumento`;

console.log(mensaje)