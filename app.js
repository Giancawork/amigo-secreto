// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Arreglo amigos
let amigos = [];

// Función para agregar un amigo al array amigos
function agregarAmigo() {
    //Capturar el nombre del amigo desde el input
    let nombre = document.getElementById("amigo").value;

    //Validar que el nombre no esté vacío
    //Si no está vacío, agregar el nombre al array amigos
    if (nombre) {
        // Agregar el nombre al array amigos
        amigos.push(nombre);
        // Limpiar el input
        document.getElementById("amigo").value = "";
        // Mostrar la lista actualizada de amigos
        mostrarAmigos();
    // Si está vacío, mostrar una alerta
    } else {
        alert("Por favor, inserte un nombre valido.");
    }     
}

// Función para mostrar la lista de amigos en el HTML
function mostrarAmigos() {
    // Capturar el elemento donde se mostrará la lista de amigos
    let lista = document.getElementById("listaAmigos");
    // Limpiar la lista antes de mostrarla nuevamente
    lista.innerHTML = "";
    // Reccorrer el array amigos usando un bucle for y crear un elemento de lista para cada amigo
    for (let i = 0; i < amigos.length; i++) {   
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    //Limpiar el id listaAmigos
    document.getElementById("listaAmigos").innerHTML = "";
    // Verificar si hay amigos en la lista
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }
    // Generar un número aleatorio entre 0 y la longitud del array amigos - 1
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    // Seleccionar un amigo al azar usando el índice aleatorio
    let amigoSeleccionado = amigos[indiceAleatorio];
    // Mostrar el amigo seleccionado en el id resultado
    document.getElementById("resultado").textContent = "El amigo secreto sorteado es: " + amigoSeleccionado;
    // Eliminar el amigo seleccionado del array amigos
    amigos.splice(indiceAleatorio, 1);
}
