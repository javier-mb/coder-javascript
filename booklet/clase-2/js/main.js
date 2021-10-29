// ACTIVIDAD 1

let firstName = 'JAVI';
let secondName = prompt('Ingrese un nombre').toUpperCase();

if(secondName === firstName){
    alert('Fui yo');
}else{
    alert('Yo no fui');
}

// ACTIVIDAD 2

let tecla = prompt('Presione una tecla');

if((tecla === 'y') || (tecla === 'Y')){
    alert('Correcto');
}else{
    alert('Error');
}


//ACTIVIDAD 3

let personaje = parseInt(prompt('Elije un personaje: \n 1) Homero \n 2) Marge \n 3) Bart \n 4) Lisa'));

if(personaje === 1){
    alert('Elegiste a Homero');
}else if(personaje === 2){
    alert('Elegiste a Marge');
}else if(personaje === 3){
    alert('Elegiste a Bart');
}else if(personaje === 4){
    alert('Elegiste a Lisa');
}else{
    alert('No existe ese personaje');
}


// ACTIVIDAD 4 

let presupuesto = parseInt(prompt('Que presupuesto puede gastar?'));

if((presupuesto >= 0) && (presupuesto <= 1000)){
    alert('Presupuesto bajo');
}else if((presupuesto >= 1001) && (presupuesto <= 3000)){
    alert('Presupuesto medio');
}else if(presupuesto > 3000){
    alert('Presupuesto alto');
}else{
    alert('Error');
}


// ACTIVIDAD 5

let primerProducto = prompt('Ingrese el primer producto');
let segundoProducto = prompt('Ingrese el segundo producto');
let tercerProducto = prompt('Ingrese el tercer producto');
let cuartoProducto = prompt('Ingrese el cuarto producto');

if(primerProducto != '' && segundoProducto != '' && tercerProducto != '' && cuartoProducto != ''){
    alert(`Listado de productos: \n ${primerProducto} \n ${segundoProducto} \n ${tercerProducto} \n ${cuartoProducto}`);
}else{
    alert('Error: Es necesario cargar todos los productos');
}
