let navegador = prompt('¿Cuál es el navergador que usas');

if(navegador === 'Edge') {
    alert('Edge!');
}else if(navegador === 'Chrome' || navegador === 'Firefox' || navegador === 'Safari' || navegador === 'Opera') {
    alert('Soportamos esos navegadores tambien');
}else {
    alert
}

let a = +prompt('a?','');

switch (a) {
    case 0:
        alert( 0 );
        break;
    case 1:
        alert( 1 );
        break;
    case 2: 
    case 3:
        alert( '2, 3' );
        break;    
    default:
        break;
}