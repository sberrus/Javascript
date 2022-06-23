/*
    ################################################
    ##### Uso del atributo style en JavaScript #####
    ################################################
*/

/*
    Para cmabiar los estilos de los elementos en JavaScript por lo general se le aplican los metodos "style" indicando que este metodo modificara el estilo del elemento y seguido de un punto el tipo de estilo que se modificara (background, color, fontsize etc...) Para ver la lista completa de los estilos y como modificarlos en JavaScript ir a la documentación oficial del lenguaje.

    Un aspecto importante que hay que recordar es que las propiedades que se implementan en CSS con guiones (-) en JavaScript se usan propiedades de escritura CamelCase, siendo por ejemplo, background-color = backgroundColor.
*/

const colorSwitcher = () =>{
    let input = document.getElementById("modificable");
    let color = document.getElementById("color");

    input.style.color = color.value;
}

const tamanoFuente = () =>{
    let input = document.getElementById("modificable");
    let tamano = document.getElementById("font-size");

    input.style.fontSize = tamano.value + "em";
}

const colorFondo = () =>{
    let input = document.getElementById("modificable");
    let color = document.getElementById("color-fondo");

    input.style.backgroundColor = color.value;
}