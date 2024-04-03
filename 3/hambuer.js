function calcularTotalHamburguesa(tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla) {
    let precioBase;
  
    
    switch (tipoHamburguesa) {
      case "Carne a la parrilla":
        precioBase = 1800;
        break;
      case "Pollo":
        precioBase = 1500;
        break;
      case "Vegetariana":
        precioBase = 1200;
        break;
      default:
    }
  
   
    let costoAdicionales = 0;
  
    if (jamon) {
      costoAdicionales += 30;
    }
    if (queso) {
      costoAdicionales += 25;
    }
    if (salsaTomate) {
      costoAdicionales += 5;
    }
    if (mayonesa) {
      costoAdicionales += 5;
    }
    if (mostaza) {
      costoAdicionales += 5;
    }
    if (tomate) {
      costoAdicionales += 15;
    }
    if (lechuga) {
      costoAdicionales += 10;
    }
    if (cebolla) {
      costoAdicionales += 10;
    }
  
    
    let montoTotal = precioBase + costoAdicionales;
  
    return montoTotal;
  }
  
  
  function mostrarMensaje(nombre, apellido, tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla) {
    const montoTotal = calcularTotalHamburguesa(tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla);
    
    console.log(`Estimado ${nombre} ${apellido}, el monto total a pagar es de: $${montoTotal}`);
  }
  
 
  mostrarMensaje("Daniel", "Fuentes", "Carne a la parrilla", true, true, true, false, false, false, true, false);

