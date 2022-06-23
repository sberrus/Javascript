const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const materia = document.getElementById("materia");
const enviar = document.getElementById("enviar");
const resultado = document.querySelector(".resultado");

enviar.addEventListener("click", (e) => {
  e.preventDefault();
  let error = validarCampos();
  if (error[0]) {
    resultado.innerHTML = error[1];
    resultado.classList.add("red")
  } else {
    resultado.innerHTML = "Solicitud enviada correctamente";
    resultado.classList.add("green")
    resultado.classList.remove("red")
  }
})

const validarCampos = () => {
  let error = [];
  if (nombre.value.length < 5) {
    error[0] = true;
    error[1] = "El nombre no puede contener menos de 5 caractéres";
    return error;
  } else if (nombre.value.length > 40) {
    error[0] = true;
    error[1] = "El nombre no puede contener más de 40 caractéres";
    return error;
  } else if (correo.value.length < 5 ||
            correo.value.length > 40 ||
            correo.value.indexOf("@") == -1||
            correo.value.indexOf(".") == -1){
    error[0] = true;
    error[1] = "El mail es inválido";
    return error;
  } else {
    error[0] = false;
    return error;
  }
}