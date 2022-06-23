/*
    ####################################################
    ##### Manipular el DOM de XHTML con JavaScript #####
    ####################################################
*/

/////////////////////////////////////////////////
///// Extraer Información de los elementos //////
/////////////////////////////////////////////////

/*
    Funcion element.textContent:

        Con este metodo podemos extraer el nodo de texto del elemento al que se le aplica dicho método.
        Con este metodo podemos extraer todo el texto que contenga el elemento indiferentemente de las reglas de estilos que tenga dicho elemento implementado. Si hay alguna instrucción visibility, display, hidden etc... el metodo igualmente nos muestra el texto del elemento.
*/

const extraerTexto = () =>{
    texto = document.getElementById("ejemplo-textContent").textContent;
    alert(`El texto del parrafo de ejemplo es: ${texto}`);
}

/*
    Metodo element.innerText:

        Con este metodo podemos extraer también el nodo texto dle elemento al que se le aplica. Sin embargo, este elemento si respeta las reglas de estilo de visibilidad que se le hayan implementado al elemento. Si tiene algun hidden, visibility o display, este método sí las respeta. [Este también esta en deshuso.]
*/

const extraerTexto2 = () =>{
    texto = document.getElementById("ejemplo-textContent").innerText;
    alert(`El texto del parrafo de ejemplo es: ${texto}`);
}

/*
    Metodo element.outerText:
    
        Con este también podemos extraer el nodo texto de los elementos al que se le aplica. [en deshuso]
*/

/*
    Método element.innerHTML:

        Este método muestra el texto incluyendo los nodos internos del elemento al que se le aplica con sus respectivos codigos HTML.
*/

const extraerTextoHTML = () =>{
    texto = document.getElementById("ejemplo-textContent").innerHTML;
    alert(`El texto del parrafo de ejemplo es: ${texto}`);
}

/*
    Método element.outerHTML:

        Este funciona de manera similar a element.innerHTML, con la diferencia de que este además de mostrar el elemento interno más sus nodos muestra el elemento padre al que se le esta aplicando el método.
*/

const extraerTextoHTML2 = () =>{
    texto = document.getElementById("ejemplo-textContent").outerHTML;
    alert(`El texto del parrafo de ejemplo es: ${texto}`);
}

///////////////////////////////////
////// Creación de elementos //////
///////////////////////////////////

/*
    Método element.createElement:

        Con este método podemos crear elementos XHTML dentro de el nodo padre al que se le indique.

        Para crear los elementos hay que indicarlos en mayúsculas debido a que JavaScript es case sensitive (que diferencia entre mayúsculas y minúsculas).

    Método element.createTextNode:

        Con este método creamos un nodo de texto que luego se tendra que incorporar a un nodo element para que muestre el contenido.

    Método element.appendChild(Nodo):

        Con este método podemos insertar en un elemento padre, un elemento que sera hijo de este. Por ejemplo: Si deseamos insertar dentro de un elemento "div" otro elemento "p/h1/li, etc.." tenemos que usar este método, después de haber creado el elemento hijo o de haberlo extraido del XHTML. 
*/

const crearTitulo = () =>{
    // obtención de los elementos del XHTML.
    const contenedor = document.querySelector(".contenedor");
    const texto = document.getElementById("textoTitulo").textContent;

    // Creación de los nodos
    const item = document.createElement("H1");
    const text = document.createTextNode(texto);

    // introducir los nodos hijos dentro de sus respectivos padres.
    item.appendChild(text);
    contenedor.appendChild(item);
} 

/*
    Método element.createDocumentFragment():

        Este es un método nuevo que nos permite introducir varios elementos dentro de otro elemento consumiendo menos recursos del navegador del usuario y por consecuencia aumentando su productividad y velocidad. 
        
        Si queremos crear varios títulos en el mismo contenedor con el método anterior consumiria muchos recursos y nos haría más compleja la tarea de escribir el código necesario para introducir los mismos.

        Con el metodo element.createDocumentFragment podemos crear una especie de nodo temporal en el cual podemos introducir elementos y programarlos antes de que estos sean impresos en el DOM, al momento de que todo el proceso de creación de los elementos haya culminado, se procede a insertar el método element.createDocumentFragment() como hijo del elemento donde esté será impreso. Evitando así el uso innecesario de recursos del navegador al momento de crear bucles para la creación de elementos.
*/

const crearVariosElementos = () =>{
    const texto = document.getElementById("texto-multiple").value;
    const contador = document.getElementById("contador").value;
    const contenedor = document.querySelector(".contenedor-multiple");
    const fragmento = document.createDocumentFragment();

    for (let i = 0; i < contador; i++) {
        const item = document.createElement("P");
        const nodeTexto = document.createTextNode(`[${(i+1)}] ${texto}`);
        item.appendChild(nodeTexto);
        fragmento.appendChild(item);
    }
    contenedor.appendChild(fragmento);
}

////////////////////////////////////
///// Obtencion y modificación /////
////////////////////////////////////

/*
    elemento.firstChild:

        Con este método podemos acceder al primer elemento hijo del elemento al que se le aplica dicho método. Este método es muy especifico, por lo que si tenemos así sea una separación entre la etiqueta padre y el primer elemento del elemento al que se le aplica, este nos tomara en cuenta el primer nodo siguiente de la etiqueta padre, si hay una separación, un tab o lo que sea, esto se tomara en cuenta como firstChild.
        
        <div id="modificador"><h3>Un titulo normal</h3> 
        
        // firstChild etiqueta "h3".

        <div id="modificador">
            <h3>Un titulo normal</h3> 
            
        // firstChild nodo texto (espacio en blanco entre el elemento padre y siguiente elemento.)
*/

const obtenerTitulo = () =>{

    const contenedor = document.getElementById("modificador");
    const titulo = contenedor.firstChild;
    alert(titulo.textContent)
}

/*
    element.lastChild:

        Funciona igual y con las mismas reglas que element.firstChild, con la diferencia de que este nos devolvera el ultimo nodo hijo del elemento al que se le aplique.  
*/

const obtenerParrafo = () =>{

    const contenedor = document.getElementById("modificador");
    const parrafo = contenedor.lastChild;
    alert(parrafo.textContent);
}

/*
    element.firstElementChild:

        Con este elemento podemos indicar que nos seleccione el primer "elemento" hijo del elemento padre al que se le aplica. Este método no toma en cuenta los espacios en blanco, simplemente selecciona el siguiente elemento indiferentemente de los espacios en blanco que tenga.
*/

const obtenerTitulo2 = () =>{

    const contenedor = document.getElementById("modificador");
    const titulo = contenedor.firstElementChild;
    alert(titulo.textContent)
}

/*
    element.lastElementChild:

        Lo mismo que el método anterior pero obteniendo el ultimo "elemento" hijo del elemento padre al que se le aplica.
*/

const obtenerParrafo2 = () =>{

    const contenedor = document.getElementById("modificador");
    const parrafo = contenedor.lastElementChild;
    alert(parrafo.textContent);
}

/*
    element.childNodes:

        Con este método obtenemos todos los nodos hijos que contenga el elemento padre al que se le aplica. Devuelve una lista de los nodos que componene el elemento padre.
*/

const obtenerTodosLosNodos = () =>{
    const contenedor = document.getElementById("modificador");
    const hijos = contenedor.childNodes;
    alert(`Ir a la consola para ver la lista de los nodos: ${hijos}`);
    console.log(hijos)
}

/*
    element.children:

        Con este método podemos extraer una colección HTML (parecido a un array o a una lista de nodos pero con la diferencia de que este no se puede recorrer con la función forEach(). Se usa las estructuras for(in) for(of))
*/

const obtenerTodosLosChildren = () =>{
    const contenedor = document.getElementById("modificador");
    const hijos = contenedor.children;
    for(valor of hijos){
        console.log(valor);
    };
    alert("Ver el resultado en la consola");
}