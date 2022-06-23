/*
##### Métodos del objeto Window #####
*/

/*
    ##### Metodo open(url):
        Este método es utilizado para abrir una nueva ventana a la url que se le haya indicado como argumento.
*/
const usoOpen = () => {
    ventana = window.open("https://youtube.com");
    estatus.textContent = "Ventana Abierta";
    estatus.classList.add("open");
    estatus.classList.remove("stop");
}

const botonOpen = document.getElementById("open");
const estatus = document.querySelector(".status");

botonOpen.addEventListener("click", usoOpen);

/*
    Window.close():

        Este método permite cerrar la ventana que nosotros indiquemos. Para ver esto como ejemplo. Usar el boton "Abrir youtube" del documento y luego en la consola escribir "ventana.close()" La ventana que abrio la función "usoOpen()" deberá cerrarse;
*/

/*
    window.closed():
        Este método hace referencia a que si el usuario tiene la ventana cerrada o no. Se le aplica al objeto en cuestión y devuelve un valor booleano si esta abierta o cerrada.

        [IR A LA LINEA 26 PARA OBSERVAR EL COMPORTAMIENTO EN LA CONDICIONAL IF{}]
*/


const cerrarVentana = () => {
    if (ventana.closed) { // uso del método window.closed

    } else {
        if (confirm("¿Estas Seguro que deseas cerrar la ventana?")) {
            ventana.close();
            estatus.textContent = "Ventana Cerrada"
            estatus.classList.remove("open");
            estatus.classList.remove("stop");
        }
    }
}

const botoncerrar = document.getElementById("close");
botoncerrar.addEventListener("click", cerrarVentana);

/*
    Método window.stop:
        Este método se usa para parar la carga de la ventana que hemos abierto. [Usar el boton equis "x" del navegador cuando se esta cargando una página]
*/


const cancelarCarga = () => {
    estatus.classList.add("stop");
    estatus.textContent = "Carga Cancelada"
    ventana.stop();
}

const btnPararCarga = document.getElementById("stop");
btnPararCarga.addEventListener("click", cancelarCarga);

/*
    window.print():
        Con este método nos permite abrir la ventana de "imprimir" directamente desde el código JavaScript.
*/

const imprimir = () => {
    window.print();
}
const btnImprimir = document.getElementById("print");
btnImprimir.addEventListener("click", imprimir);

/*
    alert("texto"), prompt("texto"):
        métodos que ya hemos visto desde el curso pasado para mostrar y pedir datos.
        Resaltar que prompt(), siempre devuelve un valor de tipo String indiferentemente de si le indicamos un valor númerico o no. Para que se usen valores númericos y podamos usarlos para hacer calculos matemáticos hay que "parsear" el valor que devuelve.
*/

/*
    Método confirm():

        Método para hacer preguntas dicotómicas al usuario de manera. Devuelve valor booleano.
        [Para el ejemplo se aplicara este método a la función "cerrarVentana" linea 35.]
*/
