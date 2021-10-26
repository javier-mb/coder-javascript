// ACTIVIDAD 1 

let nombre = "Homero";
let apellido = "Simpson";
let edad = 39;

// ACTIVIDAD 2

const ciudadUno = "Springfield";
const ciudadDos = "Cordoba";
const ciudadTres = "Brooklin";
const ciudadCuatro = "Miami";
const ciudadCinco = "Texas";

// ACTIVIDAD 3

let nombre = "Bart Simpson";
let direccion = "742 Evergreen Terr, Springfield.";
let pais = "USA";
let cumpleaños = "02-11-70";
let carnet = "La licencia pertenece a " + nombre + ", que vive en " + direccion + pais + ".";

console.log(carnet);

// ACTIVIDAD 4

let nombreUno = prompt("Ingrese el primer integrante de la familia:");
let nombreDos = prompt("Ingrese el segundo integrante de la familia:");
let nombreTres = prompt("Ingrese el tercero integrante de la familia:");
let nombreCuatro = prompt("Ingrese el cuarto integrante de la familia:");
let nombreCinco = prompt("Ingrese el quinto integrante de la familia:");
let familia = "Los integrantes son " + nombreUno + ', ' +nombreDos+', '+nombreTres+', '+nombreCuatro+ ' y '+nombreCinco+'.';

console.log(familia);

// ACTIVIDAD 5

let precioUno = parseInt(prompt('Ingrese un precio:'));
let descuento = precioUno - (precioUno * 20 / 100);

console.log('Tiene el 20% de descuento, el precio queda en: $'+descuento);

