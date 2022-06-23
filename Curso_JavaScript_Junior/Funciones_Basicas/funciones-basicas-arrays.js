/*#####Funciones básicas para arrays#####*/

/*
    Función .length:

        Esta función calcula el número de elementos de un array.
*/

function contarElementosArray() {
    var vocales = ["a", "e", "i", "o", "u"];
    var numeroVocales = vocales.length; // numeroVocales = 5
}

/*
    Función .concat():

        Con esta función podemos concatenar elementos a un array.
*/

function concatenarElementos() {
    var array1 = [1, 2, 3];
    array2 = array1.concat(4, 5, 6);   // array2 = [1, 2, 3, 4, 5, 6]
    array3 = array1.concat([4, 5, 6]); // array3 = [1, 2, 3, 4, 5, 6]
}

/*
    Función .join(separador):

        Esta es al función contraria a split.  En lugar de separar elementos tomando en cuenta el parámetro separador, este lo que hace es unirlos para crear una cadena de texto. El elemento separador debe indicarse, de lo contrario, el programa los juntara todo en una misma cadena.
*/

function unirElementosArray() {
    var array = ["hola", "mundo"];
    var mensaje = array.join(""); // mensaje = "holamundo"
    mensaje = array.join(" ");    // mensaje = "hola mundo"
}

/*
    Función .pop():

        Esta función elimina el último elemento del array y lo devuelve. 
*/

function extraerElementos() {
    var array = [1, 2, 3];
    var ultimo = array.pop();
    // ahora array = [1, 2], ultimo = 3
}

/*
    Función .push():

        Con esta función podemos añadir un elemento al final del array.
*/

function añadirElementoAlFinal() {
    var array = [1, 2, 3];
    array.push(4);
    // ahora array = [1, 2, 3, 4]
}

/*
    Función .shift():

        Con esta función podemos extraer el primer elemento del array y eliminarlo de la misma.
*/

function extraerPrimerElemento() {
    var array = [1, 2, 3];
    var primero = array.shift();
    // ahora array = [2, 3], primero = 1
}

/*
    Función unshift():

        Con esta función podemos añadir un elemento al principio del array y aumentar el lenght del array en 1. Es posible añadir más de un elemento con esta función.
*/

function añadirElementosAlPrincipio() {
    var array = [1, 2, 3];
    array.unshift(0);
    // ahora array = [0, 1, 2, 3]
}

/*
    Función .reverse():

        Con esta función podemos colocar al orden inverso todos los elementos del array. 
*/

function ordernarAlOrdenInversoElementos() {
    var array = [1, 2, 3];
    array.reverse();
    // ahora array = [3, 2, 1]
}

/*
    Función .sort():

        Esta función nos permite ordenar los elementos de un array en orden de diccionario. A-B-C-D-E.....X-Y-Z.
        En el caso de los números la función se encargara de ordenar los números pero tomando en cuenta el primer valor de dicho número. 
*/

function ordenarArrays() {
    cadena = ["manzana", "amarillo", "radio", "microondas", "redonddo", "coche", "botella"];
    numeros = [1,4,5,6,9,21,45,65,23,1,2,3,54,987,45456];
    
    document.write(cadena.sort() + "<br>" + numeros.sort());
}

/*
    Función filter() y forEach():

        La función filter() y forEach() son funciones que devuelven en un nuevo array los valores que cumplan ciertas características que se indican entre los paréntesis. Esta función recibe como parametro otra función que es la que se encarga de trabajar y validar los datos que se desean utilizar dentro del nuevo array.
        Lo que hace esta función es pasar valor por valor validando los requisitos de la función enviada como parametro.
*/

function filtrar() {
    let palabras = ["Samuel", "Hellen", "Griceida", "Jhonathan", "Roberto"];

    palabras.filter((palabras) => {
        document.write(palabras + "<br>");
    });
}

/*
    La principal diferencia entre las funciones forEach() y filter() es que con la función filter() podemos validar datos cosa que con forEach() no podemos.
*/

function validarDatos() {
    let palabras = ["Samuel", "Hellen", "Griceida", "Jhonathan", "Roberto"];

    resultado = palabras.filter(palabra => palabra.length > 17)

    document.write(palabras);
}

validarDatos();