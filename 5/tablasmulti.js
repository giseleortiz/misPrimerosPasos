
function tablaDeMultiplicar() {
    console.log("Tabla de multiplicar");
    console.log("--------------------");
    for (let i = 1; i <= 10; i++) {
      for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
      }
      console.log("--------------------");
    }
  }

  tablaDeMultiplicar();
  
  function mostrarSiguientesDiezNumeros(valor) {
    for (let i = valor + 1; i <= valor + 10; i++) {
      console.log(i);
    }
  }

  mostrarSiguientesDiezNumeros(5);
  
  function imprimirNumerosDeTresEnTres() {
    for (let i = 1; i <= 57; i += 3) {
      console.log(i);
    }
  }
  
  function sumatoriaDeNumeros() {
    let sumatoria = 0;
    for (let i = 0; i <= 100; i++) {
      sumatoria += i;
    }
    console.log(`La sumatoria de los números del 0 al 100 es: ${sumatoria}`);
  }
  sumatoriaDeNumeros();
  