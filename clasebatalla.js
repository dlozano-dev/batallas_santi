class Batalla {
    batalla(profesor, notaProfesor, alumno, notaAlumno) {
        if (notaProfesor <= 0) {
            alert(`Ha ganado ${alumno.nombre}`);
        } else if (notaAlumno <= 0) {
            alert(`Ha ganado ${profesor.nombre}`);
        }
    }
}

export default Batalla;
