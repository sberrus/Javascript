alert("Uso de arrays asociativos");

// estructura de los arrays asociativos.
let pc = {
    marca: "Lenovo",
    modelo: "Y520",
    ram: "8gb",
    disco: "1tb",
    tarjetaGrafica: "Nvidia GForce 1050 8gb"
};

let marca = pc["marca"];
let modelo = pc["modelo"];
let ram = pc["ram"];
let disco = pc["disco"];
let tarjetaGrafica = pc["tarjetaGrafica"];

frase = `
    La marca de mi pc es: <b>${marca}</b> <br>
    El modelo de mi pc es: <b>${modelo}</b> <br>
    La memoria Ram es de: <b>${ram}</b> <br>
    El espacio de disco duro es <b>${disco}</b> <br>
    La Tarjeta Gráfica es de: <b>${tarjetaGrafica}</b>
`

document.write(frase)