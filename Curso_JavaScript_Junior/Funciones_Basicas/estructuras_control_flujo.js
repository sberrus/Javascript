/*###### Estructuras de control de flujo ######*/

/*
    Las estructuras de control de flujo son aquellas que al cumplir ciertas condiciones permiten o no realizar interacciones con el programa.
*/

/* 
    ###Estructura if###
    ###Estructura if else###

    Igual que en Java.
*/ 

function estructuraFlujo(){

    if (condition) {
        
    }
/******************/
    if (condition) {
        
    } else if (condition) {
        
    } else if (condition) {
        
    } else {

    }
/******************/
}

/*
    Estructuras repetitivas:
    
    ### Estructura for ###

    Igual que en Java

 */ 

function estructuraFor(){

    for (let i = 0; i < array.length; i++) {
        const element = array[index];
        
    }
}

/*
    Estructura for(objeto in array){...}:

        Esta estructura nos permite recorrer un array y utiliza el "objeto" como indice de cada uno de los ciclos que comprende dicho array. 
*/

function forIn(){

    var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

    for(i in dias) {
        alert(dias[i]); // devuelve en la variable "i" el indice de los dias. Este se usa como indice para mostrar el valor de cada uno de los elementos del array. Aunque para hacer esto mismo utilizamos la siguiente estructura de repetitiva.
    }

}

/*
    Estructura for(objeto of array){...}

        Con esta estructura podemos hacer el recorrido del array pero este devolvera por cada ciclo el contenido del array que estemos utilizando.
*/

const estructuraForOf = () =>{
    let dias = ["lunes", "martes", "miercoles", "jueves","viernes","sabado","domingo"];

    for (diaSemana of dias){
        alert(diaSemana) // Devuelve el valor de cada uno de los elementos que componen el array.
    }
}