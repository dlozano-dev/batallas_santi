import Alumno from './clasealumno.js';
import Profesor from './claseporfesor.js';
import Batalla from './clasebatalla.js';

window.addEventListener('DOMContentLoaded', () => {});

const buttonNoEstudiar = document.getElementById('noEstudiar');
const buttonEstudiar = document.getElementById('estudiar');
const buttonBecario = document.getElementById('usarBecario');
const batalla = new Batalla();

buttonNoEstudiar.addEventListener('click', noEstudiar);
buttonEstudiar.addEventListener('click', estudiar);
buttonBecario.addEventListener('click', usarBecario);

const alumno = new Alumno(
    prompt("Introduce el nombre del alumno"),
    prompt("Introduce la nota de despliegue"),
    prompt("Introduce la nota de cliente"),
    prompt("Introduce la nota de servidor")
);

const profesor = new Profesor(
    prompt("Introduce el nombre del profesor"),
    prompt("Introduce la asginatura del profesor"),
    prompt("Introduce la nota del profesor")
);

const becario = new Becario(prompt('Introduce el nombre del becario'),
    prompt('Introduce la asginatura del becario'),
    prompt('Introduce la nota del becario'),
    prompt('Introduce la edad del becario')
);

document.getElementById('notas').innerHTML = `Notas iniciales de ${alumno.nombre}, despliegue: ${alumno.despliegue}, cliente: ${alumno.cliente}, servidor: ${alumno.servidor} `;

function noEstudiar() {
    alumno.cliente -= profesor.asignatura === 'cliente' ? profesor.examenSorpesa() * 2 : profesor.examenSorpesa();
    document.getElementById('turnos').innerHTML += `${profesor.nombre} le ha puesto un examen sorpresa a ${alumno.nombre} y ha perdido 2 puntos, su nueva nota es: ${alumno.cliente}<br>`;

    const batalla = new Batalla();
    batalla.batalla(profesor, profesor.nota, alumno, alumno.cliente);
}

function estudiar() {
    profesor.nota -= alumno.estudiar();

    document.getElementById('turnos').innerHTML += `${alumno.nombre} ha estudiado, ${profesor.nombre} ha perdido 3 puntos, nota de ${profesor.nombre}: ${profesor.nota}, ${alumno.nombre} ha recogido los puntos que le ha quitado al profesor, nueva nota de ${alumno.nombre}: ${alumno.cliente}<br>`;

    batalla.batalla(profesor, profesor.nota, alumno, alumno.cliente);
}

function usarBecario() {
    profesor.nota += 1;
    alumno.nota += 1;

    document.getElementById('turnos').innerHTML += `El becario ${becario.nombre} ha ayudado tanto como a ${profesor.nombre}, como a ${alumno.nombre}, ambos han sumado 1 punto<br>`;
}
