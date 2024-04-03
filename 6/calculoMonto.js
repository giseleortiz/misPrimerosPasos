const cursos = [
    { nombre: "HTML5", precio: 4000 },
    { nombre: "CSS3", precio: 5000 },
    { nombre: "JavaScript", precio: 10000 },
    { nombre: "React", precio: 7000 },
    { nombre: "Nodejs", precio: 15000 },
  ];
  
 
  const cursosSeleccionados = ["HTML5", "CSS3", "JavaScript", "Nodejs"];
  
  
  function calcularMontoTotal(cursos, cursosSeleccionados) {
    let montoTotal = 0;
    for (let i = 0; i < cursosSeleccionados.length; i++) {
      const cursoSeleccionado = cursosSeleccionados[i].toUpperCase();
      const cursoEncontrado = cursos.find((curso) => curso.nombre.toUpperCase() === cursoSeleccionado);
      if (cursoEncontrado) {
        montoTotal += cursoEncontrado.precio;
      }
    }
    return montoTotal;
  }
  
  
  function obtenerInformacionAlumno(nombre, apellido, cursos, cursosSeleccionados) {
    const montoTotal = calcularMontoTotal(cursos, cursosSeleccionados);
    return `Estimado ${nombre} ${apellido}, en función de los cursos seleccionados:\n${cursosSeleccionados.map((curso, index) => `${index + 1}.- ${curso}`).join("\n")}\nEl monto total a pagar es de: $${montoTotal}.`;
  }
  
  
  const nombreAlumno = "Luis";
  const apellidoAlumno = "Fuentes";
  const informacionAlumno = obtenerInformacionAlumno(nombreAlumno, apellidoAlumno, cursos, cursosSeleccionados);
  console.log(informacionAlumno);
  
  
  
  
  
  
  