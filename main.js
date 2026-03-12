// 1. Seleccionamos el título
const titulo = document.querySelector("h1");

// 2. Cambiamos su texto
titulo.textContent = "Tiendas";

// 3. Cambiamos su color de fondo
titulo.style.backgroundColor = "pink";

// 1. Seleccionamos el botón
const miBoton = document.querySelector("#boton-magico");



// Seleccionamos el botón del modo
const button = document.querySelector("#btn-modo");

// Cuando se hace clic
button.addEventListener("click", function() {

    // Cambia entre modo claro y oscuro
    document.body.classList.toggle("noche");

});

const modal = document.getElementById("miModal");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

// Abrir el modal
openBtn.addEventListener("click", () => {
  modal.showModal(); // showModal() centra automáticamente
});

// Cerrar el modal
closeBtn.addEventListener("click", () => {
  modal.close();
});
