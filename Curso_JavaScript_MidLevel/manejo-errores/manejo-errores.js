const boton = document.getElementById("error");
const opcion = document.getElementById("opcion");

boton.addEventListener("click",error)

function error(){
    try{
        if(opcion.value == "error"){
            throw {
                tipo: "error de su mare",
                info: "la concha de la lora"
            }
        } else if(opcion.value == "!error"){
            alert("todo correcto")
        }
    }catch(error){
        console.log(error)
        alert(error)
    }
}