const { obtenerBicicletas } = require('./datosBici');


const dhBici = {
  bicicletas: obtenerBicicletas(),

  buscarBici(id) {
    return this.bicicletas.find((bici) => bici.id === id) || null;
  },

  venderBici(id) {
    const bici = this.buscarBici(id);
    if (bici) {
      bici.vendida = 'si';
      return bici;
    } else {
      return 'Bicicleta no encontrada';
    }
  },

  biciParaLaVenta() {
    return this.bicicletas.filter((bici) => bici.vendida === 'no');
  },

  totalDeVentas() {
    return this.bicicletas
      .filter((bici) => bici.vendida === 'si')
      .reduce((total, bici) => total + bici.precio, 0);
  },
};

console.log('Búsqueda por ID (1):', dhBici.buscarBici(1));
console.log('Vender bicicleta por ID (2):', dhBici.venderBici(2));
console.log('Bicicletas para la venta:', dhBici.biciParaLaVenta());
console.log('Total de ventas:', dhBici.totalDeVentas());



aumentoBici(porcentaje) {
    return this.bicicletas.map((bici) => {
      bici.precio += (bici.precio * porcentaje) / 100;
      return bici;
    });
};

  biciPorRodado(rodado) {
    return this.bicicletas.filter((bici) => bici.rodado === rodado);
  };

  listarTodasLasBici() {
    console.log('Listado de todas las bicicletas:');
    this.bicicletas.forEach((bici) => {
      console.log(`ID: ${bici.id}`);
      console.log(`Marca: ${bici.marca}`);
      console.log(`Modelo: ${bici.modelo}`);
      console.log(`Rodado: ${bici.rodado}`);
      console.log(`Año de fabricación: ${bici.anio}`);
      console.log(`Color: ${bici.color}`);
      console.log(`Peso en Kilogramos: ${bici.peso}`);
      console.log(`Tipo: ${bici.tipo}`);
      console.log(`Precio: ${bici.precio}`);
      console.log(`Vendida: ${bici.vendida}`);
      console.log('-------------------------');
    });
  },
};


console.log('Bicicletas con aumento del 10%:');
console.log(dhBici.aumentoBici(10));

console.log('Bicicletas con rodado 29:');
console.log(dhBici.biciPorRodado(29));

dhBici.listarTodasLasBici();