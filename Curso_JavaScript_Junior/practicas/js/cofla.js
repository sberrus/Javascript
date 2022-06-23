const contenedor = document.querySelector(".flex-container");
const boton = document.querySelector(".send-button");
// SE CREAN LOS OBJETOS DEL DOM

let valorAntiguo = boton.value;
boton.value = valorAntiguo.toUpperCase()

// CONSTRUCTOR DE LAS LLAVES.
function crearLlave(nombre, modelo, precio) {
    img = "<img src='images/llave.png' class='llave-img' draggable='false'>";
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3 id='${modelo}'>${modelo}</h3>`;
    precio = `<p>Precio: <b>$${precio}</b></p>`;
    return [img, nombre, modelo, precio];
}

// SE CREA EL FRAGMENTO QUE ALMACENARA LOS OBJETOS CREADOS
let documentFragment = document.createDocumentFragment();

for (let i = 1; i <= 5; i++) {
    let modeloRandom = Math.round(Math.random()*100000);
    let precioRandom = Math.round(Math.random()*10+30);

    // SE CREA UN OBJETO "LLAVE"
    let llave = crearLlave(`Llave ${i}`,`Modelo ${modeloRandom}`,`Precio $${precioRandom}`);

    // Creación del div con evento para pedir el value y alojarlo en un input hidden para enviar datos al servidor.
    let div = document.createElement("DIV");
    div.addEventListener("click",()=>{
        document.querySelector(".key-data").value = modeloRandom;
    });


    div.tabIndex = i; // darle un tabindex al elemento
    div.classList.add(`item-${i}`, `flex-item`); // se le agregan las clases.
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3]; // se agregan los valores de codigo HTML al div.
    documentFragment.appendChild(div); // se agregan uno a uno los elementos al documentFragment.
}

contenedor.appendChild(documentFragment); // se agregan finalmente al contenendor.