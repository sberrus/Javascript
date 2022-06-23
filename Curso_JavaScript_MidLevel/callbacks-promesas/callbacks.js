/**
 * ##### USO DE CALLBACKS EN JAVASCRIPT
 */

 /**
  * Básicamente podriamos indicar que una callback es una función que se envia omo parámetro a otra función para luego poder ser usada.
  */


  // se declara la primera función que tendra el callback
 function prueba(callback){
     callback("pedro");
 }
 // se declara la segunda función que tendra el comportamiento del callback
 function decirNombre(nombre){
     console.log(nombre);
 }


 // se llama a la función que tendra un callback que utilizara elementos de la función que ha sido llamada.
 prueba(decirNombre)


 /**
  * Ejemplo de Callbacks en Javascript (sigo sin entenderlo)
  */

class Persona {
    constructor(nombre,instagram){
        this.nombre = nombre;
        this.instagram = instagram;
    }
};

const data = [
    ["Samuel Berrus","@laqmazunkamba"],
    ["Samuel asd","@laqmasdasdaamba"],
    ["asd Berrus","@laqasdasd"],
    ["Samuel asd Berrus"]
];

const personas = [];

for(let i = 0; i < data.length;i++){
    personas[i] = new Persona(data[i][0],data[i][1]);
};

obtenerPersonas = (id,cb)=>{
    if(personas[id] == undefined){
        cb("no se ha encontrado la persona")
    } else{
        cb(null,personas[id],id)
    }
};


const obtenerInstagram = (id,cb) =>{
    if(personas[id].instagram == undefined){
        cb("no se ha encontrado el instagram")
    } else{
        cb(null,personas[id].instagram)
    }
};

obtenerPersonas(3,(err,persona,id)=>{
    if(err){
        console.log(err)
    } else{
        console.log(persona.nombre);
        obtenerInstagram(id,(err,instagram)=>{
            if(err){
                console.log(err)
            }else{
                console.log(instagram)
            }
        });
    }
});

