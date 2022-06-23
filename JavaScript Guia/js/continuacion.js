const imprimirNombre = () =>{
    let nombre = prompt("Dime tu nombre:");
    let apellido = prompt("Dime tu apellido:");

    let parrafo = document.createElement("p");
    let datos = document.createTextNode(nombre + " " + apellido);

    parrafo.appendChild(datos);
    document.getElementById("nuevo-texto").appendChild(datos);
}

const imprimirCodigo = () =>{
    document.write('hola como estas <br> <a href="continuacion.html">Volver a la página anterior</a>')
}

function iniciarCuestionario() {
    alert("A continuación se le harán unas preguntas para conocerlo mejor.")
    let nombre = prompt("Indiqueme su numbre");
    let apellido = prompt("Indique su apellido")
    let edad = prompt(`Buenas ${nombre}, Indique ahora su edad (En números)`);

    let resumen = `Resumen`
    let contenido = `Nombre: ${nombre} ${apellido}
                    Edad: ${edad}`
    /*
    let parrafoResumen = document.createElement("p");
    let contenidoResumen = document.createElement("p");
    let saltoLinea = document.createElement("br");
    let resumenTexto = document.createTextNode(resumen);
    let contenidoTexto = document.createTextNode(contenido);

    */
   let contenidoResumen = document.createElement("p");
   let textoContenido = document.createTextNode(resumen);
   let saltoLinea = document.createElement("br");
   let saltoLinea2 = document.createElement("br");
   let saltoLinea3 = document.createElement("br");
   let textoContenido2 = document.createTextNode(contenido);
   let decoracion = document.createTextNode("##############################");
   let decoracion2 = document.createTextNode("##############################");

    contenidoResumen.appendChild(decoracion);
    contenidoResumen.appendChild(saltoLinea);
    contenidoResumen.appendChild(textoContenido);
    contenidoResumen.appendChild(saltoLinea2);
    contenidoResumen.appendChild(textoContenido2);
    contenidoResumen.appendChild(saltoLinea3);
    contenidoResumen.appendChild(decoracion2);
    document.getElementById("cuestionario").appendChild(contenidoResumen);
}