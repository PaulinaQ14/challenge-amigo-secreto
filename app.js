// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombres = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value;
    inputAmigo.value = "";
    //si agrego un texto vacio, debería salirme un alert
    if (nombre == ""){
        const mensaje = "Por favor, ingrese un nombre válido.";
        alert(mensaje)
        return;
    }
    listaNombres.push(nombre);
    console.log(listaNombres);

    //Guardar en listado
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    listaNombres.forEach(nombre => {
        const elemento = document.createElement("li");
        elemento.textContent = nombre;
        listaAmigos.appendChild(elemento);
    });

}

function sortearAmigo() {
    if(listaNombres.length == 0) return;
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");

    listaAmigos.innerHTML = "";
    resultado.innerHTML = "";
    const longitud = listaNombres.length;
    let indiceSeleccionado = Math.floor(Math.random() * longitud);
    const nombreSeleccionado = listaNombres[indiceSeleccionado];

    const elemento = document.createElement("li");
    elemento.textContent = `El nombre seleccionado es: ${nombreSeleccionado}`;
    resultado.appendChild(elemento);
}

