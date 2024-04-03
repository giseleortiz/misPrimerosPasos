const operacionesBancarias = [10000, -2000, 8000, -5000, 6000];


function calcularSaldos(operaciones) {
  let saldoDepositos = 0;
  let saldoRetiros = 0;
  
  for (let i = 0; i < operaciones.length; i++) {
    if (operaciones[i] > 0) {
      saldoDepositos += operaciones[i];
    } else {
      saldoRetiros += operaciones[i];
    }
  }
  
  const saldoActual = saldoDepositos + saldoRetiros;
  
  return {
    saldoDepositos,
    saldoRetiros,
    saldoActual
  };
}


function mostrarResultados(nombre, apellido, operaciones) {
  const saldos = calcularSaldos(operaciones);
  
  console.log(`Estimada ${nombre} ${apellido}:`);
  console.log(`El monto total de los depósitos es de: $${saldos.saldoDepositos}.`);
  console.log(`El monto total de los retiros es de: $${Math.abs(saldos.saldoRetiros)}.`);
  console.log(`Por lo tanto, su saldo actual en la cuenta es de: $${saldos.saldoActual}.`);
}


mostrarResultados("Gloria", "Medina", operacionesBancarias);