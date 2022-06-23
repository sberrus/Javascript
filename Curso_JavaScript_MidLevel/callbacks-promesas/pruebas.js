const boton = document.getElementById("preguntar");
const contenedor = document.getElementById("display-promise");
const title = document.querySelector(".title-promise");
const caption = document.querySelector(".content-promise");

boton.addEventListener("click", pruebaPromise);

function correct() {
    contenedor.classList.add("display-correct");
    title.textContent = "Correcto";
    caption.textContent = "El número que ha introducido es correcto";
    contenedor.classList.remove("display-incorrect");
}

function incorrect() {
    contenedor.classList.add("display-incorrect");
    title.textContent = "Incorrecto";
    caption.textContent = "El número que ha introducido es incorrecto";
    contenedor.classList.remove("display-correct");
}
function pruebaPromise() {

    let numero = prompt("Escribe el número 1 y será resuelta, sino, devolvera un error.")
    const promesa = new Promise((resolve, reject) => {
        if (numero == 1) resolve(correct());
        else reject();
    })
    promesa.catch((e)=>{
        incorrect()
    })
}

