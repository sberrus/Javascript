const button = document.getElementById("boton");



button.addEventListener("click",()=>{
    let resultado, mensaje;
    try{
        resultado = parseInt(document.getElementById("nota").value);
        if(resultado.isNaN()){
            throw "Gracioso el nene"
        }
        verificacion();
    } catch(e){
        resultado = "¿SOS GRACIOSO?"
        mensaje = "Ahora estas reprobado jose ramon"
    }
    abrirModal(resultado,mensaje);
})

const verificacion =()=>{
    
}

const abrirModal = (res,msg) =>{
    console.log(res);
    console.log(msg);
}