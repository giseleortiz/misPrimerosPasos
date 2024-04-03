mostrarLetrasEnMayuscula('practicando el uso de los ciclos o bucles');


function obtenerValoresPares(array) {
  const valoresPares = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      valoresPares.push(array[i]);
    }
  }
  return valoresPares;
}


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = obtenerValoresPares(numeros);
console.log("Valores pares:", pares);