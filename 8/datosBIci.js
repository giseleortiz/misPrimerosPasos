const fs = require('fs');

function obtenerBicicletas() {
  try {
    const data = fs.readFileSync('bicicletas.json', 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error al leer el archivo bicicletas.json:', error);
    return [];
  }
}

module.exports = {
  obtenerBicicletas,
};