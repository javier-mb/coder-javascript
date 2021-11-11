const suma  = (num1,num2) => num1 + num2;
const resta = (num1,num2) => num1 - num2;
const iva   = x => x * 0.21;

let precioProducto  = parseInt(prompt('ingrese precio del producto:')); 
let precioDescuento = precioProducto * 0.15;  

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), precioDescuento); 

console.log('Su producto tiene un descuento de: $' + precioDescuento);
console.log('El IVA tiene el valor de: $' + (precioProducto * 0.21));
console.log('El total del producto es de: $' + nuevoPrecio);