function main() {
    let imatgeadopcio = '/img/campanya_socis-web.png'
    document.getElementById("imatgeadopcio").src = imatgeadopcio;
    const botonEntrar = document.getElementById("boton-entrar");
    
    botonEntrar.addEventListener("click", function() {
        window.location.href = 'index.html';
    });

}

window.addEventListener("load", main, true);