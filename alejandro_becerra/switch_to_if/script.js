const browser = prompt('¿Que navegador tienes?')
const message = `¡Tienes ${browser}!` 
const message_no_nav = '¡Esperamos que esta página se vea bien!'
function selectorDeNavegador(browser){
    if(browser === 'Edge' || browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera' ){
        console.log(message);
    }
    else {
       console.log(message_no_nav);
    }
}

selectorDeNavegador(browser);