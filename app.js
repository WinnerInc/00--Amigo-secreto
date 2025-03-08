//delcarando arreglo que va a contener los nombres de los amigos secretos ingresado
let Amigos_Ingresados = [];

// cosas que se requieren hacer 
// 1. se debe ingresar el nombre de los amigos secretos
function agregarAmigo() {
    let NombreAmigo = document.getelementById("amigo");
    let amigo = NombreAmigo.value;
        
    if (amigo === "") {
        alert("Debes ingresar un nombre");
        return; // 2. se debe validar que el nombre no este vacio
        // 3. se debe validar que el nombre ingresado no exista en el arreglo
        // 4. se debe mostrar un mensaje de error si el nombre ya existe
    } else if (Amigos_Ingresados.includes(amigo)) {
        alert("El nombre ya existe");
        return;
        // 5. se debe mostrar un mensaje de exito si el nombre se agrego correctamente
    } else {
        Amigos_Ingresados.push(amigo);
        alert("Amigo ingresado correctamente");
    }
    console.log(Amigos_Ingresados); 
}







// 7. se debe mostrar la lista de amigos secretos
// 8. se debe preguntar si ya estan todos los amigos secretos ingresados
// 9. se debe realizar el sorteo de amigo secreto
// 10. se debe mostrar el resultado del sorteo de amigo secreto
// 11. se debe preguntar si se desea realizar un nuevo sorteo de amigo secreto  o salir del programa
// 12. se debe indicar que ya se han sorteado todos los amigos secretos