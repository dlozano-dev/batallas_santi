class Profesor {
  constructor(nombre, asignatura, nota) {
    this.nombre = nombre;
    this.asignatura = asignatura;
    this.nota = nota;
  }

  get getAsignatura() {
    return this.asignatura;
  }

  set setAsignatura(asignatura) {
    if (isNaN(asignatura)) {
      this.asignatura = 0;
    } else {
      this.asignatura = asignatura;
    }
  }

  intimidar() {
    return `hola soy el profesor de ${this.nombre}`;
  }
}

export default Profesor;
