/**
 * Uso de las promesas en JS
 */

let nombre = "pedro"; // variable para ejemplo
let flag = null;

const promesa = new Promise((resolve, reject) => { // se crea el objeto Promise con sus callbacks.
    // condicional para saber si la variable es "pedro", en caso contrario envia un error.
    if (nombre != "pedro") reject("Lo siento, el nombre no es pedro") // reject devuelve un error con el texto que deseemos.
    else resolve(nombre) // resolve devuelve los datos que deseemos mediante el método then(callback)
});

// para acceder a lo que almacena el objeto de tipo promise() promesa, se utiliza el método promise.then(callback) que a su vez tiene un callback que es el que tendrá el resultado en caso de estar resuelta la operación.
promesa.then((resultado) => {
    console.log(resultado);
});

const semaforo = new Promise((resolve, reject) => {
    if (flag == true) resolve("eres tu crack");
    else { reject("La vida no esta siendo buena contigo bb") }
});

// para obtener los resultados de la promesa se hace mediante el uso del método then, En cambio el reject lanza el error asi lo muestres o no. Para poder trabajar con los errores se hace uso del método .catch() al metodo .then() para poder, si se desea, trabajar con el error

semaforo.then((res) => {
    console.log(res);
}).catch((e) => {
    console.log(e + " [Esto es un error manejado con .catch(callback)]");
});


/**
 * Para ver porque el uso de las promesas es mejor para trabajar las callbacks haremos el mismo algoritmo que se hizo en el documento callbacks.html pero con el uso de promesas
 */

/**
 * ESTUDIAR PARA APLICAR ESTE CONCEPTO EN NUR
 */

class Persona {
    constructor(nombre, instagram) {
        this.nombre = nombre;
        this.instagram = instagram;
    }
};

const data = [
    ["Samuel Berrus", "@laqmazunkamba"],
    ["Samuel asd", "@laqmasdasdaamba"],
    ["asd Berrus", "@laqasdasd"],
    ["Samuel asd Berrus"]
];

const personas = [];

for (let i = 0; i < data.length; i++) {
    personas[i] = new Persona(data[i][0], data[i][1]);
};

obtenerPersona = (id) => {
    return new Promise((resolve, reject) => {
        if (personas[id] == undefined) reject("No se ha encontrado la persona");
        else { resolve(personas[id]) }
    })
}
const obtenerInstagram = (id) => {
    return new Promise((resolve, reject) => {
        if (personas[id].instagram == undefined) reject("No se ha encontrado el instagram");
        else { resolve(personas[id].instagram) }
    })
};

let id = 3
obtenerPersona(id).then((persona) => {
    console.log(persona.nombre);
    return obtenerInstagram(id);
}).then((instagram)=>{
    console.log(instagram)
}).catch((e)=>{
    console.log(e)
})