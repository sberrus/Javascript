const ArrayAsociativo =
{
    nombre: "Esto es un Array Asociativo"
};


const Json =
{
    "nombre": "Esto es un JSON",
};

console.log(ArrayAsociativo);
console.log(JSON);

const JSONSerializado = '{"nombre":"samuel","apellido":"Berrus"}'; // este seria un ejemplo de un array serializado

let JsonSerializado = JSON.stringify(Json); // método para serializar un JSON para poder enviarlo a otro sitio.

console.log("json Serializado: " + JsonSerializado);

let jsonDeserializado = JSON.parse(JsonSerializado); // método para parsear el JSON y poder utilizar sus valores en Javascript.

console.log(jsonDeserializado)

console.log("%c SI NO ENTIENDES UNA MIERDA DE LO QUE PASA ARRIBA VE AL ARCHIVO JS PARA VER LOS COMENTARIOS","color: red; font-size: 1.5em; background: black")