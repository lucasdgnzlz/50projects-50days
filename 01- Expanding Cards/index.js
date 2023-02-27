const $paneles = document.querySelectorAll (".panel");
const $tituloPaneles = document.querySelectorAll ("h3");

function dejarDeMostrarPaneles(){
    $paneles.forEach(panel =>{
        panel.id = "";
    });
}

function dejarDeMostrarTexto(){
    $tituloPaneles.forEach(tituloPanel => {
        tituloPanel.id = "";
    });
}

function mostrarTituloPanelElegido(panel){
    panel.firstElementChild.id = "texto-activo";
}

function mostrarPanelElegido(panel){
    panel.id = "panel-activo";
}

$paneles.forEach (panel =>{
    panel.onclick = function(){
        dejarDeMostrarPaneles();
        dejarDeMostrarTexto();
        mostrarPanelElegido(panel);
        mostrarTituloPanelElegido(panel)
    }
})
