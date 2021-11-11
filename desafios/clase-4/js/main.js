let producto = 0;
let numero = 0;
const total = function total(numero){
    numero = parseInt(prompt('Ingrese valor del producto:'));

    while(numero > 0){
        producto += numero;
        alert('Usted esta gastando: ' + producto);
        numero = parseInt(prompt('Ingrese valor del producto:'));   
    }
    
    alert('El total que tiene que abonar es de: $' + producto);
}

total();

