let jsName = prompt('Cual es el nombre oficial de JavaScript?');
function reviewName(jsName){
    if (jsName ==='ECMAScript'){
        alert('¡Correcto!');
    }
    else{
        alert('¿No lo sabes? ¡ECMAScript!');
    }
}
alert(reviewName(jsName));
