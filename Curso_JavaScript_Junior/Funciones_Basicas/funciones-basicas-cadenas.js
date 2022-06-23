/*########## Funciones y propiedades básicas de JavaScript##########*/

/*
    Concatenar Cadenas y Nímeros.

    Tanto el operador "+" y la funcion .concat() permiten enlazar cadenas y numeros en una nueva varaible 
*/

function concatenarCadenasNumeros(){
    let variable1 = "Hola ";
    let variable2 = 3;
    let mensaje = variable1 + variable2; // mensaje = "Hola 3"
}

/* Siempre hay que recordar que al momento de concatenar dos cadenas hay que indicar los espacios en alguna de las cadenas, de lo contrario, el programa las concatenara pegadas.*/

function concatenarSinSeparacion(){
    let mensaje1 = "Hola";
    let mensaje2 = "Mundo";
    let mensaje = mensaje1 + mensaje2; // mensaje = "HolaMundo"
}

/* La otra manera más habitual es concatenar literalmente una cadena ... + " " + ... con el espacio intercalado de manera que haga la función del espacio en blanco. */

function agregarEspacio() {
    let mensaje1 = "Hola";
    let mensaje2 = "Mundo";
    let mensaje = mensaje1 + " " + mensaje2; // mensaje = "Hola Mundo"
}

/*
    Funcion .toUpperCase():

        Mediante esta función podemos alterar la cadena de texto y volverla toda en Mayúsculas.
*/

function volverMayusculas() {
    let mensaje1 = "Hola";
    let mensaje2 = mensaje1.toUpperCase(); // mensaje2 = "HOLA"
}

/**
    Función .charAt():

        Obtiene el carácter que se encuentra en la posición indicada en el parámetro de la función (dentro de los paréntesis). Devuelve mayúsculas o minúsculas respectivamente de su instrucción.
*/

function buscarLaPosicionDeUnCaracter() {
    let mensaje = "Hola";
    let letra = mensaje.charAt(0); // letra = H
    letra = mensaje.charAt(2);     // letra = l
}
/**
  Función .indexOf(caracter):

        Esta función permite saber la posición en la que se encuentra el caracter indicado como argumento. Si la cadena contiene varios caracteres iguales a la indicada en la función, esta devuelve el primer aracter que se encuentre de izquierda a derecha respectivamente. Si la función no consigue el carácter indicado como parámetro en la cadena, este devuelve -1.
 */

function buscarPosicionCaracter() {
    let mensaje = "Hola";
    let posicion = mensaje.indexOf('a'); // posicion = 3
    posicion = mensaje.indexOf('b');     // posicion = -1
}

 /**
       Función .lastIndexOf(caracter):
   
            Esta función funciona igual que la anterior .indexOf(). Con la difernecia de ques esta realiza el recorrido de derecha a izquierda de la cadena a la que se le aplica dicha propiedad.
  */

function buscarCaracteresinversamente() {
    let mensaje = "Hola";
    let posicion = mensaje.lastIndexOf('a'); // posicion = 3
    posicion = mensaje.lastIndexOf('b');     // posicion = -1
}

/*
    Función .subString(inicio,final):

        Esta función nos permite extraer una porcion de la cadena a la que se le aplica comenzando desde la posicion indicada como parámetro.
*/

function extraerCadena() {
    let mensaje = "Hola Mundo";
    let porcion = mensaje.substring(2); // porcion = "la Mundo"
    porcion3 = mensaje.substring(5);     // porcion = "Mundo"
    porcion2 = mensaje.substring(7);     // porcion = "ndo"
}

/*  Si esta función contiene un solo valor como parámetro, el programa extraera la cadena desde el índice indicado en el mismo, pero, si también le indicas el segundo parámetro, el programa extraera la fracción de texto empezando desde el índice delprimer pàrámetro y acabando en el índice del segundo.*/

function extraerCadenaConFinal() {
    let mensaje = "Hola Mundo";
    let porcion = mensaje.substring(1, 8); // porcion = "ola Mun"
    porcion = mensaje.substring(3, 4);     // porcion = "a"
}

/* Si se le indica como primer parámetro un número negativo este devolvera la cadena entera. */

function indiceNegativo() {
    let mensaje = "Hola Mundo";
    let porcion = mensaje.substring(-2); // porcion = "Hola Mundo"
}

/* 
    Función .split(separador):

        Con esta función podemos volver una cadena de texto en un array de cadenas de texto, como argumento indicaremos el separador que va a utilizar la función para separar las cadenas. Si usamos por ejemplo un espacio " ", el array se compondra de todos los elementos que esten dentro de estas separadas por espacios. Sin embargo, si no indicamos nada en el parámetro, este separara la cadena carácter por carácter. 
*/

function separadorCadenaEspacio() {
    let mensaje = "Hola Mundo";
    let porcion = mensaje.substring(5, 0); // porcion = "Hola "
    let porcion2 = mensaje.substring(0, 5);     // porcion = "Hola "
}

function separadorLetras() {
    let palabra = "Hola";
    let letras = palabra.split(""); // letras = ["H", "o", "l", "a"]
}

/*
    Función .startsWith() y endsWith():
        
        Esta función devuelve un booleano si la cadena a la que se le aplica la función empieza con la misma cadena que que se indica en el argumento.
*/

function comienzaCon(){
    let cadena = "Samuel Alberto";
    let cadena2 = "Hellen Aiker";

    let return1 = cadena.startWith(cadena2); // devuelve false porque no empieza de igual.
    let return2 = cadena.startWith(cadena); // devuelve true porque la cadena si empieza igual que la cadena del argumento.
}

/*
    La función endsWith() funciona igual que la función startWith con la diferencia de que esta compara la última cadena de la cadena que se le aplica.
*/

function terminaCon() {
    let cadena = "Samuel Alberto";
    let cadena2 = "Hellen Aiker";

    let return1 = cadena.endsWith(cadena2); // devuelve false porque no termina igual.
    let return2 = cadena.endsWith(cadena); // devuelve true porque la cadena si empieza igual que la cadena del argumento.
}

/*
    Función includes():

        Con esta función indicamos al programa que busque la cadena indicada en el parámetro en la cadena a la que se le aplica, independientemente de la posición que ocupe.
*/

function buscarEn() {
    let cadena = "Samuel Alberto";
    let cadena2 = "Hellen Aiker";
    let cadena3 = "Samuel";

    let return1 = cadena.includes(cadena); // retorna true porque si se encuentra la cadena enviada como argumento en la cadena a la que se le aplica.
    let return2 = cadena.includes(cadena2); // retorna false porque la cadena indicada como argumento no se encuentra dentro de la cadena a la que se le aplica.
    let return3 = cadena.includes(cadena3); // retorna true por el mismo motivo que en la primera.
}

/*
    Función padStart(cantidad_caracteres , caracter) y padEnd(cantidad_caracteres , caracter):

        Con estas funciones indicamos al programa que rellene la cadena con tantos caracteres hagan falta para que complete la cantidad indicada como primer argumento con los caracteres indicados en el segundo. padStart() funciona para rellenar desde el inicio hasta el final y padEnd() para rellenar desde el final hasta el inicio. Hay que tomar en cuenta que si la cadena cuenta con 3 caracteres y queremos hacer un total de 10, los 3 caracteres serán contados asi que la función rellenara los 7 caracteres restantes.
*/

function rellenar() {
    let cadena = "Samuel";

    texto = cadena.padStart(10, "#").padEnd(14, "#");
    alert(texto);
}

/*
    Función .repeat():

        Con esta función indicamos al programa que repita la cadena a la que se le aplica, la cantidad de veces indicada como argumento.
*/

function repetirPalabras() {
    cadena = prompt("Palabra a repetir") + "<br>";
    cantidad = prompt("dime la cantidad de putos que te dire");

    document.write(cadena.repeat(cantidad)); // devolvera la cantidad de "puto " indicada en cantidad
}

repetirPalabras();