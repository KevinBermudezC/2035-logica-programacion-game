let numeroSecreto = 0;
let intentos = 0;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
};

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos)
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`¡Lo lograste!, acertaste el numero en ${intentos} ${(intentos == 1) ? 'vez' : 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if( numeroDeUsuario > numeroSecreto){
        asignarTextoElemento('p','El numero secreto es menor');
        intentos++;
        limpiarCaja()
    } else{
        asignarTextoElemento('p','El numero secreto es mayor');
        intentos++;
        limpiarCaja()
    }
    return;
};

function reinicarJuego(){
    //limpiar caja, indicar mensaje de inicio, bloquear boton, generar el numero aleatorio, reiniciar los intentos
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

function limpiarCaja(){
    return document.querySelector('#valorUsuario').value = '';
};
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', 'Indica un numero del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
};
condicionesIniciales();