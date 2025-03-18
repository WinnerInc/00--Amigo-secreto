
let amigos = [];


function agregarAmigo() {
    let nombre = document.getElementById("amigo");
    
    let AmigoSecreto = nombre.value;
    
    AmigoSecreto = AmigoSecreto.toUpperCase();
    
    if (AmigoSecreto === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    
    else {
        amigos.push(AmigoSecreto);
        console.log(amigos);
        nombre.value = "";
        nombre.focus();
        listarAmigos();
        
    }
}

function listarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        //crear una lista de amigos
        let item = document.createElement("li");
        //mostrar la lista de amigos en el html
        item.textContent = amigos[i];
        //listar los amigos
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    
    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }
    else if (amigos.length < 2) {
        alert("Debes tener al menos 2 amigos para sortear");
        return;
    }
   
    let amigosSorteados = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado =document.getElementById("resultado");
    resultado.innerHTML = `Tu amigo secreto es: ${amigosSorteados}`; 
    
   
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

 
}

