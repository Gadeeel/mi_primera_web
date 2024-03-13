//alert("Hola este es mi Javascript");


//var nombre = "Kevin"
//console.log (nombre)

//let contenidoTitulo = "Marta"

let contenidoTitulo = "Mi primera chamba";

let titulo = document.querySelector(".logo .fuente-acento")
console.log(titulo);

titulo.innerHTML = contenidoTitulo;

//CONDICIONALES

let textoTitulo = titulo.innerText;
console.log(textoTitulo)

if (textoTitulo == "Mi primera chamba") {
    titulo.innerHTML = "Mi primera web";

} else {
    console.log("no se cumple")
}

//FUNCIONES

let nombre = "Kevin";
let ciudad = "Lima";
let gusto = "el fútbol";

let parrafo = document.querySelector(".parrafo2");

function cambiarTexto(nombre, ciudad, gusto) {
    let contenido = `Mi nombre es ${nombre}, nací en ${ciudad} y vivo en San martin de porres. Me gusta ${gusto}.`;
    return contenido;
}

parrafo.innerText = cambiarTexto(nombre, ciudad, gusto)

//MENU RESPONSIVEE

