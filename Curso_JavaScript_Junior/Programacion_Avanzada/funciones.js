/*
    Una función se podria resumir como un trozo de código que permite que en vez de estar escrbiendo código repetitivamente podemos crear una función que tenga unas instrucciones comunes que se puedan usar en otras partes del código. De manera que si queremos hacer un cálculo, en vez de hacer el código una y otra vez; se crea una sola vez y se hacen llamadas para que este código se ejecute en otras partes del código. Ejemplo:
*/

var resultado;

var numero1 = 3;
var numero2 = 5;

// Se suman los números y se muestra el resultado
resultado = numero1 + numero2;
alert("El resultado es " + resultado);

numero1 = 10;
numero2 = 7;

// Se suman los números y se muestra el resultado
resultado = numero1 + numero2;
alert("El resultado es " + resultado);

numero1 = 5;
numero2 = 8;

// Se suman los números y se muestra el resultado
resultado = numero1 + numero2;
alert("El resultado es " + resultado);

/*
    En vez de utilizar el codigo anterior podemos mejorarlo de mejor manera de la siguiente forma:
*/

// Se crea primero la función que hará una tarea específica.

function suma_y_muestra() {
    resultado = numero1 + numero2;
    alert("El resultado es " + resultado);
}

// se estructura el código y se hacen llamadas (uso de la función).

var resultado;

var numero1 = 3;
var numero2 = 5;

suma_y_muestra();

numero1 = 10;
numero2 = 7;

suma_y_muestra();

numero1 = 5;
numero2 = 8;

suma_y_muestra();

// cada vez que se hace un llamado se ejecutael código de la función.

/*
    ####### Argumentos y valores de retorno ######

    - Argumentos:

        Los argumentos son los valores que se envian entre paréntesis al momento de hacer una llamada a una función. Estos se envián en el orden como son ingresados, respetando siempre el orden y el tipo de los mismos. Los argumentos se ingresan dentro de los paréntesis y separados por comas. Pueden ser valores absolutos o variables.*/

function suma_y_muestra(primerNumero, segundoNumero) {
    var resultado = primerNumero + segundoNumero;
    alert("El resultado es " + resultado);
}

/*
    - Valores de Retorno:

    Los valores de retorno son los valores que queremos que devuelva una función a la hora de hacer la llamada. Si nosotros queremos guardar en una variable el resultado que da una función tenemos que hacer uso de la palabra reservada "return". La palabra reservada return hace que la función devuelva un valor que ha sido alojado dentro de una variable que se colocara después de la palabra reservada return. Por ende, al momento de hacer uso de la función el valor devuelto podemos utilizarlo dentro del código.
*/

function calculaPrecioTotal(precio) {
    var impuestos = 1.16;
    var gastosEnvio = 10;
    var precioTotal = ( precio * impuestos ) + gastosEnvio;
    return precioTotal; // la función devolvera el valor alojado en la variable precioTotal.
  }
  
  var precioTotal = calculaPrecioTotal(23.34);
  
  // Seguir trabajando con la variable "precioTotal"