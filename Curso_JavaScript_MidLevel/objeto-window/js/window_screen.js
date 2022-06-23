/*
    window.screen:

        screen es un objeto de tipo screen que devuelve unas propiedades con las que trabajaremos y podremos utilizar para nuestros proyectos.
        
        Para ver las propiedades de el objeto screen hay que crearlo y mostrarlo en consola.
*/

const mostrarPropiedades = () => {
    const screen = window.screen;
    console.log(screen);
}

const btnMostrarPropiedades = document.getElementById("propiedades-screen");
btnMostrarPropiedades.addEventListener("click", mostrarPropiedades);

/*
    ### Ver las propiedades del screen ###

    Para ver las propiedades del screen hay que ir a la consola del navegador e imprimir el objeto en la consola, después usando al objeto un punto "." y luego el nombre de la propiedad nos devolvera la misma.
*/

const verPropiedades = () => {
    const ah = document.getElementById("availHeight");
    const al = document.getElementById("availLeft");
    const aw = document.getElementById("availWidth");
    const ao = document.getElementById("orientation");

    const ventana = window.screen;
    ah.textContent = ventana.availHeight;
    al.textContent = ventana.availLeft;
    aw.textContent = ventana.availWidth;
    ao.textContent = ventana.orientation.type;

}

const btnVerPropiedades = document.getElementById("propiedades");
btnVerPropiedades.addEventListener("click", verPropiedades);

/*
   ##### window.screenLeft y window.screenRight:

       Estos métodos devuelven la distancia en pixeles en le caso de screen left desde el borde izquiedo de la ventnana hasta el borde izquierdo de la pantalla donde esta abierta la ventana; en el caso de screenRight lo mismo pero con los bordes derechos.

       Estas propiedades son de lectura. No se pueden modificar
*/

const obtenerDistancias = () => {

    const showLeft = document.getElementById("screen-left");
    const showTop = document.getElementById("screen-top");

    showLeft.textContent = screenLeft;
    showTop.textContent = screenTop;
}

const btnGetDistance = document.getElementById("btn-show-distance");
btnGetDistance.addEventListener("click", obtenerDistancias);

/*
    ##### window.scrollX window.scrollY:

        Estos métodos devuelven la cantidad de píxeles que el documento se ha desplazado hacia arriba, abajo, izquierda y derecha respectivamente de su eje.
*/


const obtenerEjes = () => {

    const obtenerScrollX = document.getElementById("scrollX");
    const obtenerScrollY = document.getElementById("scrollY");

    obtenerScrollX.textContent = window.scrollX;
    obtenerScrollY.textContent = window.scrollY;
}

const btnScroll = document.getElementById("btnScroll");
btnScroll.addEventListener("click", obtenerEjes);

/*
    ##### window.scroll(), window.scrollBy(), window.scrollByLines(), window.scrollByPages():

        Con el método scroll() y sus hermanos con el complemento "By" permiten modificar y accionar el scroll del usuario a los puntos que se le indique.

        Con el método window.scroll(ejeX,ejeY) indicamos una posición relatíva. Para utilizar un botón que nos desplaze n veces hacia arriba o hacia abajo tenemos que usar los scrollBy...() que son absolutos.
*/

const bajar = () =>{
    window.scroll(0,500)
}

btnbajar = document.getElementById("bajar");
btnbajar.addEventListener("click",bajar);

/*
    ##### métodos window.resizeBy(pixelesX,pixelesY) y window.resizeTo(pixelesX,pixelesY):

        Con estos métodos podemos modificar el tamaño de las ventanas con las que estemos trabajando. Las ventanas tenemos que haberlas creado nosotros mediante el código o ejecutar dicho código desde la consola.

        Pendiente de ver politica de same origin
*/

/*
    window.moveBy() window.moveTo():

        Nos permite mover la posición de la ventana del navegador. Pero al igual que con el método resize() estos solo se pueden aplicar desde aquellas ventanas que se abren desde el servidor (se verá más adelante)
*/

/*
    objetos barprop: locationbar,menubar,personalbar,scrollbars,statusbar,toolbar etc...

        Estos objetos sirven para indicar mediante valores booleanos si ciertos componentes del navegador estan presentes en la ventana a la que se le aplica. De manera que son medianamente útiles no se verán del todo.
*/


/*
    ##### objeto window.location: Este objeto nos permite obtener información de la navegación del usuario y la obtención de ciertos datos del mismo.
*/

/*
    ##### window.location.href:

        Con este método podemos obtener la dirección de la pestaña con la que estramos trabajando. (El enlace URL de la misma). 
*/
const href = window.location.href;

const url = document.getElementById("urlPagina");
url.textContent = `href actual: ${href}`;

/*
    window.location.hostname:

        Con este método podemos acceder al dominio del sitio web al que se le aplica.
*/

const hostname = window.location.hostname;
const spanHostname = document.getElementById("hostname");
spanHostname.textContent = `El dominio de esta web es: ${hostname}`; 

/*
    window.location.pathname:

        Este método nos devuelve la ruta desde el dominio hasta el documento el cual se le ha aplicado este método.
*/
const pathname = window.location.pathname;
const spanPathname = document.getElementById("pathname");
spanPathname.textContent = `La ruta del dominio es: ${pathname}`;

/*
    window.location.protocol:
    Este método nos devuelve el protocolo que tiene la página a la que se le aplica. ("http:" o "https:");
*/

document.getElementById("protocol").innerHTML = "el protocolo es:" + " " + "<b>" + window.location.protocol + "</b>";

/*
    window.location.assign(url):

        Con este método podemos indicarle al navegador que vaya a un documento que nosotros le enviemos como parámetro.
*/

const IrEnlace = ()=>{

    let enlace = document.getElementById("url-enlace");
    let url = enlace.value;
    
    window.location.assign("https://" + url + ".com");

}

const botonEnlace = document.getElementById("btn-enlace");
botonEnlace.addEventListener("click", IrEnlace);