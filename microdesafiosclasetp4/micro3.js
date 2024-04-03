let palabra = process.argv[2];
let traduccion;

switch (palabra) {
  case "perro":
    traduccion = "dog";
    break;
  case "gato":
    traduccion = "cat";
    break;
  case "puerta":
    traduccion = "door";
    break;
  case "ventana":
    traduccion = "window";
    break;
  case "mesa":
    traduccion = "table";
    break;
  default:
    traduccion = "La palabra ingresada es incorrecta";
    break;
}

console.log(traduccion);
