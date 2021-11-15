class Producto {
    constructor(color, precio, stock){
        this.color = color;
        this.precio = precio;
        this.stock = stock
    }


    darStock(){
        if(this.stock === false){
            console.log('No hay stock');
        }else{
            console.log('Compraste el producto');
        }
    }
}

const mateNegro = new Producto('negro', 1500, false);

const mateMarron = new Producto('marron', 2000, true);

const mateBlanco = new Producto('blanco', 1000, true);

let productoUsuario = prompt('Que color quiere de mate? \n 1) negro \n 2) blanco \n 3) marron');

if(productoUsuario === 'negro'){
    alert(`Precio: ${mateNegro.precio} \n No hay stock`);
}

if(productoUsuario === 'blanco'){
    let comprar = prompt(`Precio: ${mateBlanco.precio} \n Hay stock. \n Queres comprarlo) Aceptar: SI - Cancelar: NO`);

    if(comprar === 'si'){
        alert('Compraste el producto');
    }else{
        alert('Te esperamos la proxima!');
    }
}

if(productoUsuario === 'marron'){
    let comprar = prompt(`Precio: ${mateMarron.precio} \n Hay stock. \n Queres comprarlo) Aceptar: SI - Cancelar: NO`);

    if(comprar === 'si'){
        alert('Compraste el producto');
    }else{
        alert('Te esperamos la proxima!');
    }
}