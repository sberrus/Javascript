/*
    #######################################
    ##### Uso de clases en JavaScript #####
    #######################################
*/

/*
    metodo classList:

        Este es el metodo que nos permite modificar el atributo class de los elementos. Por ende tenemos que utilizarlo como el metodo.
        style para modificar los estilos de los elementos.
*/

/*
    Metodo classList.add():

        Con este metodo podemos enviarle como parámetro una nueva clase que se agregara al elemento correspondiente. 

        Las clases al igual que al incorporarlas en XHTML no pueden tener espacios ya que serian dos clases diferentes.

        Al momento de agregar otras clases automáticamente se separarán mediante espacios.

        Si la clase introducida es igual a alguna otra que ya contenga el elemento, no se aplica.
*/

/*
    Metodo classList.Remove():

        Con este metodo podemos eliminar la clase que le indiquemos al metodo en los parametros.
*/

const colorRojo = () =>{
    const ejemplo = document.getElementById("ejemplo");
    ejemplo.classList.remove("color-verde")
    ejemplo.classList.add("color-rojo")
}
const colorVerde = () =>{
    const ejemplo = document.getElementById("ejemplo");
    ejemplo.classList.remove("color-rojo")
    ejemplo.classList.add("color-verde")
}
const fondoRojo = () =>{
    const ejemplo = document.getElementById("ejemplo");
    ejemplo.classList.remove("fondo-negro")
    ejemplo.classList.add("fondo-rojo")
}
const fondoNegro = () =>{
    const ejemplo = document.getElementById("ejemplo");
    ejemplo.classList.remove("fondo-rojo")
    ejemplo.classList.add("fondo-negro")
}

/*
    Metodo classList.item(index):

        Con este metodo podemos extraer el valor del atributo class tomando en cuenta el índice enviado como parámetro. Solo devuelve el valor de la clases.
*/

const mostrarPrimeraClase = () =>{
    const ejemplo = document.getElementById("ejemplo");
    alert(ejemplo.classList.item(0));
}
/*
    Metodo classList.contains(valorAtributoClass):

        Con este metodo podemos pedirle al programa que busque si el valor del atributo class enviado como parametro se encuentra en el elemento al que le aplicamos dicho metodo.
*/

const comprobarExistencia = () =>{
    const ejemplo = document.getElementById("ejemplo");
    if (ejemplo.classList.contains("fondo-negro")){
        alert("SI Tiene fondo negro!!")
    } else {
        alert("NO tiene fondo negro!!")
    }
}

/*
    Metodo classList.toggle(valorAtributoClass,booleano):

        Este metodo funciona para hacer dos tareas simultaneas. Primero, comprueba que este el valor de la clase que le enviamos como parametro, en el caso de que la clase esté, el metodo elimina dicha clase, en el caso de que no esté dicha clase, el metodo la elimina. Esto es de ayuda y evitamos estar escribiendo la estructura if o cualquier otro metodo de validación para agregar esta clase al elemento en cuestión.

        También podemos indicarle al programa que si compara y ve que el elemento si contiene la clase que hemos indicado que busque, podemos indicar que la mantenga enviando como segundo parametro el valor "true". Si deseemos que compare y la elimine siempre indicamos como segundo valor "false".
*/

const hacerGigante = () =>{
    const ejemplo = document.getElementById("ejemplo");
    ejemplo.classList.toggle("gigante");
}

/*
    Metodo classList.replace(valorParaReemplazar,nuevoValor):

        Este metodo lo que indica al programa es que busque una clase que se indicará en el primer parámetro y la reemplaze por otra que se le indicará como segundo parámetro.
*/

