/*
    ###########################################################
    ##### Uso de los selectores para el DOM en JavaScript #####
    ###########################################################
*/

/*
    Selectores de elementos:

    Para obtener elementos del DOM podemos hacerlo de diferentes maneras tomando en cuenta el nombre de la clase, su id, su etiqueta y otros componentes relacionados.

    Metodo document.getElementById(nombreId):

        Mediante este metodo podemos seleccionar los elementos por el nombre que le hayamos asignado como ID. (Por eso se recomienda, además de temas de especificidad, como nombre de ID a un solo elemento en los elementos del XHTML).

        La principal ventaja de este "selector" es la posibilidad de seleccionar un elemento en especifico con el cual luego trabajaremos el DOM.

        Al obtener los elementos nos devolvera un objeto con el que luego podremos trabajar mediante otros metodos y funciones.
*/

const obtenerElementoPorSuId = () => {

    let parrafo = document.getElementById("parrafo"); // almacena en la variable parrafo el objeto HTML con id="parrafo".
}

/*
    Metodo document.getElementsByTagName(etiqueta):

        Mediante este metodo podemos extraer una lista de objetos (no confundir con un array) de todos los elementos de la etiqueta enviada como parametro entre comillas.
*/

const obtenerElementosPorEtiquetas = () => {
    parrafos = document.getElementsByTagName("p"); // devuelve una lista de objetos (de nuevo, no confundir con un array de objetos) y lo almacena en la variable parrafos. a los objetos de esta lista se pueden acceder de manera similar a como se acceden a los arrays indicando el indice de la lista mediante el nombre de la variable y dnetro de los corchetes la posición en el índice del mismo. Para acceder al primer objeto obtenido por este selector utilizamos parrafos[0]. 
}

/*
    Metodo document.querySelector(selectorCss):

    La principal caracteristica de usar este metodo es que para seleccionar utiliza los mismos selectores que los de CSS. Por ende para seleccionar las clases se utiliza el selector (".nombreClase"), para los id se usan los selectores (#nombreClase); aunque se pueda, lo más recomendable para los id es usar el metodo document.getElementById() Visto con anterioridad. 

    El uso más recomendado para este selector es para las clases.
*/

const obtenerElementoPorNombreDeClase = () =>{
    elementoClase = document.querySelector(".parrafo"); // almacena en la variable el primer elemento que contenga la clase ".parrafo"
}

/*
    Metodo document.querySelectorAll(selectorCSS):

    Mediante el uso de este selector podemos crear una lista de objetos con todos los elementos que contengan la clase enviada como parametro.
*/

const obtenerElementosPorNombreDeClase = () => {

    elementosParrafo = document.querySelectorAll(".parrafo"); // devuelve y aloja en la variable una lista de elementos que contengan la clase ".parrafo"
}

/*
    ##############################################################
    ##### Modificar y manipular los valores de los atributos #####
    ##############################################################
*/


/*
    Metodo .setAtribute(nombreAtributo, valor):

        Este metodo y los demás relacionados con la manipulación de los atributos HTML desde JavaScript se aplican a los objetos resultantes de la obtencion de los metodos getter que nos permiten almacenar en variables los objetos con los elementos en cuestión. Después de que hayamos almacenado en un objeto el Elemento correspondiente procedemos a manipular los atributos del mismo.

        Para darle o modificar un atributo ya precódificado en HTML hacemos uso del metodo setAtributte() que nos permite modificar,o en le caso de que no lo tenga, crear el atributo que nosotros deseemos dentro del elemento que hayamos obtenido mediante los getter.
*/
const changeInputToButton = () =>{

    let input = document.getElementById("input");
    
    input.setAttribute("type", "button");
    input.setAttribute("value" , "Ahora Soy un Boton")
}

const changeInputToText = () =>{

    let input = document.getElementById("input");
    
    input.setAttribute("type", "text");
    input.setAttribute("value" , "Ahora Soy un texto");
    input.setAttribute("readonly", "")
}

const changeInputToColor = () =>{

    let input = document.getElementById("input");
    
    input.setAttribute("type", "color");
}

/*
    Metodo .getAttribute(nombreAtributo):

        Mediante el uso de este metodo podemos obtener el valor del atributo del objeto al cual le apliquemos dicho metodo.
*/

const obtenerAtributoDeElemento = () =>{

    let input = document.getElementById("input");

    alert(input.getAttribute("type"));
}

/*
    Metodo removeAttribute(atributo);

        Con el uso de este método podemos eliminar el atributo del elemento seleccionados.
*/

removerAtributoValue = () =>{
    let input = document.getElementById("input");

    input.removeAttribute("value");
    input.removeAttribute("placeholder");
}

///////////////// Atributos Globales /////////////////////
//////////////////////////////////////////////////////////

/*
    Los atributos globales son aquellos que comparten todos los elementos XHTML. Existen los siguientes.
*/

/*
    Atributo contentEditable="booleano":

        Con este atributo permitimos al usuario que pueda modificar el text node del elemento al que se le aplique.
*/

const editarContenido = () =>{
    let parrafo = document.getElementById("parrafoEditable");
    parrafo.setAttribute("contenteditable", "true");
    parrafo.setAttribute("style","border: 2px solid #000; display: inline-block;border-radius: 5px;")
}

const noEditarContenido = () =>{
    let parrafo = document.getElementById("parrafoEditable");
    parrafo.setAttribute("contenteditable","false");
    parrafo.removeAttribute("style");
}

/*
    Atributo dir ltr/rtl:

        Con el uso de este atributo podemos indicar al programa que posicione el texto de derecha a izquierda o de izquierda a derecha.

        Aunque esto se puede hacer, no se recomienda ya que existe un atributo especifico para lograr este aspecto.
*/

const izquierdaDerecha = () =>{
    let parrafo = document.getElementById("ltr/rtl");
    parrafo.setAttribute("dir", "ltr");
}

const derechaIzquierda = () =>{
    let parrafo = document.getElementById("ltr/rtl");
    parrafo.setAttribute("dir","rtl");
}

/*
    Atributo hidden true/false:

        El atributo hidden nos permite ocultar un elemento de la página. La principal caracteristica además del comportamiento de este atributo es que indiferentemente de si su valor es "true" o "false", el elemento que contenga este atributo no se mostrara. Por lo tanto para volverlo a mostrar hay que eliminar el atributo del elemento al que se la ha aplicado.
*/

const ocultarContenido= () => {
    let parrafo = document.getElementById("ocultar/mostrar");

    parrafo.setAttribute("hidden","true");
}

const mostrarContenido = () => {
    let parrafo = document.getElementById("ocultar/mostrar");
    parrafo.removeAttribute("hidden");
}

/*
    Atributo tabindex, int:

        Este atributo nos permite darle un index de orden del "focus" de la tecla "tab". Este atributo nos permite modificar el orden en le que cada vez que le demos a la tecla tab este se desplaze por el documento. Esto suele ser util en los formularios que permiten con la tecla tab desplazarse por los diferentes campos a rellenar del formulario.
*/

/*
    Atirbuto title, string:

        El último pero no menos importante atributo es title. El atributo title es aquel que nos muestra una pequeña etiqueta con texto cuando posicionamos el mouse por encima de algun elemento del document.
*/

const cambiarTitle = () =>{
    titulo = document.getElementById("titulo");

    titulo.setAttribute("title", prompt("Indica el nuevo title"));
}

/*
    Aunque estos son muy importantes, Hay un monton de atributos además de los que hemos visto pero también puedes verlos e investigar por tu cuenta vago
*/