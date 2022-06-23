profesor = "";

alumnos = [];

const agregarProfesor = ()=>{

    let profesor = prompt("Indique el Nombre del nuevo profesor:");
    let texto = document.createTextNode(profesor);
    let campoProfesor = document.getElementById("campoProfesor");
    campoProfesor.appendChild(texto);
}

const agregarAlumnos = (nuevoAlumno) =>{


    let texto = document.createTextNode(nuevoAlumno);
    let separacion = document.createElement("br");

    let campoAlumnos = document.getElementById("campoAlumnos");

    campoAlumnos.appendChild(texto);
    campoAlumnos.appendChild(separacion);
    campoAlumnos.appendChild(separacion);
}

const inscripcion = () => {
    if (alumnos.length >= 2){
        alert("Alcanzado el tope de alumnos para esta clase.");
    } else{
        nuevoAlumno = prompt("Indicar nombre de nuevo alumno");

        alumnos.push(nuevoAlumno);
        agregarAlumnos(nuevoAlumno);
    }
}