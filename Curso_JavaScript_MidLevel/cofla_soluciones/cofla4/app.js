const materiasHTML = document.querySelector(".materias");

const materias = [
    {
        nombre: "Fisica",
        nota: Math.random()*10
    }, {
        nombre: "Calculo",
        nota: Math.random()*10
    }, {
        nombre: "Bases de datos",
        nota: Math.random()*10
    }, {
        nombre: "Matemáticas discretas",
        nota: Math.random()*10
    }, {
        nombre: "Programación",
        nota: Math.random()*10
    }
];

const obtenerMateria = (id) => {
    return new Promise((resolve, reject) => {
        materia = materias[id];
        if (materia == undefined) reject("La matería no existe");
        else setTimeout(() => { resolve(materia) }, Math.random() * 700);
    });
};
/* 
obtenerMateria(1).then(res => console.log(res))
obtenerMateria(2).then(res => console.log(res))
obtenerMateria(3).then(res => console.log(res))
obtenerMateria(4).then(res => console.log(res)) */

const devolverMaterias = async () => {
    let materia = [];
    for (var i = 0; i < materias.length; i++) {
        materia[i] = await obtenerMateria(i);
        let newHTMLCode = `<div class="materia">
       <div class="nombre">${materia[i].nombre}</div>
       <div class="nota">${materia[i].nota.toFixed()}</div>
   </div>`;
   materiasHTML.innerHTML += newHTMLCode;
    }
};

devolverMaterias();