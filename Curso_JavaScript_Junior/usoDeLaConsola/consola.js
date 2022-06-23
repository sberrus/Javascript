/*
    ###########################################
    ########## Funciones de Registro ##########
    ###########################################
*/

/*
    Función de consola .assert():

        No se usa en la actualidad pero con esta función podemos indicarle al programa de que si la afirmación que va como parámetro es falsa muestre en consola un error.
        [En deshuso]
*/

const mostrarErrorLogicoEnConsola = () =>{
    console.assert(5 == 2);
}

/*
    Función de consola .clear():

        Con esta función limpiamos todo lo que este en la consola hasta ese momento.
*/

const limpiarConsola = () => {
    console.assert(5 == 2);
    console.assert(5 == 2);
    console.assert(5 == 2);
    console.assert(5 == 2);
    // para limpiar los errores en la consola usar "console.clear()" en la consola del navegador.
}

/*
    Función console.error():

        Con esta función indicamos a la consola que muestre un mensaje de error (Parecido al que se ve cuando hay un error en el código cuando se muestra en consola).
*/

function mostrarErrorEnConsola() {
    console.error("Esto es un mensaje de error generado manualmente para indicarlo en la consola.")
}

/*
    Función console.info():

        Función parecida que console.log(). En escencia son lo mismo, solo cambian ciertas cosas que no veremos en este momento pero que tampoco son relevantes (creo).
*/

function mostrarMensajeInformativo() {
    console.info("Mensaje informativo generado para la consola.")
}

/*
    Función console.table():
        
        Con esta función indicamos al navegador que cree una tabla con el objeto que se le envia como parametro al table(), Tiene que ser un objeto y esté nos mostrará una tabla con el index y el valor de cada posicion del objeto.
*/

function mostrarTablaEnConsola() {
    console.table([1,2,3,1,2,3,1,2,3,"hola", "que tal", "Asi se crea una tabla en consola"])
}

/*
    Función console.warn():

        Este funciona como la función console.error() pero con la diferencia de que este muestra una advertencia con un aspecto diferente.
*/

function mostrarAdvertencia() {
    console.warn("Advertencia generada desde  consola.js para la consola.");
}

/*
    Función console.dir():

        Con esta función podemos visualizar el contenido de un objeto pero mostrandose como una barra desplegable. [en deshuso]
*/

function mostrarBarraDesplegaleEnConsola() {
    console.dir([1,2,3,1,2,3,1,2,3])
}

/*
    #########################################
    ########## Funciones de conteo ##########
    #########################################
*/
/*
    Funciones console.count() y console.countReset():

        Con estas funciones podemos programar que el programa cuente mediante la consola cuantas veces se ejecuta una función con la funcion .count(). Para indicar que resetee la cuenta se usa la función .countReset().
*/

class Pulsador {

    contar = () =>{
        console.count();    
    }
    resetear = () =>{
        console.countReset();
    }
}

let boton = new Pulsador();

const contar = () =>{

    boton.contar();
}

const resetearContador = () =>{
    boton.resetear();
}

/*
    #############################################
    ########## Funciones de agrupación ##########
    #############################################
*/

/*
    Funcion console.group() console.groupEnd() y console.groupCollapsed():

        Con esta función podemos establecer un espacio en la consola en la que podamos escribir código o hacer ciertas funciones en un lugar que podemos desplegar o colapsar para poder revisar los códigos y los errores de manera eficaz.

        Si ya hemos terminado de usar un group() pero no queremos eliminarlo pero tampoco seguir esciribiendo codigo dentro de este mismo group(), podemos utilizar la funcion console.groupEnd(), con esta función indicamos a la consola que termine de trabajar en el grupo actual y que vuelva al grupo anterior que lo contiene de manera que podemos seguir trabajando con el mismo grupo. 

        Para crear un grupo pero que no se despliegue entero podemos hacer uso de la función console.groupCollapsed(), que lo que le indica a la consola es que cree el grupo pero que no lo despliegue predeterminadamente sino que se encuentre por defecto colapsado (reducido).
*/

function crearCodeWorkspace() {
    console.group("Nombre del grupo");
    console.log("En este espacio de la consola podemos trabajar y hacer test de ciertas caracteristicas sin que se visualize en el resto de la consola, haciendo que la consola se vea mas limpia");
    console.error("De este modo independientemente de cuanto código necesitemos tener en un espacio controlado de manera que no se pierda pero que nos moleste tenerle siempre a la vista.");
    console.warn("Siempre podemos utilizar este espacio para que deje de molestar y asi trabajar otras cuestiones en otros .group()");

    console.groupCollapsed("Grupo colapsado");
    console.warn("Este grupo se crea pero aparece colapsado predeterminadamente.")
}

/*
    ###################################################
    ########## Funciones de temporizacion: ##########
    ###################################################
*/

/*
    Función console.time() console.timeLog() console.timeEnd():

        Esta función se encarga de iniciar un temporizador. El temporizador empieza al momento de nosotros indicar la función time().
        
        El tiempo transcurrido no se muestra en pantalla, para hacerlo tenemos que hacer uso de la función console.timeLog(), que es la encargada de mostrarnos en ms la cantidad de tiempo transcurrido desde que se ha inicializado el contador.

        Con el uso de la funcion console.timeEnd() indicamos a la consola que pare el contador y que nos muestre el tiempo con el que ha finalizado.
*/

class Cronometro {

    iniciarCronometro() {
        console.time();    
    };

    mostrarTiempo() {
        console.timeLog();
    };

    finalizarCronometro(){
        console.timeEnd();
    };
}

const UsarCronometro = () =>{
    let cronometro = new Cronometro();

    cronometro.iniciarCronometro();
}

const mostrarTiempo = () =>{
    let cronometro = new Cronometro();

    cronometro.mostrarTiempo();
}

const pararCronometro = () =>{
    let cronometro = new Cronometro();

    cronometro.finalizarCronometro();
}

/*
    ###########################################################
    ########## Estilos a los elementos de la consola ##########
    ###########################################################
*/

/*
    En cierto modo los textos que se muestran en la consola se comportan como los elementos en linea de HTML y a estos también le podemos dar instrucciones de estilo css. Si es verdad que admite ciertas instrucciones CSS no las acepta todas ya que en si la consola no es un elemento para darle estilos. Aunque siempre es bueno saber que podemos modificar el aspecto de las cosas para diferenciar contenido y ver cosas de manera más comoda y eficaz. Para hacer uso de los estilos en la consola tenemos que indicar en los argumentos dentro de las comillas primero el signo de porcentaje y una c "%c", seguido del String al que le queremos dar estilos como primer argumento y en el segundo argumento de la función, el estilo que queremos aplicar.
*/

function mostrarTextoConEstilo() {
    let texto = prompt("Escribir el texto con estilo para consola")
    console.log(`%c ${texto}`,"color:red; background: black; padding: 15px; border: 1px solid red");
}