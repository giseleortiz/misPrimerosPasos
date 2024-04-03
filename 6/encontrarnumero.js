const graduadosHTML5 = "30 45 25 34 18 23 16 50 72 70";
const graduadosCSS3 = "50 45 71 34 23 45 65 75 63 43 74 70";
const graduadosJavaScript = "70 65 58 45 23 57 34 17 72";
const graduadosNodejs = "45 56 73 34 65 72 70 32";


const arrayHTML5 = graduadosHTML5.split(" ").map(Number);
const arrayCSS3 = graduadosCSS3.split(" ").map(Number);
const arrayJavaScript = graduadosJavaScript.split(" ").map(Number);
const arrayNodejs = graduadosNodejs.split(" ").map(Number);


function calcularPromedioGraduadosPorCurso(arrays, curso) {
  if (curso < 1 || curso > 4) {
    return "El valor del curso debe estar entre 1 y 4.";
  }

  const cursoSeleccionado = arrays[curso - 1];
  if (!cursoSeleccionado) {
    return "Curso no encontrado.";
  }

  const sumaGraduados = cursoSeleccionado.reduce((total, graduado) => total + graduado, 0);
  const promedio = sumaGraduados / cursoSeleccionado.length;
  return `El promedio de graduados en el curso ${curso} es: ${promedio}`;
}


const cursoSeleccionado = 2;
const resultado = calcularPromedioGraduadosPorCurso([arrayHTML5, arrayCSS3, arrayJavaScript, arrayNodejs], cursoSeleccionado);
console.log(resultado);