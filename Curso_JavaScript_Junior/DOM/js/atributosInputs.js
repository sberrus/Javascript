/*
    ###############################################
    ##### Funciones de modificación de inputs #####
    ###############################################
*/

/*
    Atributo .classname
    
        Con el uso de este atributo podemos extraer el nombre de la clase que tiene el elemento al que se le aplica dicho atributo.
*/

const extraerAtributo = () => {

    let boton = document.querySelector(".boton-principal");
    let claseboton = boton.className;
    alert(`La clase del boton se llama: ${claseboton}`);
}

/*
    Atributo value:

        Con este atributo podemos extraer el contenido que hay dentro del atributo value. Es uno de los atributos más usados en JavaScript y en desarrollo web en general.
*/

 function obtenerValue() {
    let rango = document.getElementById("rango");
    let texto = document.getElementById("textoRango");
    texto.setAttribute("value",rango.value); // obtenemos el value del elemento alojado en la variable rango para mostrarlo en el texto
 } 

 /*
    Atributo .type:

    Con estos atributos podemos trabajar de dos maneras. Podemos al momento de aplicarle el metodo type, extraer el valor del atributo type que tenga en ese momento. 
    Si utilizamos después del metodo el signo de asignación "=" podemos modificar el type y poner el que nosotros deseemos.
 */

 const cambiarARange = () =>{
     let boton = document.getElementById("cambiar-a-texto");
     let switcher = document.getElementById("texto-boton");
     if (switcher.type == "text") { // aqui obtenemos el valor del type para compararlo.
        switcher.type = "range"; // modificamos directamente el valor del type.
     } else {
         switcher.type = "text"; // modificamos directamente el type del elemento.
     }
 }

 /*
    Metodo para atributo accept:

        El atributo accept nos permite indicar al navegador que en el navegador de archivos de prioridad a los formatos que le indiquemos con este atributo.
 */

const cambiarFormatoDeEntrada = () => {
    let input = document.getElementById("formatoEntrada");

    input.accept = "image/png"
    // aplicar función en la consola.
}

/*
    Metodo para atributo .form:

        Primero que nada vamos a explicar para que sirve el atributo .form:

        El atributo form nos sirve principalmente indicarle al boton submit que es el encargado de enviar los datos al servidor o de modelar los datos para que luego seán tratados. 
        El uso de la propiedad form es que en el documento HTML podemos hacer un formulario dentro de las etiquetas form. Dentro de esta estara el botón "submit" que hablamos anteriormente. Este botón sí esta fuera de las etiquetas formulario no tendra ningún efecto y no enviará nada al servidor. 
        El atributo form nos permite indicarle al botón "submit" así este fuera de la etiqueta "form", que este botón sirve para enviar los datos de dicho formulario. 
        El valor del atributo "form" debe ser el "id" del formulario el cual deseamos que envie los datos en cuestión.
*/

const activarBotonSecundario = () =>{
    let boton = document.getElementById("botonFormulario");

    boton.setAttribute("form","formulario")
}

/*
    Metodo de atributo minlength:

        Con el uso de este atributo podemos indicarle al navegador que no envie el formulario a menos que el value que contenga el text en cuestión tenga un mínimo de caractéres como sea indicado en este atributo. 
*/

const indicarCantidadCaracteres = () =>{
    let texto = document.getElementById("texto-length");
    let contador = document.getElementById("contador");
    texto.minLength = contador.value;
}

/*
    Meotodo de atributos .placeholder:

        Con este Metodo podemos modificar el atributo placeholder del elemento al cual le apliquemos dicho elemento.
*/

const modificarPlaceHolder= () => {
    let ph = document.getElementById("placeholder");

    ph.placeholder = prompt("Indique el placeholder que desea mostrar.")
}

/*
    Metodo de atributo .required:

        Este atributo es util para los formularios debido a que este obliga a el usuario a rellenar dicho campo (hacerlo requerido) antes de enviar los datos al servidor.
*/

const hacerRequerido = (id) =>{ // obtiene desde la consola el valor de la id que queremos hacer requerido.
    
    let input = document.getElementById(id);

    input.required = "true";
}