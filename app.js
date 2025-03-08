
let amigos = [];

//declarando arreglo que va a contener los amigos secretos asignados
//funcion para que todos los nombres esten en mayusculas y poder identificar repetidos


function agregarAmigo() {
    let nombre = document.getElementById("amigo");
    //obteniendo el valor del input
    let AmigoSecreto = nombre.value;
    //convirtiendo AmigoSecreto a mayusculas y asi poder comparar nombres
    AmigoSecreto = AmigoSecreto.toUpperCase();
    
    //asignando el valor del input a una variable
    console.log(AmigoSecreto);
    //validando que el nombre no este vacio
    if (AmigoSecreto === "") {
        alert("Por favor ingrese un nombre");
        return;
    }
    //validando que el nombre no este repetido
    else if (amigos.includes(AmigoSecreto)) {
        alert("Este nombre ya fue ingresado");
        return;
    }
    //agregando el nombre al arreglo de amigos  
    else {
        amigos.push(AmigoSecreto);
        console.log(amigos);
        //limpiando el input
        nombre.value = "";
        nombre.focus();
        listarAmigos();
        
    }
}

// funcion para listar id listaAmigos en el html    
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
//funcion para sortear amigos siempre que el numero sea par
function sortearAmigo() {
    //validar que el numero de amigos sea mayor a 0 y numero pár
    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }
    else if (amigos.length % 2 !== 0) {
        alert("El número de amigos debe ser par");
        return;
    }
    //creando el sorteo de amigos
    let amigosSorteados = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado =document.getElementById("resultado");
    resultado.innerHTML = `Tu amigo secreto es: ${amigosSorteados}`; 
    //limpar la lista cuando se hayan sorteado todos los amigos
    amigos = [];
    //limpiar la lista de amigos
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    
    

    
    console.log(amigosSorteados);
    
    
}

