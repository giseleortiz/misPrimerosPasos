function encontrarNumero(array, numero) {
    if (array.includes(numero)) {
      return `El número ${numero} sí existe en el array`;
    } else {
      return 'El valor solicitado no existe';
    }
  }





  function juegoDeTrompito(acciones, vueltas) {
    if (vueltas < 2 || vueltas > 6) {
      return 'La cantidad de vueltas debe estar entre 2 y 6';
    }
  
    const indiceAleatorio = Math.floor(Math.random() * 6);
    const accionElegida = acciones[indiceAleatorio];
    return accionElegida;
  }

  const accionesTrompito = ["Toma 1", "Toma 2", "Pon 1", "Pon 2", "Todos ponen", "Toma todo"];
  const vueltasJuego = 3; 
  const resultadoJuego = juegoDeTrompito(accionesTrompito, vueltasJuego);
  console.log(`Resultado de la vuelta ${vueltasJuego}: ${resultadoJuego}`);


  function sumatoriaParesImpares(array) {
    let sumaPares = 0;
    let sumaImpares = 0;
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        sumaPares += array[i];
      } else {
        sumaImpares += array[i];
      }
    }
  
    return `Suma de pares: ${sumaPares}, Suma de impares: ${sumaImpares}`;
  }
 
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const resultadoSuma = sumatoriaParesImpares(numeros);
  console.log(resultadoSuma);