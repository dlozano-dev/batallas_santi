class Alumno {
  constructor(nombre, despligue, cliente, servidor) {
    this.nombre = nombre;
    this.despligue = despligue;
    this.cliente = cliente;
    this.servidor = servidor;
  }

  get getDespligue() {
    return this.despligue;
  }

  set setDespligue(despliegue) {
    if (isNaN(despliegue)) {
      this.despligue = 0;
    } else {
      this.despligue = despliegue;
    }
  }

  get getCliente() {
    return this.cliente;
  }

  set setCliente(cliente) {
    if (isNaN(cliente)) {
      this.cliente = 0;
    } else {
      this.cliente = cliente;
    }
  }

  get getServidor() {
    return this.servidor;
  }

  set setServidor(servidor) {
    if (isNaN(servidor)) {
      this.servidor = 0;
    } else {
      this.servidor = servidor;
    }
  }
}

export default Alumno;
