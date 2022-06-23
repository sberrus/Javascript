/*
    Los objetos math son funciones que nos permiten realizar operaciones matemáticas complejas para usarlas dentro de nuestros programas de JavaScript.
*/

/*
    Funcion Math.sqrt():

        Haciendo el uso de esta función podemos indicarle al programa que nos devuelva la raiz cuadrada del numero o variable numerica enviada como parámetro.
*/

function raizCuadrada() {
    numero = 25;

    raiz = Math.sqrt(numero);

    document.write(raiz);
}

/*
    Función Math.cbrt():

        Funciona igual que la función sqrt() pero devolviendo la raiz cubica del parámetro.

*/

function raizCubica() {
    numero = 25;
    
    raiz = Math.cbrt(numero);
    
    document.write(raiz);
}

/*
    Function max():

        Con esta función podemos enviarle números como parámetro y esta función nos devolvera el valor más alto.
*/

function valorMaximo() {
    resultado = Math.max(2,3,1,213,4,5,346)

    document.write(resultado);
}

/*
    Función min():

        Con esta función le indicamos al programa que nos devuelva el valor más pequeño de los números que enviemos como parámetro. Esta función tmabién nos devuelve valores negativos.
*/

function valorMinimo() {
    resultado = Math.min(2,-3,5,654);
    
    document.write(resultado);
}

/*
    Función random():

        Con esta función indicamos al programa que nos devuelva un valor pseudo-aleatorio entre 0 y 1.
*/
function numeroAleatorio() {
    numero = Math.random()*100;
    toFixed = numero.toFixed(); // se le aplica la función toFixed() para que nos muestre solo el valor de 0 a 1000 

    round = Math.round(numero); // devuelve un valor redondeado sin decimales pero contando el número 0 y el 100. Se explica a continuación.
    document.write(`Resultado de 0 a 1000 con la función toFixed(): <b>${toFixed}</b> <br> <br>
    Resultado de 0 a 1000 con la función Math.round(): <b>${round}</b>`);
}

/*
    Función .round():

        Con esta función indicamos al programa que nos devuelva el valor enviado como parámetro redondeado, sin decimales. La principal pecualiaridad de esta función es que al momento de redondear el número redondeara al valor entero que tenga mas cerca, de manera que se queremos aplicar esta función a un valor 1.499, esta función redondearia hacia el número 1, de ser el numero 1.511 este redondeara al 2 ya que estaría más cerca de este último. 
*/

/*
    Función floor():

        Con esta función indicamos al programa que redondée siempre hacia el número entero que tenga hacia abajo, de manera que si el valor enviado como parámetro es 1.99999 esta función redondeara 1 debido a que redondea hacia el número entero inferior.
*/

/*
    Función .trunc():

        Con esta función indicamos al programa que simplemente elimine los decimales del valor que indicamos como parámetro. Devolvería el mismo valor que cuando usamos la función floor(). 
*/

const redondeando = () =>{
    decimal = 3.4999999;
    segundoDecimal = 3.511111;

    round = Math.round(decimal);
    floor = Math.floor(decimal);
    trunc = Math.trunc(decimal);

    segundoRound = Math.round(segundoDecimal);
    segundoFloor = Math.floor(segundoDecimal);
    segundoTrunc = Math.trunc(segundoDecimal);

    document.write(`
    __________Valor 1: <b>${decimal}</b><br><br>
    Redondeado con función round: <b>${round}</b><br>
    Redondeado con función floor: <b>${floor}</b><br>
    Redondeado con función trunc: <b>${trunc}</b><br><br>
    __________Valor 2: <b>${segundoDecimal}</b><br><br>
    Redondeado con función round: <b>${segundoRound}</b><br>
    Redondeado con función floor: <b>${segundoFloor}</b><br>
    Redondeado con función trunc: <b>${segundoTrunc}</b><br>
    `);
}

redondeando();