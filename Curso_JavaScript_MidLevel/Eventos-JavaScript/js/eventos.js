/*
    ############################################
    ##### Manejo de Eventos con JavaScript #####
    ############################################
*/

/*
    ##### Notas #####

        - Se recomienda trabajar las funciones para los EventListeners con funciones comunes "function nombreFuncion(){...}. Debido a que si se realizan con funciones flechas no funciona correctamente.

        - Si se usan funciones de tipo flecha al momento de llamar la función puede dar error si el listener esta codificado después de la función. Para evitar esto es mejor usar las funciones simples.

        -Otro de los inconvenientes es qwue las funciones simples no aceptan parámetros, así que para poder enviarle parámetros a la función para utilizarlas, hay que hacer uso de las funciones flecha. 
*/


const boton = document.getElementById("click");

const saludar =()=>{
    saludo = prompt("Indica el saludo")
    alert(saludo)
}

boton.addEventListener("click",saludar);

/*
    element.removeEventListener(evento,funcion):

        Con esta función podemos eliminar una función a un elemento que contenga la misma.
*/

const removeEvent=()=>{
    boton.removeEventListener("click",saludar);
    boton.setAttribute("disabled","disabled")
}
const setEvent=()=>{
    boton.addEventListener("click",saludar);
    boton.removeAttribute("disabled","disabled");
}
const btnRemove = document.getElementById("remove");
const btnSet = document.getElementById("set");

btnSet.addEventListener("click",setEvent);
btnRemove.addEventListener("click",removeEvent);

/*
    Objeto event:

        El objeto event es el unico objeto que se puede enviar como parámetro. Este objeto se usa para saber las propiedades del mismo.
*/

const propiedades =(e)=>{
    console.log(e);
}
const btnPropiedades = document.getElementById("propiedades");
btnPropiedades.addEventListener("click",propiedades);

/*
    Flujo de eventos:

        Flujo Bubling:

        El flujo de eventos es el flujo que toman los navegadores para realizar los eventos dentro del DOM. EJ: Suponiendo que tenemos un contenedor y un botón, ambos tienen un sus respectivos eventos. Se va a ejecutar primero el evento correspondiente al botón ya que toma en cuenta la especificidad en el dom y va realizando los eventos desde el Hijo más cercano hasta el último padrentNode. 

        Para cambiar este comportamiento se tiene que enviar como tercer parámetro en el addEventListener(evento,función,true/false). Al cambiar este último parámetro podemos indicarle al navegador que aquel que contenga el parámetro "true" va a ser el que se ejecute primero de todos.

        En el caso de que tengamos eventos sobre elementos anidados tenemos que considerar que aquellos que tengan el parámetro "true" se van a ejecutar primero tomando como prioridad los parentNodes del evento que inicializa la acción.
*/

/*
        stopPropagation():

            Esto sirve para evitar que los eventos anidados se ejecuten en lugares donde si queremos que se ejecute algo pero que no queremos que se ejecuten los eventos de los padres del elemento que ha sido accionado. 
            Esto se evita con el método stopPropagation y de esta manera podemos hacer que solo se ejecute el evento especifico que deseamos y no se accionen los elementos de los parents
*/

/*
########################################################
################ Eventos del Mouse #####################
########################################################
*/

/* Click */

const click = document.getElementById("clicks");
click.addEventListener("click",(e)=>{
    alert("Has hecho un click");
})

/* dblclick */

const dobleClick = document.getElementById("doble-click");
dobleClick.addEventListener("dblclick",(e)=>{
    alert("Has hecho doble click");
    console.log(e);
})

/* mouseover */

const mover = document.getElementById("mouseover");
mover.addEventListener("mouseover",mouseover);
function mouseover(){
    alert("Has pasado el mouse por encima");
}

/* mouseout */

const mout = document.getElementById("mouseout");
mout.addEventListener("mouseout",mouseout);
function mouseout(){
    alert("Has sacado el mouse del elemento");
}

/* contextmenu */

const conmenu = document.getElementById("contextmenu");
conmenu.addEventListener("contextmenu",contextmenu);
function contextmenu(){
    alert("Has tocado el click derecho");
}

/* mouseenter [obsoleto, Parecido al mousemove pero para internet explorer]*/

/* mousemove */

const moumove = document.getElementById("mousemove");
let move = 0;
moumove.addEventListener("mousemove",()=>{
    move++;
    moumove.textContent = `(mouse move)Te has movido por la zona negra ${move} píxeles [has doble click en este bloque para resetear el contador]`
})
moumove.addEventListener("dblclick",(e)=>{
    move =0;
    moumove.textContent = `(dblclick) Has reseteado el contador`;
})


/* mouseleave */

moumove.addEventListener("mouseleave", function leave(){
    moumove.textContent = `(mouseleave)Has abandonado la zona negra`
})

/* mousedown */

const moudown = document.getElementById("mousedown");
moudown.addEventListener("mousedown", function mousedown(){
    moudown.textContent = "(mousedown)Estas tocando el click izquierdo"
})
moudown.addEventListener("click",function clicker(){
    moudown.textContent = `(click)Has clickeado este bloque`
})
moudown.addEventListener("mouseleave",function leaved(){
    moudown.textContent = `(mouseleave)Deja el click presionado encima de este bloque`
})

/* mouseup */

const mouup = document.getElementById("mouseup");
mouup.addEventListener("mouseup",function mouper(){
    mouup.textContent = `(mouseup)Has arrastrado algo a este bloque`
})
mouup.addEventListener("mouseleave",function salir(){
    mouup.textContent = `(mouseleave)Has click fuera de este bloque y suelta el click aqui`
})

/*
##########################################################
################ Eventos del Teclado #####################
##########################################################
*/

const input = document.getElementById("teclados");
input.addEventListener("keydown",function keydown(){
    console.log("(keydown)Has presionado una tecla");
})
input.addEventListener("keypress",function keypress(){
    console.log("(keypress)un usuario ha presionado una tecla y la soltó")
})
input.addEventListener("keyup",function keyup(){
    console.log("(keyup)se ha dejado de presionar una tecla")
})

/*
#############################################################
################ Eventos de la interfaz #####################
#############################################################
*/

/* error */
const imgContianer = document.getElementById("imagen-prueba");
const agregarImg = document.getElementById("agregar-imagen");
const eliminarImg = document.getElementById("eliminar-imagen");

/* load */

const inputLoad = document.getElementById("load");
addEventListener("load",()=>{
    inputLoad.value = "Se ha cargado la página";
})

/* beforeunload */

addEventListener("beforeunload",()=>{
    console.log("Vete coño e tu madre")
})

/* unload */
addEventListener("unload",()=>{
    console.log("Sigues aqui? Vete copño")
})

/* resize */
let movement = 0;
addEventListener("resize",()=>{
    movement++;
    console.log(`La pantalla se esta redimensionando por ${movement} vez`);
})

/* scroll */
scrollercount = document.getElementById("scroll");
let scrollcount = 0;
addEventListener("scroll",(e)=>{
    scrollcount++;
    scrollercount.textContent = `Te has desplazado un total de ${scrollcount} píxeles verticales en esta página`;
})

/* select */

let inputSelect = document.getElementById("selected");
inputSelect.addEventListener("select",(e)=>{
    let start = document.getElementById("start");
    let end = document.getElementById("end");
    let seleccionado = document.getElementById("seleccionado");
    let textStart = e.target.selectionStart;
    let textEnd = e.target.selectionEnd;
    let texto = inputSelect.value;
    let textoSeleccionado = texto.substring(textStart,textEnd);


    start.textContent = `Posición Indice Inicial: ${textStart}`;
    end.textContent = `Posicion Indice Final: ${textEnd}`;

    seleccionado.textContent = `El texto que has seleccionado es: ${textoSeleccionado}`;
})

