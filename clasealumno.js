class Alumno {
    constructor(nombre, despligue, cliente, servidor) {
        this.nombre = nombre;
        this.despliegue = despligue;
        this.cliente = cliente;
        this.servidor = servidor;
    }

    get getDespligue() {
        return this.despliegue;
    }

    set setDespligue(despliegue) {
        if (isNaN(despliegue)) {
            this.despliegue = 0;
        } else {
           this.despliegue = despliegue;
        }
    }

    get getCliente() {
        return this.cliente;
    }

    setCliente(cliente) {
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

    estudiar() {
        this.setCliente(Number(this.cliente) + 3);
       return 3;
    }
}

export default Alumno;
