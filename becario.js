import Profesor from './claseporfesor.js';

class Becario extends Profesor {
  constructor(nombre, asignatura, nota, edad) {
    super(nombre, asignatura, nota);
    this.edad = edad;
  }
}

export default Becario;
