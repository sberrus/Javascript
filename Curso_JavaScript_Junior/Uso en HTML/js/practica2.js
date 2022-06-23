let nombre = "";
let apellido = "";
let sexo = ""
let edad = 0
let suerte = 0;
let repeat = true;

// peticion de datos
function pedirDatos(){
    nombre = prompt("Escribe tu nombre: ");
    apellido = prompt("Escribe tu apellido: ");    
}

//peticion de sexo
function pedirSexo() {
    sexo = prompt("Indique si eres hombre o mujer: ");
    if (sexo == "hombre") {
        suerte += 15;
    } else if (sexo == "mujer") {
        suerte += 50;
    } else {
        alert("El dato introducido es incorrecto");
        pedirSexo();
    }
}

// peticion de la edad.
function pedirEdad() {
    edad = prompt("Indique su edad:")
    if (edad < 18) {
        alert("Lo sentimos. No puedes participar si eres menor de edad.");
    } else if (edad < 65) {
        suerte += 25;
    } else if (edad > 65){
        suerte += 45;
    } else if (edad < 0 || edad > 100){
        alert("La edad introducida no es correcta.")
        pedirEdad();
    } else {
        alert("El dato no ha sido introducido de manera correcta.")
        pedirEdad();
    }
}


alert("Bienvenidos. A continuación se le pediran unos datos para inicializar el sistema de asignación de suertes.")
pedirDatos();
pedirEdad();
pedirSexo();
flag = false;

document.write("Buenas, " + nombre + " " + apellido + ". El sistema de suertes le ha asignado la cnatidad de :" + suerte);