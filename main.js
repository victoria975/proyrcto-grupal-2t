// =======================
// MODO CLARO / OSCURO
// =======================

const btnModo = document.getElementById("btn-modo");

btnModo.addEventListener("click", () => {

    document.body.classList.toggle("noche");

});

// =======================
// MODALES FAVORITOS
// =======================

const openButtons = document.querySelectorAll(".openBtn");
const closeButtons = document.querySelectorAll(".closeBtn");
const modals = document.querySelectorAll(".miModal");

openButtons.forEach((btn, index) => {

    btn.addEventListener("click", () => {

        modals[index].showModal();

    });

});

closeButtons.forEach((btn, index) => {

    btn.addEventListener("click", () => {

        modals[index].close();

    });

});


console.log("JS cargado");// 1. Seleccionamos el título
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
