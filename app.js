// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;

    if(amigo == "") {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(amigo);
        agregarLista();
    }
    LimpiarCaja(); 
}

function agregarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        var li = document.createElement("li")
        lista.appendChild(li)
        li.innerHTML = amigos[i];
    }
}
function sortearAmigo() {
    if(amigos.length == 0){
        alert("No hay jugadores");
    }
    let numero = Math.floor(Math.random()*amigos.length);
    let ganador = amigos[numero];
    resultado = document.getElementById("resultado");
    resultado.innerHTML = ganador;
}

function LimpiarCaja(){
    document.getElementById("amigo").value = "";
}