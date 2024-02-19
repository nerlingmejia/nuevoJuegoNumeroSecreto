let numeroSecreto=0;
let intentos;

console.log(numeroSecreto);
function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
}
function limpiarCaja(){
    document.getElementById("valorUsuario").value="";
}
function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del número secreto!");
    asignarTextoElemento("p","Indica un número del 1 al 10");
    intentos=1;
    numeroSecreto=generarNumeroAleatorio();
}
function reiniciarJuego(){ 
    //Reiniciar el numero de intentos
    // Generar un nuevo numero secreto
    //Indicar el mensaje de intervalo de numeros
    condicionesIniciales();
    //Limpiar caja
    limpiarCaja();
    //Deshabilitar el boton de nuevo juego
    document.getElementById("reiniciar").setAttribute("disabled", "true");
}

function verificarIntento(){
    let numeroUsuario=parseInt(document.getElementById("valorUsuario").value);
    if(numeroUsuario==numeroSecreto){
        asignarTextoElemento("p", `Felicidades, Acertaste el numero en ${intentos} ${intentos==1 ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
        
        if(numeroUsuario>numeroSecreto){
            asignarTextoElemento("p", "el numero secreto es menor");
        } else {
            asignarTextoElemento("p", "el numero secreto es mayor");
        }
        intentos++;
        limpiarCaja();
   
    }
}

function generarNumeroAleatorio() {
    return Math.floor(Math.random()*10)+1;
   
 }

 condicionesIniciales();
 