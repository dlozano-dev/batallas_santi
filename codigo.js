import Alumno from './clasealumno.js';
import Profesor from './claseporfesor.js';
import Batalla from './clasebatalla.js';

window.addEventListener('DOMContentLoaded', () => {});

const boton = document.getElementById('llamar_a_todo');

boton.addEventListener('click', llamaratodo);

function llamaratodo() {
  const santi = new Alumno('Santi', 6, 7, 8);

  const jaime = new Profesor('Jaime', 'cliente', 7);

  const batalla = new Batalla();

  console.log(
    'Primera ronda: ' +
      santi.nombre +
      ` ${santi.cliente} VS +jaime.nombre+ ${jaime.nota}`,
  );

  const notaNueva = jaime.examenSorpesa();

  console.log(
    jaime.nombre +
      ` le ha puesto un examen sorpresa a santi y ha perdido 2 puntos, su nueva nota es: ${notaNueva}`,
  );

  batalla.batalla(jaime, jaime.nota, santi, santi.cliente);
}
