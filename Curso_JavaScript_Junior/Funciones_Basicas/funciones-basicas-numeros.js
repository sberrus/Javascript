/*##### Funciones básicas para los números #####*/

/*
    Not a Number (NaN):

        en JavaScript se utiliza el valor NaN para devolver un valor no númerico.
*/

function valorNaN() {
    var numero1 = 0;
    var numero2 = 0;
    alert(numero1/numero2); // se muestra el valor NaN
}

/*
    Función isNan:

        Con esta función podemos obtener si un valor es númerico o no.
*/

function saberSiEsUnValorNumerico() {
    var numero1 = 0;
    var numero2 = 0;
    if(isNaN(numero1/numero2)) {
      alert("La división no está definida para los números indicados");
    }
    else {
      alert("La división es igual a => " + numero1/numero2);
    }
}

/*
    Valor infinity:

        Este es un valor que se muestra si el valor es infinito (Ya sea positivo o negativo). 
*/

function valorInfinite() {
    var numero1 = 10;
    var numero2 = 0;
    alert(numero1/numero2); // se muestra el valor Infinity
}

/*
    Función .toFixed(digitos):

        Con esta función podemos indicar al programa que devuelva un valor con una cantidad establecida dentro de los parámetros de la función. Esto significa que si en los argumentos enviamos como valor (3) este devolvera un valor float (En el caso de que sea float) con 3 dígitos decimales.
*/

function establecerDecimales() {
    var numero1 = 4564.34567;
    numero1.toFixed(2); // 4564.35
    numero1.toFixed(6); // 4564.345670
    numero1.toFixed(); // 4564
}