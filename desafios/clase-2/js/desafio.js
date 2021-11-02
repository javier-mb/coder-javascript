let edad = parseInt(prompt('Cual es tu edad?'));

if(edad >= 0 && edad <= 5){
    console.log('Vas a guarderia o jardin');
}else if(edad >= 6 && edad <= 11){
    console.log('Vas a primaria');
}else if(edad >= 12 && edad <= 17){
    console.log('Vas a secundaria');
}else{
    console.log('Vas a la universidad o trabajas');
}