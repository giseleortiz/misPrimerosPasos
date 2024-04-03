let palabra = "perro"; 

switch (palabra.toLowerCase()) {
  case "perro":
    console.log("La palabra en inglés es 'dog'.");
    break;
  case "gato":
    console.log("La palabra en inglés es 'cat'.");
    break;
  case "puerta":
    console.log("La palabra en inglés es 'door'.");
    break;
  case "ventana":
    console.log("La palabra en inglés es 'window'.");
    break;
  case "mesa":
    console.log("La palabra en inglés es 'table'.");
    break;
  default:
    console.log("La palabra ingresada es incorrecta.");
    break;
}