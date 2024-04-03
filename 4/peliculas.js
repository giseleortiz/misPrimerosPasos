const peliculas = [
    'Turno de día',
    '30 noches con mi ex',
    'Bestia',
    'El monte',
    'Top gun maverick',
    'Elvis',
    'Thor: amor y trueno',
  
  function ponerPrimeraPeliculaEnMayusculas(pelicula) {
    const index = peliculas.indexOf(pelicula);
    if (index !== -1) {
      peliculas.splice(index, 1);
      peliculas.unshift(pelicula.toUpperCase());
    }
  }
]
  const peliculaMasVendida = 'Thor: amor y trueno';
  ponerPrimeraPeliculaEnMayusculas(peliculaMasVendida);
 
  const proximasPeliculas = 'Counter-Strike, NOP, Vértigo, Nick, Avatar';
 
  const proximasPeliculasArray = proximasPeliculas.split(', ');



  proximasPeliculasArray.shift();
 
  function combinarEstructuras(peliculas, proximasPeliculas) {
    return peliculas.concat(proximasPeliculas);
  }
  
  const nuevaEstructura = combinarEstructuras(peliculas, proximasPeliculasArray);