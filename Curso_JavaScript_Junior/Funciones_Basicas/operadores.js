/*Operadores de negación*/

/* Para introducir un operador de negación hay que introducir el caracter "!" previo a la variable. Y devolvera el valor contrario al de la variable */

function negacion(){
    var visible = true;
    alert(!visible);  // da como respuesta false
}

/*
    Si es verdad que es fácil saber el valor contrario de una variable booleana, ¿que pasa con el resto de tipos de variables?

    -   si es númerica se vuelve false si el valor es 0, si es diferente de 0 (positivo, negativo etc...) mostrara true.

    -   Si la variable es una cadena, devolvera true si al cadena esta vacia, y false en caso contrario.
*/ 

function negacion_Numerica_Cadena(){

    var cantidad = 0;
    vacio = !cantidad; // vacio = true
    
    cantidad = 2;
    vacio = !cantidad;  // vacio = false

    var mensaje = "";
    mensajeVacio = !mensaje;  // mensajeVacio = true

    mensaje = "Bienvenido";
    mensajeVacio = !mensaje;  // mensajeVacio = false

}

/*
    Operadores AND y OR:

    -   Para no alargarlo demasiado resumire que funciona de la misma manera que Java. && para el operador AND y || para el operador OR

*/

function AND_OR(){

    var numero_uno = -1;
    var numero_dos = 2;

    if (numero_uno >= 0 && numero_dos >= 0) {
        alert("Ambos números son positivos");
    }else if (numero_uno >= 0 || numero_dos >= 0) {
          alert("Al menos uno de los números es positivo");
    } else {
        alert("Ninguno de los números es positivo")
    }
    // output: Al menos uno de los números es positivo
}

/* 
    Operadores matemáticos:

    -   Estos funcionan de igual manera que en Java la suma(+), la resta(-), la división(/) y la multiplicación(*).

    -   En JavaScript existe el operador módulo, este funciona de manera que devuelve como valor el resto de la división de dicho número.

*/

function operadorModulo(){
 
    var numero1 = 10;
    var numero2 = 5;
    resultado = numero1 % numero2; // resultado = 0

    numero1 = 9;
    numero2 = 5;
    resultado = numero1 % numero2; // resultado = 4

}

/* 
    Característica especial de JavaScript:
    
    -   Con JavaScript podemos combinar el operador de asignación con el matemático para abreviar la suma de variables.

*/ 

function abreviacionOperadores(){

    var numero1 = 5;
    numero1 += 3;  // numero1 = numero1 + 3 = 8
    numero1 -= 1;  // numero1 = numero1 - 1 = 4
    numero1 *= 2;   // numero1 = numero1 * 2 = 10
    numero1 /= 5;   // numero1 = numero1 / 5 = 1
    numero1 %= 4;   // numero1 = numero1 % 4 = 1

}

/*
    Operadores relacionales:

    -   Los operadores relacionales funcionan igual que en Java.


*/ 

function operadoresRelacionalesNumericos(){

    var numero1 = 3;
    var numero2 = 5;
    resultado = numero1 > numero2; // resultado = false
    resultado = numero1 < numero2; // resultado = true

    numero1 = 5;
    numero2 = 5;
    resultado = numero1 >= numero2; // resultado = true
    resultado = numero1 <= numero2; // resultado = true
    resultado = numero1 == numero2; // resultado = true
    resultado = numero1 != numero2; // resultado = false

}

function operadoresRelacionalesCadena(){

    var texto1 = "hola";
    var texto2 = "hola";
    var texto3 = "adios";

    resultado = texto1 == texto3; // resultado = false
    resultado = texto1 != texto2; // resultado = false
    resultado = texto3 >= texto2; // resultado = false

}

