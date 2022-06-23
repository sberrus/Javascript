const objeto = {
    mensaje_con_delay: "Este es el valor que esperará la función"
};
console.log("Este se ejecuta antes del bloque asincrono")
const obtenerInformacion = () => {

    return new Promise((resolve, reject) => {

        setTimeout(() => { resolve(objeto) }, 3000); // hasta que el temporizador no acabe y ejecute el código, este no devolvera nada en consola.
    })
}

/* obtenerInformacion().then((informacion)=>{console.log(informacion)})
 */

const mostrarResultado = async () => { // se le indica a la función que será asíncrona por ende se ejecutará en un hilo separado del principal.

    resultado = await obtenerInformacion(); // el bloque parará en este punto hasta que la funcion obtener información retorne el valor que se le pide. Cuando la función resuelva todo el bloque correspondiente continuará con su ejecución.

    console.log(resultado); // se hace uso del valor que devuelve la función obtenerInformacion(). Si no se hace uso del await en ese punto el bloque devolvera una promesa pendiente
}

mostrarResultado(); // esto se termina de ejecutar después de que la funcion haya resuelto todo lo que tenga programado.



console.log("esto se ejecuta después del bloque asincrono");


const ejemploAsync = (text) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(text) }, Math.random() * 200);
    })
}


/**
 * El bloque inferior mostrar los resultados de manera aleatoria debido a que el temporizador al estar el tiempo de manera aleatoria simplemente mostrará primero al que haya tenido menos tiempo.
 */
ejemploAsync("1: Samuel").then(resultado => console.log(resultado));
ejemploAsync("2: Pedro").then(resultado => console.log(resultado));
ejemploAsync("3: Diana").then(resultado => console.log(resultado));


/**
 * De esta manera indicamos al programa que no devuelva nada hasta que cada uno de los pasos haya finalizado. Y hasta que no ocurra no terminará la función de ejecutarse.
 */

const mostrarEjemplo = async () => {
    let data1 = await ejemploAsync("1: Samuel ordenado");
    let data2 = await ejemploAsync("2: Pedro ordenado");
    let data3 = await ejemploAsync("3: Diana ordenado");

    console.log(data1);
    console.log(data2);
    console.log(data3);
}

mostrarEjemplo();