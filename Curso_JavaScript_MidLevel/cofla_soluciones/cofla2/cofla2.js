alumnos = [{
    nombre: "lucas Dalto",
    email: "lucasDalto@gmail.com",
    materia: "Física 3"
}, {
    nombre: "Elgue Pelao",
    email: "ElguePelao@gmail.com",
    materia: "Física 3"
}, {
    nombre: "Mel Guebo",
    email: "MelGuebo@gmail.com",
    materia: "Física 3"
}, {
    nombre: "Rosa Meltrozo",
    email: "RosaMeltrozo@gmail.com",
    materia: "Física 3"
}, {
    nombre: "Debora Meltrozo",
    email: "DeboraMeltrozo@gmail.com",
    materia: "Física 3"
}]

const boton = document.querySelector(".boton-confirmar");


for (alumno in alumnos) {
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    let htmlcode = `

        <div class="grid-item nombre">${nombre}</div>
        <div class="grid-item email">${email}</div>
        <div class="grid-item materia">${materia}</div>
        <div class="grid-item semana">
            <select name="" id="" class="semana-elegida">
                <option value="Semana 1">Semana1</option>
                <option value="Semana 2">Semana2</option>
            </select>
        </div>

`
    document.querySelector(".grid-container").innerHTML += htmlcode;
}

boton.addEventListener("click", () => {
    let confirmar = confirm("¿Seguro que deseas guardar los cambios?");
    if (confirmar) {
        let elementos = document.querySelectorAll(".semana");
        let semanasElegidas = document.querySelectorAll(".semana-elegida")
        for (elemento in elementos) {
            semana = elementos[elemento];
            semana.innerHTML = semanasElegidas[elemento].value
        }
        boton.style.display = "none"
    }
})