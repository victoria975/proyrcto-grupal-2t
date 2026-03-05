// 1. Seleccionamos el título
const titulo = document.querySelector("h1");

// 2. Cambiamos su texto
titulo.textContent = "Tiendas";

// 3. Cambiamos su color de fondo
titulo.style.backgroundColor = "pink";

// 1. Seleccionamos el botón
const miBoton = document.querySelector("#boton-magico");

// 2. Le pedimos que escuche el "click"
miBoton.addEventListener("click", function() {
    console.log("¡Has pulsado el botón!");
    document.body.style.backgroundColor = "lightblue";
});

const boton = document.querySelector("#btn-modo");

boton.addEventListener("click", function() {
    // Alterna la clase 'noche' en todo el cuerpo de la web
    document.body.classList.toggle("noche");
});
