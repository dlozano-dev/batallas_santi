class Batalla {
  batalla(profesor, notaProfesor, alumno, notaAlumno) {
    if (notaProfesor < notaAlumno) {
      console.log(`Ha ganado ${alumno.nombre}`);
    } else {
      console.log(`Ha ganado ${profesor.nombre}`);
    }
  }
}

export default Batalla;
