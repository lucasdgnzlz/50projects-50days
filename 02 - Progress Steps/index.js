const $botones = document.querySelectorAll (".botones");
const $botonSiguiente = document.querySelector(".boton-siguiente");
const $botonPrevio = document.querySelector(".boton-previo");

let nivelActual = 1;

function animacionBoton(boton){
    boton.id = "boton-apretado";
    setTimeout(() => {
        boton.id = "";
    }, 80);
}

function gestionBotones(){
    if(nivelActual === 1){
        $botonPrevio.className = "boton-desactivado";
        $botonPrevio.disabled = true;
    } else if(nivelActual > 1 && nivelActual < 4){
        $botonPrevio.classList.remove("boton-desactivado");
        $botonPrevio.className = "botones";
        $botonPrevio.disabled = false;

        $botonSiguiente.classList.remove("boton-desactivado");
        $botonSiguiente.className = "botones";
        $botonSiguiente.disabled = false;
    } else if(nivelActual === 4){
        $botonSiguiente.classList = "boton-desactivado";
        $botonSiguiente.disabled = true;
    }
}

function iluminarBarra(){
    const $barras = document.querySelectorAll (".barras");

    if(nivelActual === 2){
        $barras[nivelActual-2].id = "barra-activa";
    } else if(nivelActual === 3){
        $barras[nivelActual-2].id = "barra-activa";
    } else if(nivelActual === 4){
        $barras[nivelActual-2].id = "barra-activa";
    } else{
        return false;
    }
}

function desiluminarBarra(){
    const $barras = document.querySelectorAll (".barras");

    if(nivelActual === 1){
        $barras[nivelActual-1].id = "";
    } else if(nivelActual === 2){
        $barras[nivelActual-1].id = "";
    } else if(nivelActual === 3){
        $barras[nivelActual-1].id = "";
    } else if(nivelActual === 3){
        $barras[nivelActual-1].id = "";
    } else{
        return false;
    }
}

function iluminarNivel(){
    const $niveles = document.querySelectorAll(".niveles");

    $niveles[nivelActual].id = "nivel-activo";
    nivelActual++;
}

function desiluminarNivel(){
    const $niveles = document.querySelectorAll(".niveles");

    if(nivelActual === 1){
        return false;
    } else{
        $niveles[nivelActual-1].id = "";
        nivelActual--;
    }
}

$botonPrevio.onclick = function(){
    animacionBoton($botonPrevio);
    desiluminarNivel();
    desiluminarBarra();
    gestionBotones();

    return false;
}

$botonSiguiente.onclick = function(){
    animacionBoton($botonSiguiente);
    iluminarNivel();
    iluminarBarra();
    gestionBotones();

    return false;
}
