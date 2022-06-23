/*
    #############################################
    ##### Metodos para aplicar a los childs #####
    #############################################
*/

/*
    Método replaceChild(elementoNuevo, elementoAntiguo):

        Con este método podemos reemplazar un elemento que ya este en el DOM por otro que nosotros deseemos.
*/

const reemplazarTitulos = () =>{

    const contenedor = document.querySelector(".contenedor");

    const parrafoNuevo = document.createElement("P").innerHTML = "Párrafo Nuevo";
    const h3Nuevo = document.createElement("H3");
    h3Nuevo.innerHTML = "Título h3 nuevo";

    h3Antiguo = document.getElementById("h3_antiguo");

    contenedor.replaceChild(h3Nuevo, h3Antiguo);
}

/*
    Método removeChild(elementoParaEliminar):

        Con este elemento podemos enviar como parametro un objeto HTML que después el programa se encargara de eliminar. Es la manera más sencilla y eficaz de eliminar contenido de las páginas web.
*/

const eliminarParrafo = () =>{
    const contenedor = document.querySelector(".contenedor");
    parrafoAntiguo = contenedor.lastElementChild;
    contenedor.removeChild(parrafoAntiguo);
}

/*
    Método hasChildNodes():

        Este método se utiliza para saber si el elemento padre al que se le aplica tiene elementos hijos.
*/

const preguntarPorHijos = () => {
    const contenedor = document.querySelector(".contenedor");
    if (contenedor.hasChildNodes) {
        alert(`El elemento Si tiene hijos`)
    } else {
        alert("El contenedor NO tiene hijos")
    }
}

/*
    #############################################
    ##### Métodos para los elememtos Padres #####
    #############################################
*/

/*
    Método parentElement/parentNode

        Con este método apuntamos al elemento padre del elemento al que se le aplica.

        Este método solo mostrara los elementos padre que contengan un elemento padre. Si intentamos aplicarle esto a un elemento creado desde JavaScript pero que no contenga padre aún devolvera "null"

        La diferencia entre .parentElement y .parentNode es que en casos especificos en el que el padre del elemento hijo al que se le aplica el metodo no sea XHTML, se usa este método.
*/

const mostrarPadre = () =>{
    const elemento = document.getElementById("h3_antiguo");

    alert("Ver resultado en la consola")
    console.log(elemento.parentElement)
}

/*
    ###########################################
    ##### Métodos para elementos hermanos #####
    ###########################################
*/

/*
    Los nodos hermanos son aquellos que comparten el mismo elemento o nodo padre.
*/

/*
    Método nextSibling y nextElementSibling:

        Con este elemento podemos apuntar al siguiente hermano que tenga el elemento al que se le aplica (incluyendo los espacios en blanco que los cuenta como hermanos también).

        Si el elemento no tiene ningún hermano siguiente, este devolvera undefined.

        Si queremos apuntar solo a los elementos sin que este nos tome en cuenta los elementos texto usamos el nextElementSibling.
*/

const mostrarSiguienteHermano = () =>{
    const titulo = document.getElementById("h3_antiguo");

    alert("Ver en la consola el contenido del siguiente hermano: " + titulo.nextSibling);
    console.log(titulo.nextSibling);
}

const mostrarSiguienteElementoHermano = () =>{
    const titulo = document.getElementById("h3_antiguo");

    alert("Ver en la consola el contenido del siguiente hermano: " + titulo.nextElementSibling);
    console.log(titulo.nextElementSibling);
}

/*
    Método .previousSibling y .previousElementSibling:

        Funciona igual que los métodos anteriores pero con la diferencia de que estos apuntan a los hermanos anteriores de los elementos a los que se le aplica.

        Si no tiene ningún hermano anterior devuelve undefined.
*/

const mostrarHermanoAnterior = () =>{
    const parrafo = document.querySelector(".parrafo");
    console.log(parrafo.previousSibling)
    alert("Ver en la consola el contenido del siguiente hermano: " + parrafo.previousSibling);
}
const mostrarElementoHermanoAnterior = () =>{
    const parrafo = document.querySelector(".parrafo");
    console.log(parrafo.previousElementSibling);
    alert("Ver en la consola el contenido del siguiente hermano: " + parrafo.previousElementSibling);
}

/*
    Método closest(selectorCSS):

        Con este método podemos indicarle al programa que nos apunte al elemento ascendente más cercano que sea padre del elemento al que se le aplica.
*/

const apuntarAMazunkamba = () =>{
    const parrafo = document.querySelector(".parrafo");

    console.log(parrafo.closest(".contenedor"))
}