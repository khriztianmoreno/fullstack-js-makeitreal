const operation = function (a,b){
return (parseInt(a) + parseInt(b) > 4 ? 'encima':'debajo');
}

let a;
let b; 

a = prompt('Escribe el primer numero');
b = prompt('Escribe un segundo numero');

console.log(operation(a,b));



// para que las comparaciones que estoy tratando de hacer con integers se generen bien
// tengo que pasar a integro el string que recibo en el prompt