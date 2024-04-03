function area(largo, ancho) {
    return largo * ancho;
  }
  
  area(10, 50);





  function calcularMontoAlquiler(tipoVehiculo, diasAlquiler, sillaBebe) {
    let costoPorDia;
  
  
    switch (tipoVehiculo) {
      case "Compacto":
        costoPorDia = 14000;
        break;
      case "Mediano":
        costoPorDia = 17000;
        break;
      case "Camioneta":
        costoPorDia = 28000;
        break;
      default:
        costoPorDia = 0; 
    }
  
   
    let costoTotal = costoPorDia * diasAlquiler;
  
   
    if (sillaBebe) {
      costoTotal += 1200 * diasAlquiler;
    }
  
   
    let mensaje = `Estimado cliente: en base al tipo de vehículo ${tipoVehiculo} alquilado, considerando los ${diasAlquiler} días utilizados`;
  
    if (sillaBebe) {
      mensaje += `, con silla para bebé`;
    }
  
    mensaje += `, el monto total a pagar es de $${costoTotal}.`;
  
   
    console.log(mensaje);
  
    return costoTotal;
  }
  
 
  calcularMontoAlquiler("Compacto", 3, true);
  calcularMontoAlquiler("Mediano", 5, false);