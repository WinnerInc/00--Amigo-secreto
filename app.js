
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
    }
}