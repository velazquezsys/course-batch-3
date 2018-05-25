const url = 'https://randomuser.me/api/?results=2';

class Empleados {
    contructor() {
    }
    
    getEmpleados() {
        const http = new Http();
        console.log('hello');
        http.get(url).then((response)=> {
            console.log('response: ', response);
            this.printEmpleados(response.results);    
        }, (error) => {
            console.log('error: ', error);
            alert('Error al obtener empleados');
        });
    }

    printEmpleados(listaEmpleados) {
        this.generarTabla(listaEmpleados);
    }

    generarTabla(listaEmpleados) {
        const body = document.getElementsByTagName("body")[0];
        const tabla = document.createElement("table");
        const tblBody = document.createElement("tbody");

        
        for(let e in listaEmpleados) {
            let hilera = document.createElement("tr");
            let celda = document.createElement("td");
            let textoCelda = document.createTextNode(
                'Email: ' + listaEmpleados[e].email
            );
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
            tblBody.appendChild(hilera);
        }

        tabla.appendChild(tblBody);
        body.appendChild(tabla);
        tabla.setAttribute("border", "2");

    }
}


document.getElementById('get-empleados').addEventListener('click', () => {
    const empleados = new Empleados();
    empleados.getEmpleados();
});