
/* setTimeout() y clearTimeout() */

const disparador = document.getElementById("disparador");
const cancelar = document.getElementById("parar");
const aviso = document.getElementById("aviso");

disparador.addEventListener("click", () => {
    aviso.textContent = "TEMPORIZADOR INICIALIZADO..."
    temporizador = setTimeout(() => {
        alert("Se ha ejecutado el temporizador");
        aviso.textContent = "TEMPORIZADOR TERMINADO";
    }, 4000);
})
cancelar.addEventListener("click",()=>{
    clearTimeout(temporizador);
    aviso.textContent = "TEMPORIZADOR CANCELADO..."
})

/* setInterval() y clearInterval() */

const inicio = document.getElementById("iniciarCronometro");
const parar  = document.getElementById("pararCronometro");
const reiniciar = document.getElementById("reiniciar");
const cronometro = document.getElementById("cronometro");
tiempoTranscurrido = 0;
minutos = 0;

parar.setAttribute("style","display:none");
reiniciar.setAttribute("style","display:none");

inicio.addEventListener("click",()=>{
    inicio.setAttribute("style","display:none");
    parar.removeAttribute("style","display:none");
    reiniciar.setAttribute("style","display:none");
    cronometro.textContent = `Tiempo: ${minutos}min  ${tiempoTranscurrido}seg`
    tiempoCronometro = setInterval(() => {
        if(tiempoTranscurrido == 60){
            minutos++;
            tiempoTranscurrido = 0;
            cronometro.textContent = `Tiempo: ${minutos}min  ${tiempoTranscurrido}seg`
        } else{
            cronometro.textContent = `Tiempo: ${minutos}min  ${tiempoTranscurrido}seg`
            tiempoTranscurrido++;
        }
    }, 1000);
})

parar.addEventListener("click", ()=>{
    inicio.textContent = "Continuar";
    inicio.removeAttribute("style","display:none");
    reiniciar.removeAttribute("style","display:none");
    parar.setAttribute("style","display:none");
    clearInterval(tiempoCronometro);
})

reiniciar.addEventListener("click",()=>{
    inicio.textContent="Iniciar Cronómetro";
    reiniciar.setAttribute("style","display:none");
    tiempoTranscurrido = 0;
    minutos = 0;
    cronometro.textContent =`Tiempo: ${minutos}min  ${tiempoTranscurrido}seg`
})