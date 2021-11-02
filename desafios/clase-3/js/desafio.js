let user = prompt('Ingrese su nombre de usario:');

for(let i = 0; i <= 5; i++){
    let password = prompt('Ingrese su contraseña:');

    if(password === 'miContraseña10'){
        alert(`Bienvenido ${user}, sesión iniciada`);
        break;
    }else{
        alert('Contraseña incorrecta');
    }

    if(i === 5){
        alert('Demasiados intentos, vuelva a intentarlo mas tarde');
    }
}

