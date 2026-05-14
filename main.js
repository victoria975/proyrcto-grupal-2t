// CAMBIO DE MODO OSCURO
const button = document.querySelector("#btn-modo");

if (button) {
    button.addEventListener("click", () => {
        document.body.classList.toggle("noche");
    });
}


// MODALES (FAVORITOS)
const botonesAbrir = document.querySelectorAll(".openBtn");
const modales = document.querySelectorAll(".miModal");

botonesAbrir.forEach((btn, index) => {
    const modal = modales[index];
    const cerrar = modal.querySelector(".closeBtn");

    // Abrir modal
    btn.addEventListener("click", () => {
        modal.showModal();
    });

    // Cerrar modal
    cerrar.addEventListener("click", () => {
        modal.close();
    });
});

//Botones de información
const botonesInfo = document.querySelectorAll(".btnInfo");

botonesInfo.forEach((btn) => {
    btn.addEventListener("click", () => {
        const url = btn.getAttribute("data-url");
        window.open(url, "_blank");
    });
});
