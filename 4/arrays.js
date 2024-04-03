
const electrodomesticos = ["Lavadora", "Refrigerador", "Televisor", "Microondas", "Licuadora", "Horno"];


console.log("Elemento en la posición 2:", electrodomesticos[2]);
console.log("Elemento en la posición 4:", electrodomesticos[4]);


const primerElemento = electrodomesticos.shift();
electrodomesticos.push(primerElemento);

electrodomesticos.push("Cafetera", "Aspiradora");


console.log("Cantidad de elementos en el array:", electrodomesticos.length);


const productoBuscado = "Licuadora";
if (electrodomesticos.includes(productoBuscado)) {
    console.log("Producto encontrado:", productoBuscado);
} else {
    console.log("El producto buscado no existe");
}


const cadenaTexto = electrodomesticos.join(" ");


console.log("Cantidad de caracteres en la cadena de texto:", cadenaTexto.length);


const nuevoNombre = "Televisor LED";
const productoAntiguo = "Televisor";
const nuevaCadenaTexto = cadenaTexto.replace(productoAntiguo, nuevoNombre);
console.log("Cadena de texto con nombre cambiado:", nuevaCadenaTexto);


const palabrasArray = nuevaCadenaTexto.split(" ");
console.log("Array de palabras:", palabrasArray);


const cadenaPalabras = palabrasArray.join(", ");
console.log("Cadena de palabras separadas por comas:", cadenaPalabras);